'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { trackingAPI } from '@/lib/api';
import Link from 'next/link';

interface TrackingData {
  trackingNumber: string;
  status: string;
  timeline: any[];
  pickupAddress: any;
  deliveryAddress: any;
  estimatedDeliveryDate: string;
  actualDeliveryDate: string;
}

export default function TrackingPage() {
  const params = useParams();
  const [trackingData, setTrackingData] = useState<TrackingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchTracking();
  }, [params.id]);

  const fetchTracking = async () => {
    try {
      const response = await trackingAPI.getByTrackingNumber(params.id as string);
      setTrackingData(response.data);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Shipment not found');
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

  if (error || !trackingData) {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body text-center py-5">
                  <i className="bi bi-exclamation-triangle text-warning" style={{ fontSize: '3rem' }}></i>
                  <h3 className="mt-3">Shipment Not Found</h3>
                  <p className="text-muted">{error || 'The tracking number you entered is invalid.'}</p>
                  <Link href="/" className="btn btn-primary">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-4">
              <h1 className="display-5 fw-bold">Track Your Shipment</h1>
              <p className="lead">Tracking Number: <code>{trackingData.trackingNumber}</code></p>
            </div>

            <div className="card shadow mb-4">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h5 className="mb-1">Current Status</h5>
                    <span
                      className={`badge bg-${
                        trackingData.status === 'delivered'
                          ? 'success'
                          : trackingData.status === 'cancelled'
                          ? 'danger'
                          : 'primary'
                      }`}
                      style={{ fontSize: '1rem', padding: '0.5rem 1rem' }}
                    >
                      {trackingData.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  {trackingData.estimatedDeliveryDate && (
                    <div className="text-end">
                      <small className="text-muted">Estimated Delivery</small>
                      <p className="mb-0 fw-bold">
                        {new Date(trackingData.estimatedDeliveryDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="card shadow mb-4">
              <div className="card-header">
                <h5 className="mb-0">Tracking Timeline</h5>
              </div>
              <div className="card-body">
                {trackingData.timeline.map((event, index) => (
                  <div key={index} className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '40px', height: '40px' }}
                      >
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

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-header">
                    <h5 className="mb-0">Pickup Address</h5>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      <strong>{trackingData.pickupAddress?.name}</strong><br />
                      {trackingData.pickupAddress?.addressLine1}<br />
                      {trackingData.pickupAddress?.addressLine2 && (
                        <>
                          {trackingData.pickupAddress.addressLine2}<br />
                        </>
                      )}
                      {trackingData.pickupAddress?.city}, {trackingData.pickupAddress?.state}<br />
                      PIN: {trackingData.pickupAddress?.pincode}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-header">
                    <h5 className="mb-0">Delivery Address</h5>
                  </div>
                  <div className="card-body">
                    <p className="mb-0">
                      <strong>{trackingData.deliveryAddress?.name}</strong><br />
                      {trackingData.deliveryAddress?.addressLine1}<br />
                      {trackingData.deliveryAddress?.addressLine2 && (
                        <>
                          {trackingData.deliveryAddress.addressLine2}<br />
                        </>
                      )}
                      {trackingData.deliveryAddress?.city}, {trackingData.deliveryAddress?.state}<br />
                      PIN: {trackingData.deliveryAddress?.pincode}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <Link href="/" className="btn btn-outline-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

