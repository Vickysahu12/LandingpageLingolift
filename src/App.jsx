import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyLingoLift from "./components/WhyLingoLift";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <WhyLingoLift />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}