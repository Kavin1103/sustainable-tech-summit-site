
import { useState, useEffect } from 'react';

interface Topic {
  id: number;
  title: string;
  icon: string;
  description: string;
}

const topics: Topic[] = [
  {
    id: 1,
    title: "Artificial Intelligence & ML",
    icon: "💡",
    description: "Deep learning, neural networks, computer vision, NLP, and AI ethics."
  },
  {
    id: 2,
    title: "IoT & Smart Systems",
    icon: "🔌",
    description: "Connected devices, smart homes, industrial IoT, and embedded systems."
  },
  {
    id: 3,
    title: "Renewable Energy & Power Systems",
    icon: "⚡",
    description: "Solar, wind, hydro energy technologies, energy storage, and smart grids."
  },
  {
    id: 4,
    title: "Urban Sustainability & Smart Cities",
    icon: "🏙️",
    description: "Urban planning, smart infrastructure, sustainable mobility, and civic tech."
  },
  {
    id: 5,
    title: "Blockchain & Cybersecurity",
    icon: "🔒",
    description: "Distributed ledger technologies, crypto systems, and security protocols."
  },
  {
    id: 6,
    title: "Robotics & Manufacturing",
    icon: "🤖",
    description: "Autonomous systems, industrial automation, and advanced manufacturing."
  },
  {
    id: 7,
    title: "Healthcare Tech & Digital Health",
    icon: "🏥",
    description: "Telemedicine, health informatics, wearables, and medical imaging."
  },
  {
    id: 8,
    title: "Circular Economy & Green Computing",
    icon: "♻️",
    description: "Sustainable IT, e-waste management, and energy-efficient computing."
  }
];

const TopicsSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = Number(entry.target.getAttribute('data-id'));
          setVisibleItems(prev => [...prev, id]);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.topic-card');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const isVisible = (id: number) => visibleItems.includes(id);

  return (
    <section id="topics" className="py-20 bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conference Topics</h2>
          <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Explore the cutting-edge research topics that will be covered at ICETSP 2025, 
            focusing on emerging technologies and their applications in sustainable development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((topic) => (
            <div
              key={topic.id}
              data-id={topic.id}
              className={`topic-card bg-white rounded-lg border border-gray-100 shadow-md overflow-hidden transition-all duration-500 ${
                isVisible(topic.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${(topic.id - 1) * 100}ms` }}
            >
              <div className="p-6">
                <div className="text-3xl mb-4">{topic.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{topic.title}</h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
              <div className="h-2 bg-eco-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
