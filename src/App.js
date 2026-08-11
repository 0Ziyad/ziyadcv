import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import InteractiveBackground from "./components/InteractiveBackground/InteractiveBackground";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <InteractiveBackground />
        <div className="App__content">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
