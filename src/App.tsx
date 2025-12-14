import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Workshops from './components/Workshops';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Certifications />
      <Projects />
      <Workshops />
      <Contact />
    </div>
  );
}

export default App;
