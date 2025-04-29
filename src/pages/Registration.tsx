
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/components/ui/use-toast';
import { Check } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    id: "early",
    name: "Early Bird",
    price: "$299",
    description: "For registrations before July 30, 2025",
    features: [
      "Full access to all conference sessions",
      "Conference materials and swag bag",
      "Welcome reception and coffee breaks",
      "Certificate of participation",
      "Access to papers and presentations"
    ]
  },
  {
    id: "regular",
    name: "Regular",
    price: "$399",
    description: "For registrations after July 30, 2025",
    features: [
      "Full access to all conference sessions",
      "Conference materials and swag bag",
      "Welcome reception and coffee breaks",
      "Certificate of participation",
      "Access to papers and presentations"
    ]
  },
  {
    id: "student",
    name: "Student",
    price: "$199",
    description: "Valid student ID required",
    features: [
      "Full access to all conference sessions",
      "Conference materials",
      "Coffee breaks",
      "Certificate of participation",
      "Access to papers and presentations"
    ]
  }
];

const Registration = () => {
  const { toast } = useToast();
  const [selectedTier, setSelectedTier] = useState<string>("early");
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    affiliation: '',
    position: '',
    address: '',
    city: '',
    country: '',
    dietary: '',
    specialRequests: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Registration Submitted",
        description: "Thank you for registering for ICETSP 2025. You will receive a confirmation email shortly.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Registration</h1>
            <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Register now for ICETSP 2025 and be part of the conversation on emerging technologies and sustainable practices.
            </p>
          </div>
          
          {/* Pricing Tiers */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Registration Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier) => (
                <div 
                  key={tier.id} 
                  className={`
                    relative rounded-xl overflow-hidden border cursor-pointer
                    ${selectedTier === tier.id 
                      ? 'border-accent-500 shadow-lg ring-2 ring-accent-500 ring-opacity-50' 
                      : 'border-gray-200 shadow-md hover:shadow-lg'}
                  `}
                  onClick={() => setSelectedTier(tier.id)}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{tier.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{tier.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-4">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-eco-500 mr-2 mt-0.5" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {selectedTier === tier.id && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-accent-500 text-white rounded-full p-1">
                          <Check className="h-4 w-4" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Registration Form */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Registration Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700 mb-1">Affiliation/Organization *</label>
                    <Input 
                      id="affiliation" 
                      name="affiliation"
                      value={formData.affiliation}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Position/Title</label>
                    <Input 
                      id="position" 
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    <Input 
                      id="address" 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <Input 
                      id="city" 
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                    <Input 
                      id="country" 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-1">Dietary Requirements</label>
                  <Input 
                    id="dietary" 
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    placeholder="Vegetarian, vegan, gluten-free, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">Special Requirements or Additional Comments</label>
                  <Textarea 
                    id="specialRequests" 
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any accessibility needs or other special requests"
                    rows={3}
                  />
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-600 mb-4">
                    Selected registration type: <span className="font-medium">{pricingTiers.find(tier => tier.id === selectedTier)?.name} - {pricingTiers.find(tier => tier.id === selectedTier)?.price}</span>
                  </p>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-accent-500 hover:bg-accent-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Complete Registration'}
                  </Button>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    * Required fields. By submitting this form, you agree to our terms and privacy policy. 
                    Payment will be processed securely after form submission.
                  </p>
                </div>
              </form>
            </div>
          </div>
          
          <div className="mt-12">
            <div className="bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Registration Information</h3>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>Registration Deadlines:</strong> Early bird registration ends on July 30, 2025. Regular registration 
                  will be available until September 1, 2025, or until capacity is reached.
                </p>
                <p>
                  <strong>Payment Methods:</strong> Credit card, bank transfer, and institutional purchase orders are accepted. 
                  Complete payment instructions will be provided after form submission.
                </p>
                <p>
                  <strong>Cancellation Policy:</strong> Full refund minus a $50 processing fee is available for cancellations 
                  made before August 15, 2025. No refunds will be issued after this date, but substitutions are allowed.
                </p>
                <p>
                  <strong>Group Registrations:</strong> For groups of 3 or more from the same organization, please contact 
                  <a href="mailto:manageriic@srmtrichy.edu.in" className="text-accent-500 ml-1">manageriic@srmtrichy.edu.in</a> 
                  for special group rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
