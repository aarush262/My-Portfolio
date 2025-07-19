import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Technologies from './components/TechnologiesSection';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies/>
        <Projects/>
        <Certifications/>
        <Contact/>
        {/* More sections */}
      </main>
    </>
  );
}

export default App;