import { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
// import Projects from './components/Projects/Projects';
// import Testimonials from './components/Testimonials/Testimonials';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
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
      <div className='line'></div>
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
