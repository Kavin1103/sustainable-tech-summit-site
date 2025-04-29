
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TopicDetail {
  id: number;
  title: string;
  icon: string;
  description: string;
  subtopics: string[];
}

const topicDetails: TopicDetail[] = [
  {
    id: 1,
    title: "Artificial Intelligence & Machine Learning",
    icon: "💡",
    description: "Exploring the latest advancements in AI and ML algorithms, applications, and ethical considerations.",
    subtopics: [
      "Deep Learning and Neural Networks",
      "Natural Language Processing",
      "Computer Vision and Pattern Recognition",
      "Reinforcement Learning",
      "AI Ethics and Responsible AI",
      "AI in Sustainable Development",
      "Explainable AI and Interpretable ML Models",
      "Federated Learning and Privacy-Preserving ML"
    ]
  },
  {
    id: 2,
    title: "IoT & Smart Systems",
    icon: "🔌",
    description: "Investigating the integration of IoT technologies in creating connected and intelligent systems for various applications.",
    subtopics: [
      "IoT Architectures and Protocols",
      "Edge Computing for IoT",
      "Smart Homes and Buildings",
      "Industrial IoT (IIoT)",
      "IoT Security and Privacy",
      "Low-Power IoT Devices",
      "IoT Data Analytics",
      "Sensor Networks and Wireless Communications"
    ]
  },
  {
    id: 3,
    title: "Renewable Energy & Power Systems",
    icon: "⚡",
    description: "Focusing on innovations in renewable energy technologies and sustainable power systems.",
    subtopics: [
      "Solar Photovoltaic Technologies",
      "Wind Energy Systems",
      "Energy Storage Solutions",
      "Smart Grids and Microgrids",
      "Energy Harvesting Technologies",
      "Power Electronics for Renewable Energy",
      "Energy Management Systems",
      "Hybrid Renewable Energy Systems"
    ]
  },
  {
    id: 4,
    title: "Urban Sustainability & Smart Cities",
    icon: "🏙️",
    description: "Addressing challenges and opportunities in urban sustainability through smart city technologies and practices.",
    subtopics: [
      "Smart City Infrastructure",
      "Sustainable Urban Planning",
      "Urban Mobility and Transportation",
      "Smart Water and Waste Management",
      "Urban Air Quality Monitoring",
      "Smart Governance and Citizen Services",
      "Urban Data Platforms",
      "Resilient Cities and Climate Adaptation"
    ]
  },
  {
    id: 5,
    title: "Blockchain & Cybersecurity",
    icon: "🔒",
    description: "Exploring blockchain technologies and cybersecurity solutions for a secure and transparent digital ecosystem.",
    subtopics: [
      "Blockchain for Sustainability",
      "Decentralized Applications (DApps)",
      "Smart Contracts",
      "Secure Systems Design",
      "Threat Intelligence and Analysis",
      "Privacy-Enhancing Technologies",
      "Secure IoT Architectures",
      "Cyber-Physical Systems Security"
    ]
  },
  {
    id: 6,
    title: "Robotics & Manufacturing",
    icon: "🤖",
    description: "Investigating advancements in robotics and their applications in sustainable manufacturing practices.",
    subtopics: [
      "Collaborative Robots (Cobots)",
      "Autonomous Mobile Robots",
      "Industry 4.0 and Smart Manufacturing",
      "Additive Manufacturing/3D Printing",
      "Sustainable Manufacturing Processes",
      "Digital Twins for Manufacturing",
      "Human-Robot Interaction",
      "Quality Control and Inspection Systems"
    ]
  },
  {
    id: 7,
    title: "Healthcare Tech & Digital Health",
    icon: "🏥",
    description: "Exploring technological innovations in healthcare for improved patient outcomes and healthcare delivery.",
    subtopics: [
      "AI in Medical Diagnosis",
      "Remote Patient Monitoring",
      "Healthcare IoT",
      "Medical Imaging and Image Processing",
      "Electronic Health Records (EHR)",
      "Telemedicine and Virtual Care",
      "Personalized Medicine",
      "Healthcare Data Privacy and Security"
    ]
  },
  {
    id: 8,
    title: "Circular Economy & Green Computing",
    icon: "♻️",
    description: "Addressing the sustainability challenges in computing and promoting circular economy principles in technology.",
    subtopics: [
      "E-Waste Management and Recycling",
      "Energy-Efficient Computing",
      "Sustainable Data Centers",
      "Green Software Engineering",
      "Life Cycle Assessment of IT Products",
      "Circular Business Models in Tech",
      "Digital Solutions for Circular Economy",
      "Sustainable Supply Chains in IT"
    ]
  }
];

const Topics = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Conference Topics</h1>
            <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              ICETSP 2025 covers a wide range of topics related to emerging technologies and sustainable practices.
              Explore our conference tracks and find your area of interest.
            </p>
          </div>
          
          <div className="space-y-12">
            {topicDetails.map((topic) => (
              <div key={topic.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{topic.icon}</div>
                    <div className="flex-grow">
                      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{topic.title}</h2>
                      <p className="text-gray-600 mb-6">{topic.description}</p>
                      
                      <h3 className="text-lg font-medium text-gray-700 mb-3">Subtopics include:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                        {topic.subtopics.map((subtopic, index) => (
                          <div key={index} className="flex items-center">
                            <div className="h-2 w-2 rounded-full bg-eco-500 mr-2"></div>
                            <span className="text-gray-600">{subtopic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-eco-500"></div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have a topic suggestion or want to contribute to the conference? Contact our program committee at 
              <a href="mailto:manageriic@srmtrichy.edu.in" className="text-accent-500 ml-1">manageriic@srmtrichy.edu.in</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Topics;
