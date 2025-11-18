'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { addressesAPI } from '@/lib/api';
import { isAuthenticated } from '@/lib/auth';

interface Address {
  _id: string;
  label: 'Home' | 'Office' | 'Other';
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  landmark?: string;
  isDefault?: boolean;
}

export default function AddressesPage() {
  const router = useRouter();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    fetchAddresses();
  }, [router]);

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      const response = await addressesAPI.getAll();
      setAddresses(response.data);
    } catch (err: any) {
      setError(
        err.response?.data?.message || 'Failed to load saved addresses.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSetDefault = async (id: string) => {
    try {
      setActionLoading(id);
      await addressesAPI.update(id, { isDefault: true });
      await fetchAddresses();
    } catch (err: any) {
      setError(
        err.response?.data?.message || 'Failed to update default address.'
      );
    } finally {
      setActionLoading(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this address? This action cannot be undone.')) return;
    try {
      setActionLoading(id);
      await addressesAPI.delete(id);
      setAddresses((prev) => prev.filter((address) => address._id !== id));
    } catch (err: any) {
      setError(
        err.response?.data?.message || 'Failed to delete the address.'
      );
    } finally {
      setActionLoading(null);
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
        <div className="row align-items-center mb-4">
          <div className="col">
            <h1 className="display-5 fw-bold">Saved Addresses</h1>
            <p className="text-muted mb-0">
              Store pickup and delivery addresses for quick booking.
            </p>
          </div>
          <div className="col-auto">
            <Link href="/addresses/new" className="btn btn-primary btn-lg">
              <i className="bi bi-plus-circle me-2" />
              Add New Address
            </Link>
          </div>
        </div>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        {addresses.length === 0 ? (
          <div className="card shadow">
            <div className="card-body text-center py-5">
              <i
                className="bi bi-geo-alt text-muted mb-3"
                style={{ fontSize: '3rem' }}
              />
              <h4>No saved addresses yet</h4>
              <p className="text-muted">
                Add your pickup and delivery locations to reuse them later.
              </p>
              <Link href="/addresses/new" className="btn btn-primary">
                Add Address
              </Link>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {addresses.map((address) => (
              <div className="col-md-6" key={address._id}>
                <div className="card shadow-sm h-100">
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-primary">{address.label}</span>
                      {address.isDefault && (
                        <span className="badge bg-success">Default</span>
                      )}
                    </div>
                    <h5 className="card-title mb-1">{address.name}</h5>
                    <p className="text-muted mb-3">{address.phone}</p>
                    <p className="mb-3">
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
                    <div className="mt-auto d-flex gap-2">
                      {!address.isDefault && (
                        <button
                          className="btn btn-outline-primary btn-sm"
                          onClick={() => handleSetDefault(address._id)}
                          disabled={actionLoading === address._id}
                        >
                          {actionLoading === address._id
                            ? 'Updating...'
                            : 'Set as Default'}
                        </button>
                      )}
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(address._id)}
                        disabled={actionLoading === address._id}
                      >
                        {actionLoading === address._id
                          ? 'Deleting...'
                          : 'Delete'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


