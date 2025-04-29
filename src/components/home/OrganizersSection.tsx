
interface Organizer {
  id: number;
  name: string;
  title: string;
  organization: string;
  image: string;
}

const organizers: Organizer[] = [
  {
    id: 1,
    name: "Dr. R. Jagadeesh Kannan",
    title: "Conference Chair",
    organization: "SRM Institute of Science and Technology",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    name: "Dr. S. Kanaga Suba Raja",
    title: "Technical Program Chair",
    organization: "SRM Institute of Science and Technology",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    name: "Kunwar Singh",
    title: "Program Committee",
    organization: "National Institute of Technology - Tiruchirappalli",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
];

const OrganizersSection = () => {
  return (
    <section id="organizers" className="py-20 bg-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conference Organizers</h2>
          <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600">
            Meet the team behind ICETSP 2025 who are working to make this conference a success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizers.map((organizer) => (
            <div key={organizer.id} className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 flex flex-col items-center text-center">
                <img 
                  src={organizer.image} 
                  alt={organizer.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-eco-100"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{organizer.name}</h3>
                <p className="text-accent-500 font-medium mb-1">{organizer.title}</p>
                <p className="text-gray-600">{organizer.organization}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            The organizers are supported by an international program committee comprised of researchers and experts from 
            leading academic institutions and industry organizations worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
