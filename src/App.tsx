import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.style.setProperty('--theme-ligth-bg', '#000');
      root.style.setProperty('--theme-ligth-dt', '#fff');
      root.style.setProperty('--theme-icon', '#f7de00');
    } else if (theme === 'light') {
      root.style.setProperty('--theme-ligth-bg', '#fff');
      root.style.setProperty('--theme-ligth-dt', '#000');
      root.style.setProperty('--theme-icon', '#7e46ff');
    }
  }, [theme]);
  return (
    <div className="Portafolio">
      <Navbar toggleTheme={toggleTheme}/>
      <Home />
      <About />
      <Experience />
      {/* <Projects />
      <Testimonials />
      <Contact />
      <Footer />  */}
    </div>
  );
}

export default App;
