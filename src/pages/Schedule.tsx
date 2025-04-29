
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Clock, MapPin } from 'lucide-react';

interface ScheduleEvent {
  id: number;
  time: string;
  title: string;
  speaker?: string;
  location: string;
  type: 'keynote' | 'session' | 'break' | 'workshop';
  description?: string;
}

// Day 1 Schedule - September 16, 2025
const day1Schedule: ScheduleEvent[] = [
  {
    id: 1,
    time: "08:30 - 09:30",
    title: "Registration & Welcome Coffee",
    location: "Main Hall",
    type: "break",
    description: "Pick up your conference materials and enjoy a morning coffee while networking with other attendees."
  },
  {
    id: 2,
    time: "09:30 - 10:00",
    title: "Opening Ceremony & Welcome Address",
    speaker: "Dr. R. Jagadeesh Kannan",
    location: "Auditorium",
    type: "session",
    description: "Official opening of ICETSP 2025 with welcome remarks from the conference chair and organizing committee."
  },
  {
    id: 3,
    time: "10:00 - 11:00",
    title: "Keynote: Future of AI and Sustainable Computing",
    speaker: "Dr. Jane Smith",
    location: "Auditorium",
    type: "keynote",
    description: "An exploration of how AI technologies can be developed and deployed with sustainability as a core principle, reducing carbon footprints while maximizing societal benefits."
  },
  {
    id: 4,
    time: "11:00 - 11:15",
    title: "Coffee Break",
    location: "Networking Area",
    type: "break"
  },
  {
    id: 5,
    time: "11:15 - 12:45",
    title: "Technical Session 1: AI & Machine Learning",
    location: "Room A",
    type: "session",
    description: "Presentations of research papers on various aspects of AI and machine learning, including deep learning architectures, natural language processing, and computer vision applications."
  },
  {
    id: 6,
    time: "11:15 - 12:45",
    title: "Technical Session 2: IoT & Smart Systems",
    location: "Room B",
    type: "session",
    description: "Research presentations on IoT architectures, protocols, smart home applications, and industrial IoT implementations."
  },
  {
    id: 7,
    time: "12:45 - 14:00",
    title: "Lunch",
    location: "Dining Hall",
    type: "break"
  },
  {
    id: 8,
    time: "14:00 - 15:30",
    title: "Workshop: Practical Applications of IoT in Smart Cities",
    speaker: "Dr. Sarah Johnson",
    location: "Workshop Room 1",
    type: "workshop",
    description: "A hands-on workshop exploring practical IoT implementations for urban sustainability and smart city applications."
  },
  {
    id: 9,
    time: "14:00 - 15:30",
    title: "Technical Session 3: Blockchain & Cybersecurity",
    location: "Room C",
    type: "session",
    description: "Research presentations on blockchain technologies, cryptocurrency, smart contracts, and cybersecurity solutions for the digital economy."
  },
  {
    id: 10,
    time: "15:30 - 15:45",
    title: "Coffee Break",
    location: "Networking Area",
    type: "break"
  },
  {
    id: 11,
    time: "15:45 - 17:15",
    title: "Technical Session 4: Urban Sustainability & Smart Cities",
    location: "Room B",
    type: "session",
    description: "Research presentations on sustainable urban planning, smart infrastructure, and technologies for smart city implementation."
  },
  {
    id: 12,
    time: "17:15 - 18:00",
    title: "Panel Discussion: Ethical Considerations in Technology",
    location: "Auditorium",
    type: "session",
    description: "A panel of experts discussing the ethical implications of emerging technologies and how to ensure they are developed and deployed responsibly."
  },
  {
    id: 13,
    time: "19:00 - 21:00",
    title: "Welcome Reception",
    location: "Hotel Rooftop Garden",
    type: "break",
    description: "Networking event with drinks and hors d'oeuvres. A great opportunity to connect with other attendees in a casual setting."
  }
];

// Day 2 Schedule - September 17, 2025
const day2Schedule: ScheduleEvent[] = [
  {
    id: 1,
    time: "09:00 - 10:00",
    title: "Keynote: Innovations in Green Energy Storage",
    speaker: "Prof. Michael Wong",
    location: "Auditorium",
    type: "keynote",
    description: "A comprehensive overview of cutting-edge research in energy storage technologies and their role in enabling renewable energy integration and sustainability."
  },
  {
    id: 2,
    time: "10:00 - 11:30",
    title: "Technical Session 5: Renewable Energy & Power Systems",
    location: "Room A",
    type: "session",
    description: "Research presentations on renewable energy technologies, grid integration, energy efficiency, and sustainable power systems."
  },
  {
    id: 3,
    time: "10:00 - 11:30",
    title: "Technical Session 6: Healthcare Tech & Digital Health",
    location: "Room B",
    type: "session",
    description: "Research presentations on medical technologies, healthcare informatics, telemedicine, and digital health solutions."
  },
  {
    id: 4,
    time: "11:30 - 11:45",
    title: "Coffee Break",
    location: "Networking Area",
    type: "break"
  },
  {
    id: 5,
    time: "11:45 - 13:15",
    title: "Workshop: Blockchain for Sustainable Supply Chains",
    speaker: "Dr. Robert Chen",
    location: "Workshop Room 2",
    type: "workshop",
    description: "An interactive workshop on implementing blockchain technology to improve transparency and sustainability in global supply chains."
  },
  {
    id: 6,
    time: "11:45 - 13:15",
    title: "Technical Session 7: Robotics & Manufacturing",
    location: "Room C",
    type: "session",
    description: "Research presentations on robotics technologies, automation, human-robot collaboration, and sustainable manufacturing practices."
  },
  {
    id: 7,
    time: "13:15 - 14:30",
    title: "Lunch",
    location: "Dining Hall",
    type: "break"
  },
  {
    id: 8,
    time: "14:30 - 16:00",
    title: "Technical Session 8: Circular Economy & Green Computing",
    location: "Room A",
    type: "session",
    description: "Research presentations on sustainable IT, green computing, e-waste management, and circular economy principles applied to technology."
  },
  {
    id: 9,
    time: "14:30 - 16:00",
    title: "Special Session: Industry Showcase",
    location: "Exhibition Hall",
    type: "session",
    description: "Industry partners present their latest products, services, and innovations related to sustainable technology solutions."
  },
  {
    id: 10,
    time: "16:00 - 16:15",
    title: "Coffee Break",
    location: "Networking Area",
    type: "break"
  },
  {
    id: 11,
    time: "16:15 - 17:15",
    title: "Closing Keynote: The Future of Sustainable Technology",
    speaker: "Dr. Alicia Ramirez",
    location: "Auditorium",
    type: "keynote",
    description: "A forward-looking perspective on the integration of emerging technologies with sustainable development goals and practices."
  },
  {
    id: 12,
    time: "17:15 - 18:00",
    title: "Closing Ceremony & Best Paper Awards",
    speaker: "Dr. S. Kanaga Suba Raja",
    location: "Auditorium",
    type: "session",
    description: "Closing remarks, presentation of best paper awards, and announcement of ICETSP 2026."
  }
];

const getEventClass = (type: string) => {
  switch (type) {
    case 'keynote':
      return 'border-l-accent-500 bg-accent-50';
    case 'session':
      return 'border-l-eco-500 bg-eco-50';
    case 'workshop':
      return 'border-l-purple-500 bg-purple-50';
    case 'break':
    default:
      return 'border-l-gray-300 bg-gray-50';
  }
};

const Schedule = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Conference Schedule</h1>
            <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              Plan your ICETSP 2025 experience with our comprehensive schedule of keynotes, 
              technical sessions, workshops, and networking events.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Keynote</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-eco-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Technical Session</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Workshop</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-sm text-gray-600">Break</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <Tabs defaultValue="day1" className="w-full">
              <div className="border-b">
                <TabsList className="bg-transparent w-full justify-start overflow-x-auto">
                  <TabsTrigger 
                    className="py-4 px-8 data-[state=active]:border-b-2 data-[state=active]:border-eco-500 data-[state=active]:shadow-none rounded-none" 
                    value="day1"
                  >
                    Day 1 (September 16)
                  </TabsTrigger>
                  <TabsTrigger 
                    className="py-4 px-8 data-[state=active]:border-b-2 data-[state=active]:border-eco-500 data-[state=active]:shadow-none rounded-none" 
                    value="day2"
                  >
                    Day 2 (September 17)
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6">
                <TabsContent value="day1" className="m-0">
                  <div className="space-y-6">
                    {day1Schedule.map((event) => (
                      <div key={event.id} className={`border-l-4 p-4 rounded-r-md ${getEventClass(event.type)}`}>
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
                          <div className="flex items-center text-gray-600 font-medium min-w-[150px]">
                            <Clock className="h-4 w-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium text-gray-800">{event.title}</h4>
                            {event.speaker && (
                              <p className="text-sm text-gray-600 mt-1">Speaker: {event.speaker}</p>
                            )}
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <MapPin className="h-3.5 w-3.5 mr-1" />
                              {event.location}
                            </div>
                            {event.description && (
                              <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="day2" className="m-0">
                  <div className="space-y-6">
                    {day2Schedule.map((event) => (
                      <div key={event.id} className={`border-l-4 p-4 rounded-r-md ${getEventClass(event.type)}`}>
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
                          <div className="flex items-center text-gray-600 font-medium min-w-[150px]">
                            <Clock className="h-4 w-4 mr-2" />
                            {event.time}
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium text-gray-800">{event.title}</h4>
                            {event.speaker && (
                              <p className="text-sm text-gray-600 mt-1">Speaker: {event.speaker}</p>
                            )}
                            <div className="flex items-center text-sm text-gray-500 mt-1">
                              <MapPin className="h-3.5 w-3.5 mr-1" />
                              {event.location}
                            </div>
                            {event.description && (
                              <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Schedule is subject to change. Last updated: April 2025. Please check back for updates closer to the conference date.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
