import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MessageFirst from './components/MessageFirst';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import ScrollStory from './components/ScrollStory';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <CursorGlow />
      <div className="relative min-h-screen bg-[#080C14]">
        <div className="noise-overlay" />
        <Navbar />
        <main>
          <Hero />
          <MessageFirst />
          <About />
          <Services />
          <ScrollStory />
          <Process />
          <Pricing />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
