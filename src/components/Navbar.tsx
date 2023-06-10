import { useState } from 'react'
import '../styles/Navbar.css'

interface NavbarProps {
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme }) => {
  const [menu, setMenu] = useState(false)
  const [icon, setIcon] = useState(true);
  
  const toogleMenu = () => {
    setMenu(!menu)
  }
  const changeIcon = () => {
    setIcon(!icon);
  };
  const handleClick = () => {
    changeIcon();
    toggleTheme();
  }
  return (
    <nav className='nav_bar padding'>
        <h4>DANIEL DEV</h4>
        <button className='button_menu' onClick={toogleMenu}><i className='bx bx-menu'></i></button>
        <div className={menu ? 'menu_visible' : 'menu'}>
          <button className='desactivate_button' onClick={toogleMenu}><i className='bx bx-x'></i></button>
          <ul className='sections'>
              <li><a href="#experience">EXPERIENCE</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#contact">CONTACT</a></li>
              <button onClick={handleClick} className='button_mode'>
                {icon ? <i className='bx bxs-sun'></i> : <i className='bx bxs-moon'></i>}
              </button>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar