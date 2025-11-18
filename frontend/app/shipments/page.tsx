'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { shipmentsAPI } from '@/lib/api';
import { isAuthenticated } from '@/lib/auth';

interface Shipment {
  _id: string;
  trackingNumber: string;
  status: string;
  pricing: {
    total: number;
  };
  createdAt: string;
  pickupAddress: any;
  deliveryAddress: any;
}

export default function ShipmentsPage() {
  const router = useRouter();
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    fetchShipments();
  }, [router]);

  const fetchShipments = async () => {
    try {
      const response = await shipmentsAPI.getAll();
      setShipments(response.data);
    } catch (error) {
      console.error('Error fetching shipments:', error);
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

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1 className="display-5 fw-bold">My Shipments</h1>
          </div>
          <div className="col-auto">
            <Link href="/shipments/create" className="btn btn-primary btn-lg">
              <i className="bi bi-plus-circle me-2"></i>Create Shipment
            </Link>
          </div>
        </div>

        {shipments.length === 0 ? (
          <div className="card shadow">
            <div className="card-body text-center py-5">
              <i className="bi bi-box-seam text-muted" style={{ fontSize: '4rem' }}></i>
              <h3 className="mt-3">No Shipments Yet</h3>
              <p className="text-muted">Create your first shipment to get started.</p>
              <Link href="/shipments/create" className="btn btn-primary btn-lg">
                Create Shipment
              </Link>
            </div>
          </div>
        ) : (
          <div className="card shadow">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tracking Number</th>
                      <th>Pickup</th>
                      <th>Delivery</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipments.map((shipment) => (
                      <tr key={shipment._id}>
                        <td>
                          <code>{shipment.trackingNumber}</code>
                        </td>
                        <td>
                          {shipment.pickupAddress?.city || 'N/A'}
                        </td>
                        <td>
                          {shipment.deliveryAddress?.city || 'N/A'}
                        </td>
                        <td>
                          <span
                            className={`badge bg-${
                              shipment.status === 'delivered'
                                ? 'success'
                                : shipment.status === 'cancelled'
                                ? 'danger'
                                : 'primary'
                            }`}
                          >
                            {shipment.status.replace('_', ' ').toUpperCase()}
                          </span>
                        </td>
                        <td>₹{shipment.pricing?.total?.toLocaleString()}</td>
                        <td>
                          {new Date(shipment.createdAt).toLocaleDateString()}
                        </td>
                        <td>
                          <Link
                            href={`/shipments/${shipment._id}`}
                            className="btn btn-sm btn-outline-primary me-2"
                          >
                            View
                          </Link>
                          <Link
                            href={`/tracking/${shipment.trackingNumber}`}
                            className="btn btn-sm btn-outline-info"
                          >
                            Track
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

