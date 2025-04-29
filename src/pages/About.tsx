
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-section">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About ICETSP 2025</h1>
            <div className="w-20 h-1.5 bg-eco-500 mb-8 rounded-full"></div>
            
            <div className="prose max-w-none text-gray-600">
              <p className="text-lg mb-6">
                The International Conference on Emerging Technologies and Sustainable Practices (ICETSP) 2025 
                is a premier forum for researchers, practitioners, and industry professionals to share their knowledge, 
                expertise, and innovations in emerging technologies and sustainable practices.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Vision</h2>
              <p>
                ICETSP aims to bridge the gap between technological advancements and sustainable development by fostering 
                collaborations between academia and industry. We believe that emerging technologies have the potential to 
                address global challenges and contribute to a more sustainable future.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Conference Objectives</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide a platform for researchers to present their cutting-edge work in emerging technologies and sustainable practices</li>
                <li>Foster collaborations between academia, industry, and government organizations</li>
                <li>Encourage interdisciplinary research that combines technological innovation with sustainable development</li>
                <li>Showcase real-world applications of emerging technologies in addressing global challenges</li>
                <li>Discuss policy implications and regulatory frameworks for the adoption of new technologies</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Target Audience</h2>
              <p>
                ICETSP 2025 welcomes participation from a diverse audience, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Academic researchers and scientists</li>
                <li>Industry professionals and practitioners</li>
                <li>Policymakers and government representatives</li>
                <li>Graduate and PhD students</li>
                <li>Entrepreneurs and innovators</li>
                <li>Non-governmental organizations focused on sustainability</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Conference History</h2>
              <p>
                ICETSP was first established in 2019 with a vision to create a multidisciplinary forum focused on 
                sustainable technological advancements. Over the years, the conference has grown in size and reputation, 
                attracting participants from over 40 countries and featuring keynote speakers from leading academic 
                institutions and industry organizations.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Organizing Institution</h2>
              <p>
                ICETSP 2025 is organized by SRM Institute of Science and Technology, Tiruchirappalli, one of India's 
                leading educational institutions known for its excellence in research and innovation in emerging 
                technologies and sustainable practices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
