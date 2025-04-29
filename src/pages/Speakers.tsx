
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  image: string;
  bio: string;
  topic: string;
  category: 'keynote' | 'invited' | 'panel';
  social?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

const allSpeakers: Speaker[] = [
  // Keynote Speakers
  {
    id: 1,
    name: "Dr. Jane Smith",
    title: "Chief AI Researcher",
    organization: "Global Tech Labs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Dr. Jane Smith is a pioneering researcher in artificial intelligence with over 15 years of experience in developing AI solutions for sustainability challenges. She leads the AI for Good initiative at Global Tech Labs and has published more than 100 research papers in top-tier journals.",
    topic: "Future of AI and Sustainable Computing",
    category: 'keynote',
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  {
    id: 2,
    name: "Prof. Michael Wong",
    title: "Director",
    organization: "Center for Renewable Energy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Professor Michael Wong is an internationally recognized expert in renewable energy systems and sustainable power generation. His groundbreaking work on energy storage technologies has led to significant advancements in grid-scale battery solutions for intermittent renewable sources.",
    topic: "Innovations in Green Energy Storage",
    category: 'keynote',
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  
  // Invited Speakers
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    title: "Head of IoT Division",
    organization: "Smart Systems Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Dr. Sarah Johnson specializes in IoT technologies for smart city applications. She has led several major urban IoT deployment projects across Asia and Europe, focusing on sustainable urban development through connected infrastructure.",
    topic: "IoT for Sustainable Smart Cities",
    category: 'invited',
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 4,
    name: "Dr. Robert Chen",
    title: "Senior Researcher",
    organization: "Blockchain Research Alliance",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Dr. Robert Chen is a blockchain expert focused on implementing distributed ledger technologies for environmental tracking and sustainable supply chains. His work has been instrumental in developing transparent product life cycle tracking systems.",
    topic: "Blockchain Solutions for Supply Chain Sustainability",
    category: 'invited',
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  
  // Panel Speakers
  {
    id: 5,
    name: "Dr. Alicia Ramirez",
    title: "Chief Technology Officer",
    organization: "Healthcare Analytics Inc.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Dr. Alicia Ramirez is a healthcare technology expert specializing in ML applications for medical diagnostics and personalized medicine. She has pioneered several AI-based diagnostic tools that are now used in hospitals worldwide.",
    topic: "Ethical AI in Healthcare",
    category: 'panel',
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    id: 6,
    name: "Prof. David Kim",
    title: "Professor of Robotics",
    organization: "Institute of Technology",
    image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    bio: "Professor David Kim is a leading researcher in collaborative robotics and human-robot interaction. His research focuses on developing robots that can work alongside humans in sustainable manufacturing environments while reducing waste and energy consumption.",
    topic: "Sustainable Robotics",
    category: 'panel',
    social: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  }
];

const Speakers = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'keynote' | 'invited' | 'panel'>('all');
  
  const filteredSpeakers = activeCategory === 'all' 
    ? allSpeakers 
    : allSpeakers.filter(speaker => speaker.category === activeCategory);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Conference Speakers</h1>
            <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Learn from world-leading experts in emerging technologies and sustainable practices at ICETSP 2025.
            </p>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveCategory('all')} 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-eco-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              All Speakers
            </button>
            <button 
              onClick={() => setActiveCategory('keynote')} 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'keynote' 
                  ? 'bg-accent-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Keynote Speakers
            </button>
            <button 
              onClick={() => setActiveCategory('invited')} 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'invited' 
                  ? 'bg-accent-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Invited Speakers
            </button>
            <button 
              onClick={() => setActiveCategory('panel')} 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'panel' 
                  ? 'bg-accent-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Panel Speakers
            </button>
          </div>
          
          {/* Speakers grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSpeakers.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-2">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{speaker.name}</h2>
                      <p className="text-accent-500">{speaker.title}</p>
                      <p className="text-gray-600 text-sm">{speaker.organization}</p>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                      speaker.category === 'keynote' ? 'bg-accent-100 text-accent-800' :
                      speaker.category === 'invited' ? 'bg-eco-100 text-eco-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {speaker.category.charAt(0).toUpperCase() + speaker.category.slice(1)}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="font-medium text-eco-600 mb-1">Topic</h3>
                    <p className="text-gray-700">"{speaker.topic}"</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {speaker.bio}
                  </p>
                  
                  {speaker.social && (
                    <div className="flex space-x-3">
                      {speaker.social.twitter && (
                        <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                          </svg>
                        </a>
                      )}
                      {speaker.social.linkedin && (
                        <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                          </svg>
                        </a>
                      )}
                      {speaker.social.website && (
                        <a href={speaker.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-eco-600 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              More speakers will be announced as we get closer to the conference date. 
              Check back later for updates.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Speakers;
