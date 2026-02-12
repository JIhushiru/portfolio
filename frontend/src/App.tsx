import { skills, experience, projects } from "./constants/Constants";
import { useState, useEffect } from 'react';
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience"
import Projects from "./sections/Projects";
import ContactAndFooter from "./sections/ContactAndFooter";
import BackToTop from "./components/BackToTop";
import ReactGA from "react-ga4";
import { useActiveSection } from "./hooks/useActiveSection";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? saved === 'true' : true;
  });
  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      localStorage.setItem('darkMode', String(!prev));
      return !prev;
    });
  }
  const activeSection = useActiveSection();

  useEffect(() => {
    ReactGA.initialize("G-5QTV2CW04N");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} activeSection={activeSection} />
      <Hero isDarkMode={isDarkMode}/>
      <About isDarkMode={isDarkMode} skills={skills}/>
      <Experience isDarkMode={isDarkMode} experience={experience}/>
      <Projects isDarkMode={isDarkMode} projects={projects}/>
      <ContactAndFooter isDarkMode={isDarkMode}/>
      <BackToTop isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App
