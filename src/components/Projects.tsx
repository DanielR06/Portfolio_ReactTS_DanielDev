import '../styles/Projects.css'
const Projects = () => {
  return (
    <section id='projects'>
        <div className='projects_title padding'>
          <h2>Portafolio</h2>
        </div>
        <article className="container_works padding">
          <div className="project padding">
            <img src="https://raw.githubusercontent.com/DanielR06/images/main/frases-app.png" alt=""/>
            <h3>Frases App</h3>
            <div  className="container_icons">
              <i className='bx bxl-react' ></i>
            </div>
            <div className="container_links">
              <a href="https://github.com/DanielR06/Pharses-Space---React" target='_blank'>Github</a>
              <a href="https://pharses-space-react.netlify.app" target='_blank'>Live Demo</a>
            </div>
          </div>
          <div className="project padding">
            <img src="https://raw.githubusercontent.com/DanielR06/images/main/WeatherApp.png" alt=""/>
            <h3>Weather App</h3>
            <div  className="container_icons">
              <i className='bx bxl-react' ></i>
              <i className='bx bxl-tailwind-css'></i>
            </div>
            <div className="container_links">
              <a href="https://github.com/DanielR06/Weather-App-React" target='_blank'>Github</a>
              <a href="https://weatherapp-daniel.netlify.app" target='_blank'>Live Demo</a>
            </div>
          </div>
          <div className="project padding">
            <img src="https://raw.githubusercontent.com/DanielR06/images/main/RickAndMorty.png" alt=""/>
            <h3>Rick And Morty App</h3>
            <div  className="container_icons">
              <i className='bx bxl-react' ></i>
              <i className='bx bxl-tailwind-css'></i>
            </div>
            <div className="container_links">
              <a href="https://github.com/DanielR06/Locations-Rick-and-Morty" target='_blank'>Github</a>
              <a href="https://rick-and-morty-daniel.netlify.app" target='_blank'>Live Demo</a>
            </div>
          </div>
          <div className="project padding">
            <img src="https://raw.githubusercontent.com/DanielR06/images/main/pokedex.png" alt=""/>
            <h3>Pokedex App</h3>
            <div  className="container_icons">
              <i className='bx bxl-react' ></i>
              <i className='bx bxl-tailwind-css'></i>
            </div>
            <div className="container_links">
              <a href="https://github.com/DanielR06/pokedex-daniel.dev" target='_blank'>Github</a>
              <a href="https://pokeapi-daniel-dev.netlify.app" target='_blank'>Live Demo</a>
            </div>
          </div>
          <div className="project padding">
            <img src="https://raw.githubusercontent.com/DanielR06/images/main/usersCrud.png" alt=""/>
            <h3>Users Crud</h3>
            <div  className="container_icons">
              <i className='bx bxl-react' ></i>
              <i className='bx bxl-tailwind-css'></i>
            </div>
            <div className="container_links">
              <a href="https://github.com/DanielR06/admin-users-crud" target='_blank'>Github</a>
              <a href="https://crud-users-daniel-dev.netlify.app" target='_blank'>Live Demo</a>
            </div>
          </div>
        </article>
        <div className='description padding'>
          <p> En mi portafolio, podrás encontrar algunos de mis trabajos más recientes y ver cómo he aplicado mis habilidades y conocimientos ¡Espero que disfrutes explorar mi trabajo tanto como yo disfruté creandolos!</p>
        </div>
      </section>
  )
}

export default Projects
