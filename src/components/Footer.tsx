import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">

          <div className="footer-brand">
            <div className="footer-logo">Benefishal</div>
            <p>Premium sustainably sourced seafood, delivered fresh from certified wild fisheries and ethical farms directly to your table.</p>
          </div>

          <div className="footer-col">
            <div className="footer-col-label">Quick Links</div>
            <div className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/origin">Our Story</Link>
              <Link to="/services">Services</Link>
              <Link to="/order">Order Online</Link>
              <Link to="/chefs">Chef Spotlight</Link>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-col-label">Contact</div>
            <div className="footer-contact-item">
              <Phone size={15} className="footer-icon" />
              <span>(718) 842-2288</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={15} className="footer-icon" />
              <span>info@alaskanfeast.com</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={15} className="footer-icon" />
              <span>800 Food Center Dr, Bronx, NY 10474</span>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Benefishal Seafood. All rights reserved.</p>
          <span className="footer-tagline">Sustainable. Traceable. Exceptional.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;