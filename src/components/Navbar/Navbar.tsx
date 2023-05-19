import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {
  const [visible, setVisible] = useState('menu')
 const activatedMenu = ()=>{
    if(visible == 'menu'){
      setVisible('menu_visible')
    }else{
      setVisible('menu')
    }
 }
 const desactivatedMenu = () => {
  if(visible == 'menu'){
    setVisible('menu_visible')
  }else{
    setVisible('menu')
  }
 }
  return (
    <nav className='nav_bar padding'>
        <h4>DANIEL DEV</h4>
        <button className='burger_button' onClick={activatedMenu}><i className='bx bx-menu'></i></button>
        <div className={visible}>
          <button className='desactivateButton' onClick={desactivatedMenu}>X</button>
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