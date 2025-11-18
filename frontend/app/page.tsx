import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Move With Joy</h1>
              <p className="lead mb-4">
                Welcome to MoveEasy, India&apos;s trusted logistics partner. We are on a mission to provide
                exceptional shipping and moving services across India. We believe that shipping doesn&apos;t have to be stressful or complicated, and
                we are passionate about making the process as seamless and enjoyable
                as possible.
              </p>
              <div className="d-grid gap-2 d-sm-flex">
                <Link href="/register" className="btn btn-light btn-lg px-4 me-sm-3">
                  Get a Quote
                </Link>
                <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <img
                src="/Images/moving-van.jpg"
                className="img-fluid rounded-3 shadow-lg"
                alt="Moving van"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="section-padding">
        <div className="container px-4 py-5">
          <h2 className="pb-2 border-bottom text-center mb-5">Why Move With Us?</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <img src="/svg/briefcase.svg" alt="Briefcase" height="30" />
              </div>
              <h3 className="fs-2 text-body-emphasis">Professional</h3>
              <p>
                Our team of professional movers are trained to prioritize
                efficiency, organization, and attention to detail. We understand
                that your possessions are more than just objects - they are a
                reflection of your life, memories, and experiences. That&apos;s why we
                take extra care to ensure that everything is packed and transported
                with the utmost care and attention.
              </p>
              <Link href="/contact" className="icon-link">
                Get a quote
                <img src="/svg/chevron-right.svg" alt="chevron-right" height="16" />
              </Link>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <img src="/svg/bus-front.svg" alt="bus-front" height="30" />
              </div>
              <h3 className="fs-2 text-body-emphasis">Countrywide</h3>
              <p>
                We offer a range of services to suit your individual needs, whether
                you&apos;re moving locally or across India. Our team can handle
                everything from packing and loading to unloading and unpacking, so
                you can focus on settling into your new home. And with our
                transparent pricing and no hidden fees, you can trust that you&apos;re
                getting a fair and competitive rate for our services.
              </p>
              <Link href="/contact" className="icon-link">
                Get a quote
                <img src="/svg/chevron-right.svg" alt="chevron-right" height="16" />
              </Link>
            </div>
            <div className="feature col">
              <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <img
                  src="/svg/chat-square-heart.svg"
                  alt="chat-square-heart"
                  height="30"
                />
              </div>
              <h3 className="fs-2 text-body-emphasis">Personal Touch</h3>
              <p>
                At our core, we believe that moving should be an exciting and
                positive experience, not a stressful one. By providing exceptional
                moving services, we hope to revolutionize the way people
                think about moving and provide a better, more personalized
                experience for our customers. Contact us today to learn more about
                how we can help you with your next move.
              </p>
              <Link href="/contact" className="icon-link">
                Get a quote
                <img src="/svg/chevron-right.svg" alt="chevron-right" height="16" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Shipping Services</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card service-card">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>
                  <h5 className="card-title">Express Portal</h5>
                  <p className="card-text">
                    Fast and reliable express shipping services for time-sensitive deliveries. Get your packages delivered quickly and safely.
                  </p>
                  <Link href="/services/express" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card service-card">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-building"></i>
                  </div>
                  <h5 className="card-title">Warehousing</h5>
                  <p className="card-text">
                    Secure storage solutions with state-of-the-art facilities. Perfect for businesses needing inventory management.
                  </p>
                  <Link href="/services/warehousing" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card service-card">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-box-seam"></i>
                  </div>
                  <h5 className="card-title">Part Truckload</h5>
                  <p className="card-text">
                    Cost-effective shipping for loads that don&apos;t require a full truck. Share space and save money.
                  </p>
                  <Link href="/services/part-truckload" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card service-card">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-truck-front-fill"></i>
                  </div>
                  <h5 className="card-title">Full Truckload</h5>
                  <p className="card-text">
                    Dedicated truck service for large shipments. Fast, secure, and direct delivery for your complete load.
                  </p>
                  <Link href="/services/full-truckload" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card service-card">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-globe"></i>
                  </div>
                  <h5 className="card-title">Cross Border</h5>
                  <p className="card-text">
                    International shipping services with customs handling. Seamless cross-border logistics solutions.
                  </p>
                  <Link href="/services/cross-border" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card service-card">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <i className="bi bi-cash-coin"></i>
                  </div>
                  <h5 className="card-title">Cash on Delivery</h5>
                  <p className="card-text">
                    Secure COD services for e-commerce businesses. Get paid when your customers receive their orders.
                  </p>
                  <Link href="/services/cod" className="btn btn-primary">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 stat-item">
              <div className="stat-number">99.5%</div>
              <div className="text-muted">Delivery Success Rate</div>
            </div>
            <div className="col-md-3 col-6 stat-item">
              <div className="stat-number">50K+</div>
              <div className="text-muted">Happy Customers</div>
            </div>
            <div className="col-md-3 col-6 stat-item">
              <div className="stat-number">500+</div>
              <div className="text-muted">Cities Across India</div>
            </div>
            <div className="col-md-3 col-6 stat-item">
              <div className="stat-number">24/7</div>
              <div className="text-muted">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5">What Our Customers Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="mb-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="mb-3">
                  &quot;MoveEasy made our relocation stress-free. Professional team and excellent service throughout the entire process.&quot;
                </p>
                <strong>- Priya Sharma</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="mb-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="mb-3">
                  &quot;Fast delivery and great customer service. Our business shipments always arrive on time. Highly recommended!&quot;
                </p>
                <strong>- Rajesh Kumar</strong>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <div className="mb-3">
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                  <i className="bi bi-star-fill text-warning"></i>
                </div>
                <p className="mb-3">
                  &quot;The best shipping service we&apos;ve used. Transparent pricing and reliable delivery. Couldn&apos;t ask for more!&quot;
                </p>
                <strong>- Anjali Patel</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-light">
        <div className="container">
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/Images/couple.jpg"
                  className="d-block w-100"
                  alt="Happy couple"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/Images/dog.jpg"
                  className="d-block w-100"
                  alt="Pet moving"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/Images/family.jpg"
                  className="d-block w-100"
                  alt="Family moving"
                  style={{ height: '400px', objectFit: 'cover' }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">
            Get a free quote today and experience the MoveEasy difference
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link href="/register" className="btn btn-light btn-lg px-4 me-sm-3">
              Get a Free Quote
            </Link>
            <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
