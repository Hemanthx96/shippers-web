'use client';

import Link from 'next/link';

export default function WarehousingPage() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold lh-1 mb-4">
                Professional Warehousing Solutions
              </h1>
              <p className="lead mb-4">
                Secure, state-of-the-art storage facilities designed for
                businesses of all sizes. Our warehousing services provide
                comprehensive inventory management, ensuring your products are
                safe, organized, and ready for distribution.
              </p>
              <div className="d-grid gap-2 d-md-flex mb-4">
                <Link href="/register" className="btn btn-light btn-lg px-4 me-md-2">
                  Get a Quote
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
                  Talk to Us
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <img
                className="img-fluid rounded shadow-lg"
                src="/Images/ParcelMan.png"
                alt="Warehousing Solutions"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose MoveEasy Warehousing?</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-shield-check" />
                  </div>
                  <h5 className="card-title">Secure Storage</h5>
                  <p className="card-text">
                    24/7 surveillance, fire safety compliance, and access control
                    to keep your inventory safe.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-clipboard-data" />
                  </div>
                  <h5 className="card-title">Inventory Management</h5>
                  <p className="card-text">
                    Real-time stock visibility, automated reconciliation, and
                    system integrations for accuracy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-truck" />
                  </div>
                  <h5 className="card-title">Pan-India Network</h5>
                  <p className="card-text">
                    Warehouses near major metros and tier-2 cities help you reach
                    customers faster.
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

