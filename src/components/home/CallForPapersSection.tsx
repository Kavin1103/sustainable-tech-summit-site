
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

interface Deadline {
  id: number;
  title: string;
  date: string;
  icon: React.ReactNode;
}

const deadlines: Deadline[] = [
  {
    id: 1,
    title: "Paper Submission",
    date: "June 20, 2025",
    icon: <Calendar className="h-5 w-5 text-accent-500" />
  },
  {
    id: 2,
    title: "Acceptance Notification",
    date: "August 15, 2025",
    icon: <Calendar className="h-5 w-5 text-accent-500" />
  },
  {
    id: 3,
    title: "Camera-Ready Paper",
    date: "September 1, 2025",
    icon: <Calendar className="h-5 w-5 text-accent-500" />
  }
];

const CallForPapersSection = () => {
  return (
    <section id="call-for-papers" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Call for Papers</h2>
          <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            We invite researchers, practitioners, and industry professionals to submit their original work on 
            emerging technologies and sustainable practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Important Dates</h3>
              
              <div className="space-y-6">
                {deadlines.map((deadline) => (
                  <div key={deadline.id} className="flex items-center space-x-4 p-4 border-l-4 border-accent-500 bg-gray-50 rounded-r-md">
                    <div className="bg-white p-2 rounded-full shadow-sm">
                      {deadline.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{deadline.title}</h4>
                      <p className="text-gray-600">{deadline.date}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Link to="/submit" className="btn-secondary inline-flex items-center">
                  Submit Your Paper <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Submission Guidelines</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Papers should be written in English and follow the IEEE conference format.</li>
                <li>The length of the paper should be between 6-8 pages including figures and references.</li>
                <li>All submissions must be original and not simultaneously submitted to another journal or conference.</li>
                <li>Accepted papers will be published in the conference proceedings and indexed in major databases.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Review Process</h3>
              <p className="text-gray-600">
                All submissions will be peer-reviewed by at least three experts in the field. The review process will 
                be double-blind, ensuring fair evaluation of all submissions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Publication</h3>
              <p className="text-gray-600">
                Selected papers will be published in the ICETSP 2025 Conference Proceedings and will be submitted 
                for inclusion in IEEE Xplore Digital Library, subject to meeting the scope and quality requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallForPapersSection;
