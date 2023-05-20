import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  
  const toogleMenu = () => {
    setMenu(!menu)
  }
  return (
    <nav className='nav_bar padding'>
        <h4>DANIEL DEV</h4>
        <button className='button_menu' onClick={toogleMenu}><i className='bx bx-menu'></i></button>
        <div className={menu ? 'menu_visible' : 'menu'}>
          <button className='desactivate_button' onClick={toogleMenu}><i className='bx bx-x'></i></button>
          <ul className='sections'>
              <li><a href="#home">HOME</a></li>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#testimonials">TESTIMONIALS</a></li>
              <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar