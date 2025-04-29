
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About the Conference</h2>
          <div className="w-20 h-1.5 bg-eco-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            ICETSP 2025 aims to bring together researchers and industry professionals to share innovations 
            in AI, IoT, Renewable Energy, and Sustainable Development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-eco-600 mb-3">Our Objectives</h3>
              <p className="text-gray-600">
                ICETSP 2025 provides a premier platform for researchers, engineers, academicians, and industry 
                professionals to present their innovative ideas and research findings in emerging technologies and 
                sustainable practices that are shaping our future.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-eco-600 mb-3">Target Audience</h3>
              <p className="text-gray-600">
                The conference welcomes participants from various domains including academia, research organizations, 
                industry professionals, policy makers, and students interested in the latest advancements in technology 
                and sustainability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-eco-600 mb-3">Key Focus</h3>
              <p className="text-gray-600">
                The conference focuses on integrating cutting-edge technological innovations with sustainable practices 
                to address global challenges and create a more sustainable and technologically advanced future.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Technology and Sustainability" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-eco-500 text-white p-4 rounded-lg shadow-lg">
              <p className="font-medium text-lg">September 16th, 2025</p>
              <p>Tiruchirappalli, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
