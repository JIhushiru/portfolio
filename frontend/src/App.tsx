import { skills, experience, projects } from "./constants/Constants";
import { useState } from 'react';
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience"
import Projects from "./sections/Projects";
import ContactAndFooter from "./sections/ContactAndFooter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode} />
      <Hero isDarkMode = {isDarkMode}/>
      <About isDarkMode= {isDarkMode} skills = {skills}/>
      <Experience isDarkMode= {isDarkMode} experience={experience}/>
      <Projects isDarkMode={isDarkMode} projects={projects}/>
      <ContactAndFooter isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App
