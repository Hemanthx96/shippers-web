'use client';

import Link from 'next/link';

export default function FullTruckloadPage() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold lh-1 mb-4">
                Full Truckload (FTL) Shipping
              </h1>
              <p className="lead mb-4">
                Dedicated trucks for your bulk movements. MoveEasy offers reliable
                fleet availability, GPS-tracked trips, and secure transport for
                high-volume shipments across India.
              </p>
              <div className="d-grid gap-2 d-md-flex mb-4">
                <Link href="/register" className="btn btn-light btn-lg px-4 me-md-2">
                  Request a Truck
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <img
                className="img-fluid rounded shadow-lg"
                src="/Images/Ship.png"
                alt="Full Truckload"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">FTL services tailored to your cargo</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-truck-front" />
                  </div>
                  <h5 className="card-title">Dedicated Fleet</h5>
                  <p className="card-text">
                    Container, open, refrigerated and specialized trucks available
                    on-demand for long or short hauls.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-pin-map" />
                  </div>
                  <h5 className="card-title">Pan-India Coverage</h5>
                  <p className="card-text">
                    Primary routes connecting metros, ports, industrial hubs, and
                    tier-2 cities with guaranteed slots.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-shield-lock" />
                  </div>
                  <h5 className="card-title">Secure & Trackable</h5>
                  <p className="card-text">
                    E-locks, geofencing, and real-time visibility ensure mission-critical
                    cargo reaches safely and on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

