'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { isAuthenticated, removeToken } from '@/lib/auth';
import { authAPI } from '@/lib/api';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [pinCode, setPinCode] = useState('');
  const [pinMessage, setPinMessage] = useState<{
    text: string;
    type: 'success' | 'danger' | 'muted';
  }>({ text: '', type: 'muted' });

  useEffect(() => {
    const authed = isAuthenticated();
    setAuthenticated(authed);
    if (authed) {
      authAPI
        .getMe()
        .then((res) => setUser(res.data))
        .catch(() => setUser(null));
    } else {
      setUser(null);
    }
  }, [pathname]);

  const handleLogout = () => {
    removeToken();
    setAuthenticated(false);
    router.push('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-truck me-2"
            viewBox="0 0 16 16"
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
          </svg>
          MoveEasy
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
                href="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Services
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/services/express">
                    Express Portal
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/warehousing">
                    Warehousing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/part-truckload">
                    Part Truckload
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/full-truckload">
                    Full Truckload
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/cross-border">
                    Cross Border
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/services/cod">
                    Cash on Delivery
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
            {authenticated && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`}
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
          <form
            className="d-flex flex-column flex-sm-row align-items-sm-center me-2"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter PIN Code"
              aria-label="Search"
              id="postcodeInput"
              value={pinCode}
              onChange={(e) => {
                setPinCode(e.target.value.trim());
                setPinMessage({ text: '', type: 'muted' });
              }}
            />
            <button
              className="btn btn-outline-primary mt-2 mt-sm-0"
              type="button"
              onClick={() => {
                if (!pinCode) {
                  setPinMessage({
                    text: 'Please enter a PIN code.',
                    type: 'danger',
                  });
                  return;
                }

                const indianPinRegex = /^[1-9][0-9]{5}$/;
                if (indianPinRegex.test(pinCode)) {
                  setPinMessage({
                    text: 'Yes! We deliver at this location.',
                    type: 'success',
                  });
                } else {
                  setPinMessage({
                    text:
                      'We currently do not service this PIN code. Please verify and try again.',
                    type: 'danger',
                  });
                }
              }}
            >
              Check
            </button>
            {pinMessage.text && (
              <small className={`text-${pinMessage.type} mt-2 ms-sm-2`}>
                {pinMessage.text}
              </small>
            )}
          </form>
          {authenticated ? (
            <div className="dropdown">
              <button
                className="btn btn-outline-primary dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                  style={{ width: 36, height: 36, fontWeight: 600 }}
                >
                  {(user?.name?.charAt(0)?.toUpperCase() ||
                    user?.email?.charAt(0)?.toUpperCase() ||
                    'U')}
                </span>
                <span className="d-none d-md-inline">
                  {user?.name || 'My Account'}
                </span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow">
                <li>
                  <Link className="dropdown-item" href="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/addresses">
                    Saved Addresses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/shipments">
                    Shipments
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button
                    className="dropdown-item text-danger"
                    type="button"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <Link href="/login" className="btn btn-outline-primary">
                Login
              </Link>
              <Link href="/register" className="btn btn-primary">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

