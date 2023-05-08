
const Header = () => {
  return (
    <header className="m-5" id="Home">
        <h5><span className="greet">Hola, yo soy</span></h5>
        <h1>Daniel Rodriguez</h1>
        <h5>Front-End Developer</h5>
        <div className="container_links">
          <a href="/public/Curriculum Daniel Rodriguez .pdf" download='Curriculum Daniel Rodriguez' className="btn_ligthblue border_r btn_transparent">
          Descargar CV
          </a>
          <a href="#contact" className="btn_ligthblue border_r">Contáctame</a>
        </div>
        <div className="container_photo_perfil">
          <img src="/perfil.png" alt="" className="image_perfil"/>    
        </div>
    </header>
  )
}

export default Header
