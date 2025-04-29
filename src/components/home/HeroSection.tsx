
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Mountain landscape with sustainable technology theme"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
      </div>
      
      {/* Hero content */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 py-12 text-white">
        <div className="max-w-3xl space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-2">ICETSP 2025</h1>
            <p className="text-xl lg:text-2xl mb-4 text-gray-200">
              International Conference on Emerging Technologies and Sustainable Practices
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-md text-gray-100">
              <span className="font-medium">16th September 2025</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-3 rounded-md text-gray-100">
              <span className="font-medium">SRM Institute of Science and Technology, Tiruchirappalli, India</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/registration" className="btn-primary">
              Register Now
            </Link>
            <Link to="/submit" className="btn-outline border-white text-white hover:bg-white hover:text-eco-600">
              Submit Paper <ArrowRight className="ml-1 h-4 w-4 inline" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
