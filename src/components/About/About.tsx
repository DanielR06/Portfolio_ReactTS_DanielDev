const About = () => {
  return (
    <section className="aboutme">
        <h5>Conóceme</h5>
        <h2>Sobre mi</h2>
        <div className="container_aboutme">
          <div className="container_image border_r">
            {/* <img src="/image.jpg" alt="" className="border_r"/> */}
          </div>
          <div className="container_information">
            <article className="container_cards">
              <div className="about_card border_r">
              <i className='bx bx-certification bx-tada' ></i>
                <h3>Experiencia</h3>
                <p>1 Año de aprendizaje</p>
              </div>
              <div className="about_card border_r">
                <i className='bx bxs-briefcase-alt-2 bx-tada' ></i>
                <h3>Open to Work</h3>
                <p>Listo para ofertas de trabajo</p>
              </div>
              <div className="about_card border_r">
                <i className='bx bx-folder-open bx-tada' ></i>
                <h3>Proyectos</h3>
                <p>5+ Completados</p>
              </div>
            </article>
            <article className="presentation">
              <p className="">¡Hola! Soy Daniel, un apasionado al desarrollo web. Cuento con experiencia en la creación de sitios web utilizando HTML, CSS, JavaScript y React. En mi portafolio, podrás encontrar algunos de mis trabajos más recientes y ver cómo he aplicado mis habilidades y conocimientos ¡Espero que disfrutes explorar mi trabajo tanto como yo disfruté creándolo!</p>
            </article>
            <a href="#contact" className="btn_ligthblue btn_about border_r">Contáctame</a>
          </div>
        </div>
      </section>
  )
}

export default About
