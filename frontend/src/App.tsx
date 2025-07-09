import { skills, experience, projects } from "./constants/Constants";
import { useState, useEffect } from 'react';
import Header from "./sections/Header";
import Hero from "./sections/Hero";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode} />
      <Hero isDarkMode = {isDarkMode}/>
    </div>
  )
}

export default App
