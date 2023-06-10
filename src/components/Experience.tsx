import '../styles/Experience.css'
const Experience = () => {
  return (
    <section id="experience" >
        <div className='experience_title padding'>
          <h2>Skills</h2>
        </div> 
        <article className="container_skills">
          <div className='stack'>
            <h3><i className='bx bx-laptop'></i>  Frontend Development</h3>
            <div className="skills">
              <div className="skill">
                <i className='bx bxl-html5' ></i>
                <p>Html</p>
              </div>
              <div className="skill">
                <i className='bx bxl-css3' ></i>
                <p>Css</p>
              </div>
              <div className="skill">
                <i className='bx bxl-javascript'></i>
                <p>Javascript</p>
              </div>
              <div className="skill">
                <i className='bx bxl-tailwind-css' ></i>
                <p>Tailwind</p>
              </div>
              <div className="skill">
                <i className='bx bxl-react' ></i>
                <p>React</p>
              </div>
            </div>
          </div>
          <div className='stack'>
            <h3><i className='bx bxs-server' ></i>  Backend Development</h3>
            <div className="skills">
              <div className="skill">
                <i className='bx bxl-nodejs' ></i>
                <p>NodeJs</p>
              </div>
              <div className="skill">
                <i className='bx bxs-badge-check' ></i>
                <p>Express</p>
              </div>
              <div className="skill">
                <i className='bx bxl-mongodb'></i>
                <p>MongoDB</p>
              </div>
              <div className="skill">
                <i className='bx bxl-postgresql' ></i>
                <p>PostgresSQL</p>
              </div>
            </div>
          </div>
          <div className='stack'>
            <h3><i className='bx bx-code'></i>  Others</h3>
            <div className="skills">
              <div className="skill">
                <i className='bx bxs-badge-check' ></i>
                <p>Postman</p>
              </div>
              <div className="skill">
                <i className='bx bxl-git' ></i>
                <p>Git</p>
              </div>
              <div className="skill">
                <i className='bx bxl-markdown'></i>
                <p>Markdown</p>
              </div>
            </div>
          </div>
        </article>
          
          
          
      </section>
  )
}

export default Experience
