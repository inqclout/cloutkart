import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MessageFirst from './components/MessageFirst';
import About from './components/About';
import Services from './components/Services';
import ScrollStory from './components/ScrollStory';
import Process from './components/Process';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Portfolio from './components/Portfolio';
import CTABanner from './components/CTABanner';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <MessageFirst />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Services />
        <ScrollStory />
        <div className="section-divider" />
        <Process />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <Portfolio />
        <div className="section-divider" />
        <CTABanner />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
