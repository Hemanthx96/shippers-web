import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">MoveEasy</h5>
            <p className="text-white-50">
              Your trusted partner for all shipping and moving needs. We make
              logistics simple and reliable.
            </p>
          </div>
          <div className="col-md-2 mb-4 mb-md-0">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/" className="text-white-50 text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white-50 text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white-50 text-decoration-none">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white-50 text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-4 mb-md-0">
            <h5 className="mb-3">Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link href="/services/express" className="text-white-50 text-decoration-none">
                  Express Portal
                </Link>
              </li>
              <li>
                <Link href="/services/warehousing" className="text-white-50 text-decoration-none">
                  Warehousing
                </Link>
              </li>
              <li>
                <Link href="/services/part-truckload" className="text-white-50 text-decoration-none">
                  Part Truckload
                </Link>
              </li>
              <li>
                <Link href="/services/full-truckload" className="text-white-50 text-decoration-none">
                  Full Truckload
                </Link>
              </li>
              <li>
                <Link href="/services/cross-border" className="text-white-50 text-decoration-none">
                  Cross Border
                </Link>
              </li>
              <li>
                <Link href="/services/cod" className="text-white-50 text-decoration-none">
                  Cash on Delivery
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Contact Us</h5>
            <ul className="list-unstyled text-white-50">
              <li>
                <i className="bi bi-telephone me-2"></i> +91 1800 123 4567
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i> info@moveeasy.in
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i> 123 Logistics Park,
                Whitefield, Bangalore, Karnataka 560066, India
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 bg-white-50" />
        <div className="row">
          <div className="col-md-6">
            <p className="text-white-50 mb-0">
              © 2024 MoveEasy, Inc. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-white-50 me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white-50 me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white-50 me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="text-white-50">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

