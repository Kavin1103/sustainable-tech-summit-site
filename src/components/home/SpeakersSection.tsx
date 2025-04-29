
import { useState } from 'react';

interface Speaker {
  id: number;
  name: string;
  title: string;
  organization: string;
  image: string;
  topic: string;
}

// Placeholder data for speakers
const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    title: "Chief AI Researcher",
    organization: "Global Tech Labs",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    topic: "Future of AI and Sustainable Computing"
  },
  {
    id: 2,
    name: "Prof. Michael Wong",
    title: "Director",
    organization: "Center for Renewable Energy",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    topic: "Innovations in Green Energy Storage"
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    title: "Head of IoT Division",
    organization: "Smart Systems Inc.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    topic: "IoT for Sustainable Smart Cities"
  },
  {
    id: 4,
    name: "Dr. Robert Chen",
    title: "Senior Researcher",
    organization: "Blockchain Research Alliance",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    topic: "Blockchain Solutions for Supply Chain Sustainability"
  }
];

const SpeakersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextSpeaker = () => {
    setActiveIndex((prev) => (prev + 1) % speakers.length);
  };
  
  const prevSpeaker = () => {
    setActiveIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
  };

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Keynote Speakers</h2>
          <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Learn from the world's leading experts in technology and sustainability who will be sharing their insights at ICETSP 2025.
          </p>
        </div>
        
        {/* Desktop view: Grid of speakers */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-64 object-cover object-center"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{speaker.name}</h3>
                <p className="text-accent-500">{speaker.title}</p>
                <p className="text-gray-600 text-sm mb-2">{speaker.organization}</p>
                <p className="text-eco-600 font-medium text-sm">"{speaker.topic}"</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile view: Carousel */}
        <div className="md:hidden">
          <div className="relative bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden">
            <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
              <img 
                src={speakers[activeIndex].image} 
                alt={speakers[activeIndex].name}
                className="w-full h-64 object-cover object-center"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{speakers[activeIndex].name}</h3>
              <p className="text-accent-500">{speakers[activeIndex].title}</p>
              <p className="text-gray-600 text-sm mb-2">{speakers[activeIndex].organization}</p>
              <p className="text-eco-600 font-medium text-sm">"{speakers[activeIndex].topic}"</p>
            </div>
            
            <div className="flex justify-between p-4">
              <button 
                onClick={prevSpeaker}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600"
                aria-label="Previous speaker"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              
              <button 
                onClick={nextSpeaker}
                className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 text-gray-600"
                aria-label="Next speaker"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
            
            <div className="flex justify-center pb-4 space-x-2">
              {speakers.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${
                    index === activeIndex ? 'bg-eco-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to speaker ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            More keynote speakers will be announced in the coming months. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
