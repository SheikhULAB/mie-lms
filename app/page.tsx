import Achievements from "@/components/home/Achievements";
import EvaluationSection from "@/components/home/EvaluationSection";
import FAQAccordion from "@/components/home/FAQAccordion";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import MockTest from "@/components/home/MockTest";
import Navbar from "@/components/home/Navbar";
import TestimonialSection from "@/components/home/TestimonialSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <MockTest />
      <EvaluationSection />
      <TestimonialSection />
      <Achievements />
      <FAQAccordion />
      <Footer />
    </div>
  );
}
