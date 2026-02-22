import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="contact-item">
            <Phone size={16} />
            <span>(718) 842-2288</span>
          </div>
          <div className="contact-item">
            <Mail size={16} />
            <span>info@alaskanfeast.com</span>
          </div>
          <div className="contact-item">
            <MapPin size={16} />
            <span>800 Food Center Dr, Bronx, NY 10474</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Benefishal Seafood. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;