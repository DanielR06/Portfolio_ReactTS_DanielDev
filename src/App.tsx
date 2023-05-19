import Home from './components/Home/Home';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
// import Projects from './components/Projects/Projects';
// import Testimonials from './components/Testimonials/Testimonials';
// import Contact from './components/Contact/Contact';
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="Portafolio">
      <Navbar />
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
