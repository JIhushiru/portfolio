import { skills, experience, projects } from "./constants/Constants";
import { useState, useEffect } from 'react';
import Header from "./sections/Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header isDarkMode = {isDarkMode} toggleDarkMode = {toggleDarkMode} />
    </div>
  )
}

export default App
