
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
        title: "Message Sent",
        description: "Thank you for your message. We will get back to you soon!",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Have questions about ICETSP 2025? Get in touch with our team and we'll be happy to help.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is your message regarding?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto bg-eco-500 hover:bg-eco-600"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-eco-50 p-2 rounded-full mr-4">
                        <Mail className="h-5 w-5 text-eco-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <a href="mailto:manageriic@srmtrichy.edu.in" className="text-gray-600 hover:text-accent-500">
                          manageriic@srmtrichy.edu.in
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-eco-50 p-2 rounded-full mr-4">
                        <Phone className="h-5 w-5 text-eco-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Phone</p>
                        <a href="tel:+919655698246" className="text-gray-600 hover:text-accent-500">
                          +91-9655698246
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-eco-50 p-2 rounded-full mr-4">
                        <MapPin className="h-5 w-5 text-eco-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Address</p>
                        <p className="text-gray-600">
                          SRM Institute of Science and Technology<br />
                          Tiruchirappalli Campus<br />
                          Tiruchirappalli - 621105<br />
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-eco-50 p-2 rounded-full mr-4">
                        <Clock className="h-5 w-5 text-eco-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Office Hours</p>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 5:00 PM (IST)<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="bg-white p-2 rounded-lg shadow-md aspect-video">
                  <iframe 
                    title="Conference Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0964316011333!2d78.58210481480108!3d10.878527560361273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5512c0f71c1%3A0x41f4f6c999d1c3a9!2sSRM%20Institute%20of%20Science%20and%20Technology%2C%20Trichy%20Campus!5e0!3m2!1sen!2sin!4v1650444937031!5m2!1sen!2sin"
                    className="w-full h-full rounded-lg"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick FAQs</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-800">Where can I find information about registration?</p>
                      <p className="text-gray-600">
                        Visit our <a href="/registration" className="text-accent-500 hover:underline">Registration page</a> for details on pricing and how to register.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-gray-800">How can I submit a paper?</p>
                      <p className="text-gray-600">
                        Check our <a href="/submit" className="text-accent-500 hover:underline">Paper Submission</a> page for guidelines and submission process.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium text-gray-800">Are there accommodation options near the venue?</p>
                      <p className="text-gray-600">
                        Yes, we have partnerships with several hotels near the venue. Contact us for special rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              For general inquiries about the conference, please contact us at 
              <a href="mailto:manageriic@srmtrichy.edu.in" className="text-accent-500 ml-1">manageriic@srmtrichy.edu.in</a>. 
              We aim to respond to all inquiries within 48 hours.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
