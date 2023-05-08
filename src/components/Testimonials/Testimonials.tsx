import Slider from '../Slider/Slider';

const datas = [
  {
    avatar: 'https://i.pinimg.com/736x/46/92/8b/46928be5494f95b5744324539f3e9555.jpg',
    name: 'Stephany',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, blanditiis!',
  },
  {
    avatar: 'https://i.pinimg.com/736x/46/92/8b/46928be5494f95b5744324539f3e9555.jpg',
    name: 'Peter',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, blanditiis!',
  },
  {
    avatar: 'https://i.pinimg.com/736x/46/92/8b/46928be5494f95b5744324539f3e9555.jpg',
    name: 'Karen',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, blanditiis!',
  },
];

const Testimonials = () => {
  return (
    <section className="m-5">
      <h5>Críticas de colegas</h5>
      <h2>Testimonios</h2>
      <Slider arraySlides={datas}>
        {datas.map(({ avatar, name, review }, index) => {
          return (
            <div className="slider-item">
              <div key={index}>
                <img src={avatar} alt="avatar" />
              </div>
              <h4>{name}</h4>
              <p>{review}</p>
              <a href="">Perfil</a>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Testimonials;
