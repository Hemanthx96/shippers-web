'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { addressesAPI, shipmentsAPI, paymentsAPI } from '@/lib/api';
import { isAuthenticated } from '@/lib/auth';

interface Address {
  _id: string;
  label: string;
  name: string;
  addressLine1: string;
  city: string;
  state: string;
  pincode: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CreateShipmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    pickupAddress: '',
    deliveryAddress: '',
    packageDetails: {
      weight: '',
      length: '',
      width: '',
      height: '',
      description: '',
      value: '',
    },
    serviceType: 'Standard',
    paymentMethod: 'Prepaid',
    codAmount: '',
    scheduledPickupDate: '',
    notes: '',
  });

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    fetchAddresses();
  }, [router]);

  const fetchAddresses = async () => {
    try {
      const response = await addressesAPI.getAll();
      setAddresses(response.data);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const shipmentData = {
        pickupAddress: formData.pickupAddress,
        deliveryAddress: formData.deliveryAddress,
        packageDetails: {
          weight: parseFloat(formData.packageDetails.weight),
          dimensions: {
            length: parseFloat(formData.packageDetails.length),
            width: parseFloat(formData.packageDetails.width),
            height: parseFloat(formData.packageDetails.height),
          },
          description: formData.packageDetails.description,
          value: parseFloat(formData.packageDetails.value),
        },
        serviceType: formData.serviceType,
        paymentMethod: formData.paymentMethod,
        codAmount: formData.paymentMethod === 'COD' ? parseFloat(formData.codAmount) : 0,
        scheduledPickupDate: formData.scheduledPickupDate,
        notes: formData.notes,
      };

      const response = await shipmentsAPI.create(shipmentData);
      const shipment = response.data;

      // If prepaid, proceed to payment
      if (formData.paymentMethod === 'Prepaid') {
        await handlePayment(shipment._id, shipment.pricing.total);
      } else {
        router.push(`/shipments/${shipment._id}`);
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create shipment');
    } finally {
      setLoading(false);
    }
  };

  const handlePayment = async (shipmentId: string, amount: number) => {
    try {
      const orderResponse = await paymentsAPI.createOrder({ shipmentId, amount });
      const { orderId } = orderResponse.data;

      // Load Razorpay script
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: amount * 100,
          currency: 'INR',
          name: 'MoveEasy',
          description: 'Shipment Payment',
          order_id: orderId,
          handler: async (response: any) => {
            try {
              await paymentsAPI.verify({
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
                shipmentId,
              });
              router.push(`/shipments/${shipmentId}`);
            } catch (error) {
              setError('Payment verification failed');
            }
          },
          prefill: {
            name: '',
            email: '',
            contact: '',
          },
          theme: {
            color: '#667eea',
          },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      };
      document.body.appendChild(script);
    } catch (error) {
      setError('Failed to initialize payment');
    }
  };

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="mb-4">Create New Shipment</h1>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Address Selection */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">Pickup & Delivery Addresses</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Pickup Address</label>
                      <select
                        className="form-select"
                        required
                        value={formData.pickupAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, pickupAddress: e.target.value })
                        }
                      >
                        <option value="">Select pickup address</option>
                        {addresses.map((addr) => (
                          <option key={addr._id} value={addr._id}>
                            {addr.label} - {addr.addressLine1}, {addr.city}
                          </option>
                        ))}
                      </select>
                      <Link
                        href="/addresses/new?redirect=/shipments/create"
                        className="btn btn-sm btn-link mt-2"
                      >
                        + Add New Address
                      </Link>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Delivery Address</label>
                      <select
                        className="form-select"
                        required
                        value={formData.deliveryAddress}
                        onChange={(e) =>
                          setFormData({ ...formData, deliveryAddress: e.target.value })
                        }
                      >
                        <option value="">Select delivery address</option>
                        {addresses.map((addr) => (
                          <option key={addr._id} value={addr._id}>
                            {addr.label} - {addr.addressLine1}, {addr.city}
                          </option>
                        ))}
                      </select>
                      <Link
                        href="/addresses/new?redirect=/shipments/create"
                        className="btn btn-sm btn-link mt-2"
                      >
                        + Add New Address
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">Package Details</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Weight (kg)</label>
                      <input
                        type="number"
                        className="form-control"
                        required
                        min="0.1"
                        step="0.1"
                        value={formData.packageDetails.weight}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            packageDetails: {
                              ...formData.packageDetails,
                              weight: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Package Value (₹)</label>
                      <input
                        type="number"
                        className="form-control"
                        required
                        min="0"
                        value={formData.packageDetails.value}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            packageDetails: {
                              ...formData.packageDetails,
                              value: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Length (cm)</label>
                      <input
                        type="number"
                        className="form-control"
                        required
                        min="1"
                        value={formData.packageDetails.length}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            packageDetails: {
                              ...formData.packageDetails,
                              length: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Width (cm)</label>
                      <input
                        type="number"
                        className="form-control"
                        required
                        min="1"
                        value={formData.packageDetails.width}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            packageDetails: {
                              ...formData.packageDetails,
                              width: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="col-md-4 mb-3">
                      <label className="form-label">Height (cm)</label>
                      <input
                        type="number"
                        className="form-control"
                        required
                        min="1"
                        value={formData.packageDetails.height}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            packageDetails: {
                              ...formData.packageDetails,
                              height: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Description</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        value={formData.packageDetails.description}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            packageDetails: {
                              ...formData.packageDetails,
                              description: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service & Payment */}
              <div className="card mb-4">
                <div className="card-header">
                  <h5 className="mb-0">Service & Payment</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Service Type</label>
                      <select
                        className="form-select"
                        value={formData.serviceType}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceType: e.target.value })
                        }
                      >
                        <option value="Economy">Economy</option>
                        <option value="Standard">Standard</option>
                        <option value="Express">Express</option>
                      </select>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Payment Method</label>
                      <select
                        className="form-select"
                        required
                        value={formData.paymentMethod}
                        onChange={(e) =>
                          setFormData({ ...formData, paymentMethod: e.target.value })
                        }
                      >
                        <option value="Prepaid">Prepaid</option>
                        <option value="COD">Cash on Delivery</option>
                      </select>
                    </div>
                    {formData.paymentMethod === 'COD' && (
                      <div className="col-md-6 mb-3">
                        <label className="form-label">COD Amount (₹)</label>
                        <input
                          type="number"
                          className="form-control"
                          required
                          min="0"
                          value={formData.codAmount}
                          onChange={(e) =>
                            setFormData({ ...formData, codAmount: e.target.value })
                          }
                        />
                      </div>
                    )}
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Scheduled Pickup Date</label>
                      <input
                        type="date"
                        className="form-control"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.scheduledPickupDate}
                        onChange={(e) =>
                          setFormData({ ...formData, scheduledPickupDate: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Special Instructions (Optional)</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData({ ...formData, notes: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => router.back()}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                  {loading ? 'Creating...' : 'Create Shipment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

