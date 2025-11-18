'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { authAPI, shipmentsAPI } from '@/lib/api';
import { isAuthenticated } from '@/lib/auth';

interface Shipment {
  _id: string;
  trackingNumber: string;
  status: string;
  pricing: {
    total: number;
  };
  createdAt: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }

    fetchData();
  }, [router]);

  const fetchData = async () => {
    try {
      const [userRes, shipmentsRes] = await Promise.all([
        authAPI.getMe(),
        shipmentsAPI.getAll(),
      ]);
      setUser(userRes.data);
      setShipments(shipmentsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
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
            <h1 className="display-5 fw-bold">Dashboard</h1>
            <p className="lead">Welcome back, {user?.name}!</p>
          </div>
          <div className="col-auto">
            <Link href="/shipments/create" className="btn btn-primary btn-lg">
              <i className="bi bi-plus-circle me-2"></i>Create Shipment
            </Link>
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Shipments</h5>
                <h2 className="text-primary">{shipments.length}</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Active Shipments</h5>
                <h2 className="text-success">
                  {
                    shipments.filter(
                      (s) =>
                        !['delivered', 'cancelled', 'failed'].includes(s.status)
                    ).length
                  }
                </h2>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Total Spent</h5>
                <h2 className="text-info">
                  ₹
                  {shipments
                    .reduce((sum, s) => sum + (s.pricing?.total || 0), 0)
                    .toLocaleString()}
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="card shadow">
          <div className="card-header">
            <h5 className="mb-0">Recent Shipments</h5>
          </div>
          <div className="card-body">
            {shipments.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted">No shipments yet.</p>
                <Link href="/shipments/create" className="btn btn-primary">
                  Create Your First Shipment
                </Link>
              </div>
            ) : (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tracking Number</th>
                      <th>Status</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shipments.slice(0, 10).map((shipment) => (
                      <tr key={shipment._id}>
                        <td>
                          <code>{shipment.trackingNumber}</code>
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
                            className="btn btn-sm btn-outline-primary"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

