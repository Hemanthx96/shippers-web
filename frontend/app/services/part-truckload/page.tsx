'use client';

import Link from 'next/link';

export default function PartTruckloadPage() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold lh-1 mb-4">
                Part Truckload (LTL) Shipping
              </h1>
              <p className="lead mb-4">
                Cost-effective shipping for loads that don&apos;t require a full
                truck. Share capacity with other shippers and pay only for the
                space you use while enjoying MoveEasy&apos;s reliability.
              </p>
              <div className="d-grid gap-2 d-md-flex mb-4">
                <Link href="/register" className="btn btn-light btn-lg px-4 me-md-2">
                  Calculate Rates
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
                  Talk to an Expert
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <img
                className="img-fluid rounded shadow-lg"
                src="/Images/ParcelMan.png"
                alt="Part Truckload"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Perfect for Small & Mid-size Shipments</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-currency-rupee" />
                  </div>
                  <h5 className="card-title">Pay-as-you-ship</h5>
                  <p className="card-text">
                    Transparent pricing based on weight or pallet count. No hidden
                    fees or minimum commitments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-speedometer2" />
                  </div>
                  <h5 className="card-title">Scheduled Departures</h5>
                  <p className="card-text">
                    Frequent departures between major lanes mean faster transit and
                    predictable delivery windows.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-box-seam" />
                  </div>
                  <h5 className="card-title">Ideal shipment size</h5>
                  <p className="card-text">
                    Best suited for 1-6 pallets, 50–2,500 kg shipments, seasonal
                    stock moves, and store replenishments.
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

