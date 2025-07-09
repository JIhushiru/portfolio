import { skills, experience, projects } from "./constants/Constants";
import { useState, useEffect } from 'react';
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience"

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
    </div>
  )
}

export default App
