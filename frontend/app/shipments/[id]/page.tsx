'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { shipmentsAPI } from '@/lib/api';
import { isAuthenticated } from '@/lib/auth';
import Link from 'next/link';

interface Shipment {
  _id: string;
  trackingNumber: string;
  status: string;
  pickupAddress: any;
  deliveryAddress: any;
  packageDetails: any;
  pricing: any;
  timeline: any[];
  createdAt: string;
}

export default function ShipmentDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    fetchShipment();
  }, [params.id, router]);

  const fetchShipment = async () => {
    try {
      const response = await shipmentsAPI.getById(params.id as string);
      setShipment(response.data);
    } catch (error) {
      console.error('Error fetching shipment:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="section-padding">
        <div className="container text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!shipment) {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="alert alert-warning">Shipment not found</div>
          <Link href="/dashboard" className="btn btn-primary">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1 className="display-5 fw-bold">Shipment Details</h1>
            <p className="lead">Tracking Number: <code>{shipment.trackingNumber}</code></p>
          </div>
          <div className="col-auto">
            <Link href="/dashboard" className="btn btn-outline-secondary">
              Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-8">
            <div className="card shadow mb-4">
              <div className="card-header">
                <h5 className="mb-0">Status</h5>
              </div>
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  <span
                    className={`badge bg-${
                      shipment.status === 'delivered'
                        ? 'success'
                        : shipment.status === 'cancelled'
                        ? 'danger'
                        : 'primary'
                    } me-3`}
                    style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
                  >
                    {shipment.status.replace('_', ' ').toUpperCase()}
                  </span>
                </div>

                <h6 className="mt-4 mb-3">Timeline</h6>
                <div className="timeline">
                  {shipment.timeline.map((event, index) => (
                    <div key={index} className="d-flex mb-3">
                      <div className="flex-shrink-0">
                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                          style={{ width: '40px', height: '40px' }}>
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-1">{event.message}</h6>
                        <p className="text-muted mb-0 small">
                          {new Date(event.timestamp).toLocaleString()}
                          {event.location && ` • ${event.location}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card shadow">
              <div className="card-header">
                <h5 className="mb-0">Package Details</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <p><strong>Weight:</strong> {shipment.packageDetails.weight} kg</p>
                    <p><strong>Dimensions:</strong> {shipment.packageDetails.dimensions.length} × {shipment.packageDetails.dimensions.width} × {shipment.packageDetails.dimensions.height} cm</p>
                  </div>
                  <div className="col-md-6">
                    <p><strong>Value:</strong> ₹{shipment.packageDetails.value.toLocaleString()}</p>
                    {shipment.packageDetails.description && (
                      <p><strong>Description:</strong> {shipment.packageDetails.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow mb-4">
              <div className="card-header">
                <h5 className="mb-0">Pricing</h5>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-2">
                  <span>Base Price:</span>
                  <span>₹{shipment.pricing.basePrice.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Fuel Surcharge:</span>
                  <span>₹{shipment.pricing.fuelSurcharge.toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>GST:</span>
                  <span>₹{shipment.pricing.gst.toLocaleString()}</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <strong>Total:</strong>
                  <strong>₹{shipment.pricing.total.toLocaleString()}</strong>
                </div>
              </div>
            </div>

            <div className="card shadow mb-4">
              <div className="card-header">
                <h5 className="mb-0">Pickup Address</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  <strong>{shipment.pickupAddress?.name}</strong><br />
                  {shipment.pickupAddress?.addressLine1}<br />
                  {shipment.pickupAddress?.addressLine2 && (
                    <>
                      {shipment.pickupAddress.addressLine2}<br />
                    </>
                  )}
                  {shipment.pickupAddress?.city}, {shipment.pickupAddress?.state}<br />
                  PIN: {shipment.pickupAddress?.pincode}
                </p>
              </div>
            </div>

            <div className="card shadow">
              <div className="card-header">
                <h5 className="mb-0">Delivery Address</h5>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  <strong>{shipment.deliveryAddress?.name}</strong><br />
                  {shipment.deliveryAddress?.addressLine1}<br />
                  {shipment.deliveryAddress?.addressLine2 && (
                    <>
                      {shipment.deliveryAddress.addressLine2}<br />
                    </>
                  )}
                  {shipment.deliveryAddress?.city}, {shipment.deliveryAddress?.state}<br />
                  PIN: {shipment.deliveryAddress?.pincode}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

