import Link from 'next/link';

export default function ExpressServicePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1 className="display-4 fw-bold lh-1 mb-4">Express Portal - Fast & Reliable Shipping</h1>
              <p className="lead mb-4">
                Trusted partner for small businesses, large marketplaces and anyone else looking to send parcels across the country efficiently. Our Express Portal service ensures your shipments reach their destination quickly and safely.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <Link href="/register" className="btn btn-light btn-lg px-4 me-md-2 fw-bold">
                  Sign Up
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
                  Get a Quote
                </Link>
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0">
              <img className="img-fluid rounded-lg-3 shadow-lg" src="/Images/Ship.png" alt="Express Shipping" width="460" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div className="col-10 col-sm-8 col-lg-6 mx-auto">
              <img src="/Images/Express.png" className="d-block mx-lg-auto img-fluid rounded shadow" alt="Express Service" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Industry-Leading Express Parcel Service</h1>
              <p className="lead mb-3">
                MoveEasy&apos;s infrastructure and technology power our Express parcel service that caters to eCommerce marketplaces, D2C brands, omnichannel retailers, small and medium industries, large enterprises and consumers.
              </p>
              <p className="lead mb-4">
                With industry-leading Turn Around Times (TATs) and service level adherence, we ensure that your shipments reach more than 99.5% of the population reliably and effectively.
              </p>
              <div className="d-grid gap-2 d-md-flex">
                <Link href="/register" className="btn btn-primary btn-lg px-4">Learn More</Link>
                <Link href="/contact" className="btn btn-outline-secondary btn-lg px-4">Contact Sales</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

