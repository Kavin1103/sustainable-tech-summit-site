
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Calendar, Upload } from 'lucide-react';

interface Deadline {
  id: number;
  title: string;
  date: string;
}

const deadlines: Deadline[] = [
  {
    id: 1,
    title: "Paper Submission",
    date: "June 20, 2025"
  },
  {
    id: 2,
    title: "Acceptance Notification",
    date: "August 15, 2025"
  },
  {
    id: 3,
    title: "Camera-Ready Paper",
    date: "September 1, 2025"
  }
];

const Submit = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    email: '',
    abstract: '',
    keywords: '',
    topic: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Submission Received",
        description: "Thank you for your paper submission. You will receive a confirmation email shortly.",
      });
      setFormData({
        title: '',
        authors: '',
        email: '',
        abstract: '',
        keywords: '',
        topic: '',
      });
      setFile(null);
    }, 1500);
  };

  const topics = [
    "Artificial Intelligence & Machine Learning",
    "IoT & Smart Systems",
    "Renewable Energy & Power Systems",
    "Urban Sustainability & Smart Cities",
    "Blockchain & Cybersecurity",
    "Robotics & Manufacturing",
    "Healthcare Tech & Digital Health",
    "Circular Economy & Green Computing",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Submit Paper</h1>
            <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Share your research with the international community at ICETSP 2025.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">Paper Submission</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Paper Title *</label>
                    <Input 
                      id="title" 
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Enter the full title of your paper"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="authors" className="block text-sm font-medium text-gray-700 mb-1">Authors *</label>
                    <Input 
                      id="authors" 
                      name="authors"
                      value={formData.authors}
                      onChange={handleChange}
                      placeholder="Author names separated by commas (e.g., John Smith, Jane Doe)"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Corresponding Author Email *</label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">Topic Area *</label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <option value="" disabled>Select a topic</option>
                      {topics.map((topic, index) => (
                        <option key={index} value={topic}>
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="abstract" className="block text-sm font-medium text-gray-700 mb-1">Abstract *</label>
                    <Textarea 
                      id="abstract" 
                      name="abstract"
                      value={formData.abstract}
                      onChange={handleChange}
                      placeholder="Enter an abstract of your paper (250-300 words)"
                      rows={6}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="keywords" className="block text-sm font-medium text-gray-700 mb-1">Keywords *</label>
                    <Input 
                      id="keywords" 
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleChange}
                      placeholder="Enter 4-6 keywords separated by commas"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="paper" className="block text-sm font-medium text-gray-700 mb-1">Upload Paper (PDF) *</label>
                    <div className="flex items-center">
                      <label className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer">
                        <Upload className="w-5 h-5 mr-2 text-gray-500" />
                        {file ? file.name : 'Choose file'}
                        <input
                          id="paper"
                          name="paper"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileChange}
                          className="sr-only"
                          required
                        />
                      </label>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                      Please upload your paper in PDF format. Maximum file size: 10MB.
                    </p>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-accent-500 hover:bg-accent-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Paper'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Important Dates</h3>
                  
                  <div className="space-y-4">
                    {deadlines.map((deadline) => (
                      <div key={deadline.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-md">
                        <div className="bg-white p-1.5 rounded-full shadow-sm">
                          <Calendar className="h-5 w-5 text-accent-500" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{deadline.title}</p>
                          <p className="text-gray-600 text-sm">{deadline.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Submission Guidelines</h3>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>
                      <span className="font-medium text-gray-700">Format:</span> Papers must follow the IEEE conference format.
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">Length:</span> 6-8 pages including figures and references.
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">Language:</span> All submissions must be in English.
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">Original Work:</span> Papers must be original and not simultaneously submitted to another journal or conference.
                    </p>
                    <p>
                      <span className="font-medium text-gray-700">Blind Review:</span> Please ensure your submission is prepared for blind review.
                    </p>
                    <div className="pt-2">
                      <a 
                        href="#" 
                        className="text-accent-500 hover:underline flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download IEEE Template <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Review Process</h3>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <p>All submitted papers will undergo a rigorous peer-review process by at least three experts in the field.</p>
                    <p>Review criteria include:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Originality and novelty</li>
                      <li>Technical soundness</li>
                      <li>Quality of presentation</li>
                      <li>Relevance to the conference themes</li>
                      <li>Potential impact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Need Help?</h3>
            <p className="text-center text-gray-600 mb-4">
              If you have any questions about the submission process or technical issues,
              please contact our technical program committee.
            </p>
            <div className="flex justify-center">
              <a href="mailto:manageriic@srmtrichy.edu.in" className="btn-outline">
                Contact Technical Support
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Submit;
