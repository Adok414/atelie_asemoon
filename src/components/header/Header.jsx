import { useState } from "react";
import { logo1 } from "../../assets/images"
import Nav from "../nav/Nav"
import "./Header.css"
import { FaXing } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { RemoveScroll } from "react-remove-scroll";



function Header() {

const [isMenuOpen, setIsMenuOpen] = useState(false)

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen)
}

const handleMenuClick = () => {
  setIsMenuOpen(false)
}

  return (
     <header className="header">
        <div className="container">
            <div className="header-wrapper">
                <img src={logo1} alt="logo1" className="logo" />
                <RemoveScroll enabled={isMenuOpen}>
                  <Nav isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick}/>
                </RemoveScroll>
                
                <div className="rejim">
                  <h4>Working schedule:</h4>
                  <h5>09:00-18:00</h5>
                </div>
                <div className="nav-menu-btn" onClick={toggleMenu}>
                  {isMenuOpen ? <FaXing/> : <FaBarsStaggered/>}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header