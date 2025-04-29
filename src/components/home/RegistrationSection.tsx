
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

interface PricingTier {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Early Bird",
    price: "$299",
    description: "For registrations before July 30, 2025",
    features: [
      "Full access to all conference sessions",
      "Conference materials and swag bag",
      "Welcome reception and coffee breaks",
      "Certificate of participation",
      "Access to papers and presentations"
    ],
    buttonText: "Register Now",
  },
  {
    id: 2,
    name: "Regular",
    price: "$399",
    description: "For registrations after July 30, 2025",
    features: [
      "Full access to all conference sessions",
      "Conference materials and swag bag",
      "Welcome reception and coffee breaks",
      "Certificate of participation",
      "Access to papers and presentations"
    ],
    buttonText: "Register",
    popular: true,
  },
  {
    id: 3,
    name: "Student",
    price: "$199",
    description: "Valid student ID required",
    features: [
      "Full access to all conference sessions",
      "Conference materials",
      "Coffee breaks",
      "Certificate of participation",
      "Access to papers and presentations"
    ],
    buttonText: "Student Registration",
  }
];

const RegistrationSection = () => {
  return (
    <section id="registration" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration</h2>
          <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Join us at ICETSP 2025 by registering below. Early bird discounts are available for a limited time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id} 
              className={`
                relative rounded-xl overflow-hidden border 
                ${tier.popular ? 'shadow-lg border-accent-500' : 'shadow-md border-gray-200'}
              `}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-accent-500 text-white text-xs font-bold px-3 py-1 transform rotate-0 origin-top-right">
                    Popular
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-eco-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/registration" 
                  className={`
                    w-full block text-center py-2.5 px-4 rounded-md font-medium transition-colors
                    ${tier.popular 
                      ? 'bg-accent-500 hover:bg-accent-600 text-white' 
                      : 'bg-eco-500 hover:bg-eco-600 text-white'}
                  `}
                >
                  {tier.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gray-50 p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Group Registrations</h3>
            <p className="text-gray-600 mb-4">
              Special discounts are available for groups of 3 or more delegates from the same organization.
              Contact us for more information.
            </p>
            <Link to="/contact" className="btn-outline">
              Contact for Group Rates
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
