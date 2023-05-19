import './Experience.css'
const Experience = () => {
  return (
    <section id="experience" >
        <div className='experience_title padding'>
          <h2>Skills</h2>
        </div> 
        <article className="container_skills">
          <div className='stack'>
            <h3>Frontend Development</h3>
            <div className="skills">
              <div className="skill">
                <i className='bx bxs-badge-check' ></i>
                <p>Html</p>
              </div>
              <div className="skill">
                <i className='bx bxs-badge-check' ></i>
                <p>Css</p>
              </div>
              <div className="skill">
                <i className='bx bxs-badge-check' ></i>
                <p>Javascript</p>
              </div>
              <div className="skill">
                <i className='bx bxs-badge-check' ></i>
                <p>Tailwind</p>
              </div>
              <div className="skill">
                <i className='bx bxs-badge-check' ></i>
                <p>React</p>
              </div>
              <div className="skill">
                <i className='bx bxs-badge-check' ></i>
                <p>Redux</p>
              </div>
            </div>
          </div>
        </article>
          
          
          
      </section>
  )
}

export default Experience
