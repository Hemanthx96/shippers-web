'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4">Get In Touch</h1>
              <p className="lead mb-4">
                Have questions? We&apos;re here to help! Contact us today to learn more about our shipping services or get a free quote for your next shipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-telephone-fill text-primary" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h5 className="card-title">Phone</h5>
                  <p className="card-text text-muted mb-2">Call us anytime</p>
                  <p className="card-text">
                    <a href="tel:+9118001234567" className="text-decoration-none">+91 1800 123 4567</a>
                  </p>
                  <p className="card-text text-muted small">Mon-Fri: 8AM - 8PM IST</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-envelope-fill text-primary" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h5 className="card-title">Email</h5>
                  <p className="card-text text-muted mb-2">Send us an email</p>
                  <p className="card-text">
                    <a href="mailto:info@moveeasy.in" className="text-decoration-none">info@moveeasy.in</a>
                  </p>
                  <p className="card-text text-muted small">We&apos;ll respond within 24 hours</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100 text-center p-4">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-geo-alt-fill text-primary" style={{ fontSize: '2.5rem' }}></i>
                  </div>
                  <h5 className="card-title">Address</h5>
                  <p className="card-text text-muted mb-2">Visit our office</p>
                  <p className="card-text">
                    123 Logistics Park<br />
                    Whitefield, Bangalore<br />
                    Karnataka 560066, India
                  </p>
                  <p className="card-text text-muted small">Mon-Fri: 9AM - 5PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4">Send Us a Message</h2>
                  <p className="text-center text-muted mb-4">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                  {submitted && (
                    <div className="alert alert-success" role="alert">
                      Thank you! We&apos;ve received your message and will get back to you soon.
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label htmlFor="firstName" className="form-label">
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          required
                          value={formData.firstName}
                          onChange={(e) =>
                            setFormData({ ...formData, firstName: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          required
                          value={formData.lastName}
                          onChange={(e) =>
                            setFormData({ ...formData, lastName: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="service" className="form-label">
                        Service Interested In
                      </label>
                      <select
                        className="form-select"
                        id="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                      >
                        <option value="">Select a service...</option>
                        <option value="express">Express Portal</option>
                        <option value="warehousing">Warehousing</option>
                        <option value="part-truckload">Part Truckload</option>
                        <option value="full-truckload">Full Truckload</option>
                        <option value="cross-border">Cross Border</option>
                        <option value="cod">Cash on Delivery</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                      ></textarea>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

