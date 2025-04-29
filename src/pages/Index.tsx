
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import TopicsSection from "@/components/home/TopicsSection";
import OrganizersSection from "@/components/home/OrganizersSection";
import SpeakersSection from "@/components/home/SpeakersSection";
import CallForPapersSection from "@/components/home/CallForPapersSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import RegistrationSection from "@/components/home/RegistrationSection";
import ContactSection from "@/components/home/ContactSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TopicsSection />
      <OrganizersSection />
      <SpeakersSection />
      <CallForPapersSection />
      <ScheduleSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
