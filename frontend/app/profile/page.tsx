'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { authAPI, addressesAPI, shipmentsAPI } from '@/lib/api';
import { isAuthenticated } from '@/lib/auth';

export default function ProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [user, setUser] = useState<any>(null);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [shipments, setShipments] = useState<any[]>([]);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    const loadData = async () => {
      try {
        const [userRes, addressRes, shipmentRes] = await Promise.all([
          authAPI.getMe(),
          addressesAPI.getAll(),
          shipmentsAPI.getAll(),
        ]);
        setUser(userRes.data);
        setAddresses(addressRes.data);
        setShipments(shipmentRes.data);
      } catch (err: any) {
        setError(
          err.response?.data?.message ||
            'Failed to load profile information. Please try again.'
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [router]);

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

  if (error) {
    return (
      <div className="section-padding">
        <div className="container">
          <div className="alert alert-danger">{error}</div>
          <button className="btn btn-outline-primary" onClick={() => router.refresh()}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="container">
        <div className="row mb-4">
          <div className="col">
            <h1 className="display-5 fw-bold">My Profile</h1>
            <p className="text-muted mb-0">Manage your MoveEasy account.</p>
          </div>
          <div className="col-auto">
            <Link href="/dashboard" className="btn btn-outline-primary">
              Back to Dashboard
            </Link>
          </div>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Personal Information</h5>
                <dl className="row mb-0">
                  <dt className="col-sm-4 text-muted">Name</dt>
                  <dd className="col-sm-8">{user?.name || '-'}</dd>

                  <dt className="col-sm-4 text-muted">Email</dt>
                  <dd className="col-sm-8">{user?.email}</dd>

                  <dt className="col-sm-4 text-muted">Phone</dt>
                  <dd className="col-sm-8">{user?.phone || '-'}</dd>

                  <dt className="col-sm-4 text-muted">Member Since</dt>
                  <dd className="col-sm-8">
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : '-'}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Account Summary</h5>
                <div className="row">
                  <div className="col-sm-6 mb-3">
                    <div className="p-3 bg-light rounded">
                      <p className="text-muted mb-1">Shipments</p>
                      <h3 className="mb-0 text-primary">
                        {shipments.length.toLocaleString()}
                      </h3>
                      <Link href="/shipments" className="small text-decoration-none">
                        View shipments →
                      </Link>
                    </div>
                  </div>
                  <div className="col-sm-6 mb-3">
                    <div className="p-3 bg-light rounded">
                      <p className="text-muted mb-1">Saved Addresses</p>
                      <h3 className="mb-0 text-primary">
                        {addresses.length.toLocaleString()}
                      </h3>
                      <Link href="/addresses" className="small text-decoration-none">
                        Manage addresses →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Saved Addresses</h5>
              <Link href="/addresses/new" className="btn btn-sm btn-primary">
                Add Address
              </Link>
            </div>
          </div>
          <div className="card-body">
            {addresses.length === 0 ? (
              <p className="text-muted mb-0">
                No addresses saved yet. Add one to speed up bookings.
              </p>
            ) : (
              <div className="row g-3">
                {addresses.map((address) => (
                  <div className="col-md-6" key={address._id}>
                    <div className="border rounded p-3 h-100">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="badge bg-primary">{address.label}</span>
                        {address.isDefault && (
                          <span className="badge bg-success">Default</span>
                        )}
                      </div>
                      <p className="mb-1 fw-semibold">{address.name}</p>
                      <p className="mb-1 text-muted">{address.phone}</p>
                      <p className="mb-0">
                        {address.addressLine1}
                        {address.addressLine2 && <>, {address.addressLine2}</>}
                        <br />
                        {address.city}, {address.state} - {address.pincode}
                        {address.landmark && (
                          <>
                            <br />
                            Landmark: {address.landmark}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


