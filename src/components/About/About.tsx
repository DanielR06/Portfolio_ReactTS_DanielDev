import './About.css'

const About = () => {
  return (
    <section id='aboutme'>
        <div className='container_aboutme'>
          <article className='aboutme_title padding'>
            <h2>Sobre mi</h2>
          </article>
          <article className='aboutme_information padding'>

            <div>
              <i className='bx bx-certification icon-aboutme' ></i>
              <h3>Learning</h3>
              <p>1 Año de aprendizaje</p>
            </div>

            <div>
              <i className='bx bxs-briefcase-alt-2 icon-aboutme' ></i>
              <h3>Open to Work</h3>
              <p>Listo para ofertas de trabajo</p>
            </div>
            
            <div>
              <i className='bx bx-folder-open icon-aboutme' ></i>
              <h3>Proyectos</h3>
              <p>5+ Completados</p>
            </div>

          </article>
        </div>
      </section>
  )
}

export default About
