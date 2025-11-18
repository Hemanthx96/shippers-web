import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">About MoveEasy</h1>
              <p className="lead mb-4">
                We are on a mission to provide exceptional shipping and moving services. We believe that shipping doesn&apos;t have to be stressful or complicated, and we are passionate about making the process as seamless and enjoyable as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Our Story</h2>
              <p className="lead mb-4">
                MoveEasy was founded with a simple vision: to revolutionize the shipping and logistics industry by making it accessible, reliable, and stress-free for everyone.
              </p>
              <p className="mb-4">
                What started as a small startup has grown into a trusted partner for thousands of businesses and individuals across India. We&apos;ve built our reputation on three core principles: professionalism, reliability, and a personal touch that sets us apart from the competition.
              </p>
              <p className="mb-4">
                Today, we serve customers from small e-commerce businesses to large enterprises, helping them move their goods efficiently and safely. Our extensive network, state-of-the-art technology, and dedicated team ensure that every shipment is handled with the utmost care.
              </p>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <img
                src="/Images/moving-van.jpg"
                className="img-fluid rounded shadow-lg"
                alt="Our Team"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Our Core Values</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <img src="/svg/briefcase.svg" alt="Professional" height="24" style={{ filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <h5 className="card-title">Professional</h5>
                  <p className="card-text">
                    Our team of professional movers are trained to prioritize efficiency, organization, and attention to detail. We understand that your possessions are more than just objects - they are a reflection of your life, memories, and experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <img src="/svg/bus-front.svg" alt="Countrywide" height="24" style={{ filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <h5 className="card-title">Countrywide</h5>
                  <p className="card-text">
                    We offer a range of services to suit your individual needs, whether you&apos;re moving locally or across India. Our team can handle everything from packing and loading to unloading and unpacking.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="feature-icon bg-primary bg-gradient text-white mb-3">
                    <img src="/svg/chat-square-heart.svg" alt="Personal Touch" height="24" style={{ filter: 'brightness(0) invert(1)' }} />
                  </div>
                  <h5 className="card-title">Personal Touch</h5>
                  <p className="card-text">
                    At our core, we believe that moving should be an exciting and positive experience, not a stressful one. We provide a better, more personalized experience for our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose MoveEasy?</h2>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="feature-icon bg-primary bg-gradient text-white mx-auto mb-3">
                  <i className="bi bi-trophy"></i>
                </div>
                <h5>99.5% Success Rate</h5>
                <p className="text-muted">Industry-leading delivery success rate ensuring your shipments arrive safely and on time.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="feature-icon bg-primary bg-gradient text-white mx-auto mb-3">
                  <i className="bi bi-people"></i>
                </div>
                <h5>50K+ Happy Customers</h5>
                <p className="text-muted">Trusted by thousands of businesses and individuals across India.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="feature-icon bg-primary bg-gradient text-white mx-auto mb-3">
                  <i className="bi bi-geo-alt"></i>
                </div>
                <h5>500+ Cities</h5>
                <p className="text-muted">Extensive network covering major cities and remote locations across India.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="feature-icon bg-primary bg-gradient text-white mx-auto mb-3">
                  <i className="bi bi-headset"></i>
                </div>
                <h5>24/7 Support</h5>
                <p className="text-muted">Round-the-clock customer support to assist you whenever you need help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold mb-4">Our Mission</h2>
              <p className="lead mb-4">
                To revolutionize the way people think about shipping and moving by providing exceptional services that are accessible, reliable, and stress-free. We strive to make logistics simple and enjoyable for everyone.
              </p>
              <p className="mb-4">
                Through innovation, dedication, and a customer-first approach, we&apos;re building a future where shipping and moving services are seamless, transparent, and affordable for businesses and individuals alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Work With Us?</h2>
          <p className="lead mb-4">Join thousands of satisfied customers who trust MoveEasy for their shipping needs</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link href="/register" className="btn btn-light btn-lg px-4 me-sm-3">
              Get a Free Quote
            </Link>
            <Link href="/contact" className="btn btn-outline-light btn-lg px-4">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

