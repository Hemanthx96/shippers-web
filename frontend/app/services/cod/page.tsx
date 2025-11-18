'use client';

import Link from 'next/link';

export default function CodServicePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold lh-1 mb-4">
                Cash on Delivery (COD) Solutions
              </h1>
              <p className="lead mb-4">
                Boost conversions with trusted COD services. MoveEasy delivers,
                collects cash, reconciles payments, and remits funds the next day
                so you stay cash-flow positive.
              </p>
              <div className="d-grid gap-2 d-md-flex mb-4">
                <Link href="/register" className="btn btn-light btn-lg px-4 me-md-2">
                  Enable COD
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <img
                className="img-fluid rounded shadow-lg"
                src="/Images/cod.png"
                alt="Cash on Delivery"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Why brands trust MoveEasy COD</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-clock-history" />
                  </div>
                  <h5 className="card-title">Next-day remittance</h5>
                  <p className="card-text">
                    Free up your working capital with next-day settlement options
                    and consolidated reports.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-shield-check" />
                  </div>
                  <h5 className="card-title">Secure collection</h5>
                  <p className="card-text">
                    Delivery executives carry tamper-proof pouches with digital
                    acknowledgement for every payment received.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-bar-chart" />
                  </div>
                  <h5 className="card-title">Real-time tracking</h5>
                  <p className="card-text">
                    Know which orders are delivered, pending, or refunded. Export
                    reports or integrate via API to automate reconciliation.
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

