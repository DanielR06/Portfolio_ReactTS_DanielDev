import './Slider.css'
import { useEffect, useState } from "react";

const Slider = ({ arraySlides, children}:any) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [intervalId, setIntervalId] = useState<number>();
  
    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % arraySlides.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((currentIndex + arraySlides.length - 1) % arraySlides.length);
    };
    const startAutoPlay = () => {
      const id = window.setInterval(() => {
        nextSlide();
      }, 5000);
      setIntervalId(id);
    };
  
    const stopAutoPlay = () => {
      window.clearInterval(intervalId);
      setIntervalId(undefined);
    };
  
    useEffect(() => {
      startAutoPlay();
      return () => {
        stopAutoPlay();
      };
    }, [currentIndex]);
  return (
    <div>
        <div className="slider-items" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {children}
        </div>
        <button className="slider-prev" onClick={prevSlide}>Prev</button>
        <button className="slider-next" onClick={nextSlide}>Next</button>
    </div>
  )
}

export default Slider