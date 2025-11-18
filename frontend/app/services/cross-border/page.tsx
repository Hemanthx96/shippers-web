'use client';

import Link from 'next/link';

export default function CrossBorderPage() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold lh-1 mb-4">
                Cross Border Logistics &amp; Customs Management
              </h1>
              <p className="lead mb-4">
                Expand to global markets with one partner. MoveEasy handles pickup,
                export documentation, customs clearance, and final-mile delivery
                for shipments leaving or entering India.
              </p>
              <div className="d-grid gap-2 d-md-flex mb-4">
                <Link href="/register" className="btn btn-light btn-lg px-4 me-md-2">
                  Start Shipping
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
                  Book a Consultation
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <img
                className="img-fluid rounded shadow-lg"
                src="/Images/Ship.png"
                alt="Cross Border Logistics"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Door-to-Door International Coverage</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-globe" />
                  </div>
                  <h5 className="card-title">Global Reach</h5>
                  <p className="card-text">
                    Shipping lanes to South Asia, Middle East, North America, and
                    Europe with consolidated freight options.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-file-text" />
                  </div>
                  <h5 className="card-title">Customs Expertise</h5>
                  <p className="card-text">
                    Harmonised codes, duty calculation, export incentives, and
                    compliance handled end-to-end by our specialists.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-airplane" />
                  </div>
                  <h5 className="card-title">Multi-Modal Options</h5>
                  <p className="card-text">
                    Air, sea, and road solutions with bonded warehousing and duty
                    paid warehouses in key partner countries.
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

