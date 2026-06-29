import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Divisions from "@/components/Divisions";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <About />
        <Divisions />
        <WhyChooseUs />
        <ServiceAreas />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
