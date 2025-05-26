import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Benefits from './components/sections/Benefits';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
