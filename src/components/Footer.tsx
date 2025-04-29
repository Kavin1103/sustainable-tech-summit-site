
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <h3 className="text-lg font-semibold text-eco-500 mb-4">ICETSP 2025</h3>
            <p className="text-sm text-gray-600 mb-4">
              International Conference on Emerging Technologies and Sustainable Practices
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-accent-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-600 hover:text-accent-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-600 hover:text-accent-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-600 hover:text-accent-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-eco-500 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-600 hover:text-accent-500 transition-colors">About</Link></li>
              <li><Link to="/topics" className="text-gray-600 hover:text-accent-500 transition-colors">Topics</Link></li>
              <li><Link to="/speakers" className="text-gray-600 hover:text-accent-500 transition-colors">Speakers</Link></li>
              <li><Link to="/schedule" className="text-gray-600 hover:text-accent-500 transition-colors">Schedule</Link></li>
              <li><Link to="/registration" className="text-gray-600 hover:text-accent-500 transition-colors">Registration</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-eco-500 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/submit" className="text-gray-600 hover:text-accent-500 transition-colors">Submit Paper</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-accent-500 transition-colors">Conference Guidelines</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent-500 transition-colors">Publication Ethics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-accent-500 transition-colors">Past Proceedings</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-eco-500 mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent-500" />
                <a href="mailto:manageriic@srmtrichy.edu.in" className="text-gray-600 hover:text-accent-500">manageriic@srmtrichy.edu.in</a>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent-500" />
                <a href="tel:+919655698246" className="text-gray-600 hover:text-accent-500">+91-9655698246</a>
              </p>
              <p className="text-gray-600">
                SRM Institute of Science and Technology, Tiruchirappalli, India
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="text-sm text-center text-gray-500">
            <p>© 2025 ICETSP. All rights reserved.</p>
            <p className="mt-1">Organized by SRM Institute of Science and Technology, Tiruchirappalli</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
