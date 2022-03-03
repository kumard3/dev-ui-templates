import About from "../components/About";
import ContactSection from "../components/ContactSection";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Testimonial from "../components/Testimonial";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className="bg-[#FFEED9] min-h-screen">
      <Nav />
      <Hero />
      <Work />
      <Testimonial />
      <About />
      <ContactSection />
    </div>
  );
}
