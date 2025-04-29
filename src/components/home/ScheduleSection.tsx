
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Clock } from 'lucide-react';

interface ScheduleEvent {
  id: number;
  time: string;
  title: string;
  speaker?: string;
  location: string;
  type: 'keynote' | 'session' | 'break' | 'workshop';
}

// Day 1 Schedule
const day1Schedule: ScheduleEvent[] = [
  {
    id: 1,
    time: "08:30 - 09:30",
    title: "Registration & Welcome Coffee",
    location: "Main Hall",
    type: "break"
  },
  {
    id: 2,
    time: "09:30 - 10:00",
    title: "Opening Ceremony & Welcome Address",
    speaker: "Dr. R. Jagadeesh Kannan",
    location: "Auditorium",
    type: "session"
  },
  {
    id: 3,
    time: "10:00 - 11:00",
    title: "Keynote: Future of AI and Sustainable Computing",
    speaker: "Dr. Jane Smith",
    location: "Auditorium",
    type: "keynote"
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
    type: "session"
  },
  {
    id: 6,
    time: "12:45 - 14:00",
    title: "Lunch",
    location: "Dining Hall",
    type: "break"
  },
  {
    id: 7,
    time: "14:00 - 15:30",
    title: "Workshop: Practical Applications of IoT in Smart Cities",
    speaker: "Dr. Sarah Johnson",
    location: "Workshop Room 1",
    type: "workshop"
  },
  {
    id: 8,
    time: "15:30 - 15:45",
    title: "Coffee Break",
    location: "Networking Area",
    type: "break"
  },
  {
    id: 9,
    time: "15:45 - 17:15",
    title: "Technical Session 2: Blockchain & Cybersecurity",
    location: "Room B",
    type: "session"
  },
  {
    id: 10,
    time: "17:15 - 18:00",
    title: "Panel Discussion: Ethical Considerations in Technology",
    location: "Auditorium",
    type: "session"
  }
];

// Day 2 Schedule - just a placeholder
const day2Schedule: ScheduleEvent[] = [
  {
    id: 1,
    time: "09:00 - 10:00",
    title: "Keynote: Innovations in Green Energy Storage",
    speaker: "Prof. Michael Wong",
    location: "Auditorium",
    type: "keynote"
  },
  {
    id: 2,
    time: "10:00 - 11:30",
    title: "Technical Session 3: Renewable Energy & Power Systems",
    location: "Room A",
    type: "session"
  },
  {
    id: 3,
    time: "11:30 - 11:45",
    title: "Coffee Break",
    location: "Networking Area",
    type: "break"
  },
  {
    id: 4,
    time: "11:45 - 13:15",
    title: "Technical Session 4: Healthcare Tech & Digital Health",
    location: "Room B",
    type: "session"
  },
  {
    id: 5,
    time: "13:15 - 14:30",
    title: "Lunch",
    location: "Dining Hall",
    type: "break"
  },
  {
    id: 6,
    time: "14:30 - 16:00",
    title: "Workshop: Circular Economy Practices in Tech Industry",
    speaker: "Dr. Robert Chen",
    location: "Workshop Room 2",
    type: "workshop"
  },
  {
    id: 7,
    time: "16:00 - 16:15",
    title: "Coffee Break",
    location: "Networking Area",
    type: "break"
  },
  {
    id: 8,
    time: "16:15 - 17:15",
    title: "Closing Ceremony & Best Paper Awards",
    speaker: "Dr. S. Kanaga Suba Raja",
    location: "Auditorium",
    type: "session"
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

const ScheduleSection = () => {
  const [day, setDay] = useState("day1");
  
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conference Schedule</h2>
          <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Plan your conference experience with our comprehensive schedule of keynotes, technical sessions, 
            workshops, and networking events.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <Tabs defaultValue="day1" className="w-full">
            <div className="border-b">
              <TabsList className="bg-transparent w-full justify-start overflow-x-auto">
                <TabsTrigger className="py-4 px-8 data-[state=active]:border-b-2 data-[state=active]:border-eco-500 data-[state=active]:shadow-none rounded-none" value="day1">Day 1 (September 16)</TabsTrigger>
                <TabsTrigger className="py-4 px-8 data-[state=active]:border-b-2 data-[state=active]:border-eco-500 data-[state=active]:shadow-none rounded-none" value="day2">Day 2 (September 17)</TabsTrigger>
              </TabsList>
            </div>
            
            <div className="p-6">
              <TabsContent value="day1" className="m-0">
                <div className="space-y-4">
                  {day1Schedule.map((event) => (
                    <div key={event.id} className={`border-l-4 p-4 rounded-r-md ${getEventClass(event.type)}`}>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                        <div className="flex items-center text-gray-600 font-medium min-w-[150px]">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium text-gray-800">{event.title}</h4>
                          {event.speaker && (
                            <p className="text-sm text-gray-600 mt-1">Speaker: {event.speaker}</p>
                          )}
                          <p className="text-sm text-gray-500 mt-1">Location: {event.location}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="day2" className="m-0">
                <div className="space-y-4">
                  {day2Schedule.map((event) => (
                    <div key={event.id} className={`border-l-4 p-4 rounded-r-md ${getEventClass(event.type)}`}>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                        <div className="flex items-center text-gray-600 font-medium min-w-[150px]">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-medium text-gray-800">{event.title}</h4>
                          {event.speaker && (
                            <p className="text-sm text-gray-600 mt-1">Speaker: {event.speaker}</p>
                          )}
                          <p className="text-sm text-gray-500 mt-1">Location: {event.location}</p>
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
            Schedule is subject to change. Please check back for updates closer to the conference date.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
