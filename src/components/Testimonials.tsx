import { useState, useEffect } from "react";

const datas = [
  {
    avatar:"https://i.pinimg.com/736x/46/92/8b/46928be5494f95b5744324539f3e9555.jpg",
    name: "Stephany",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, blanditiis!"
  },
  {
    avatar:"https://i.pinimg.com/736x/46/92/8b/46928be5494f95b5744324539f3e9555.jpg",
    name: "Peter",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, blanditiis!"
  },
  {
    avatar:"https://i.pinimg.com/736x/46/92/8b/46928be5494f95b5744324539f3e9555.jpg",
    name: "Karen",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, blanditiis!"
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [intervalId, setIntervalId] = useState<number>();

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
    stopAutoPlay();
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchCurrentX = event.touches[0].clientX;
    const touchDeltaX = (touchStartX ?? touchCurrentX) - touchCurrentX;

    if (touchDeltaX > 0) {
      prevSlide();
    } else if (touchDeltaX < 0) {
      nextSlide();
    }
  };

  const handleTouchEnd = () => {
    setTouchStartX(null);
    startAutoPlay();
  };
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % datas.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex + datas.length - 1) % datas.length);
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
    <section className="m-5">
        <h5>Críticas de colegas</h5>
        <h2>Testimonios</h2>
        <div
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slider-items" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {datas.map(({ avatar, name, review }, index)=>{
                return <div className="slider-item">
                    <div key={index}>
                      <img src={avatar} alt="avatar" />
                    </div>
                    <h4>{name}</h4>
                    <p>{review}</p>
                    <a href="">Perfil</a>
                </div>})}                    
        </div>
        <button className="slider-prev" onClick={prevSlide}>Prev</button>
        <button className="slider-next" onClick={nextSlide}>Next</button>
      </div>
    </section>
  )
}

export default Testimonials
