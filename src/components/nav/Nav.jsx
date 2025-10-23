import { Link } from "react-scroll"
import "./Nav.css"


function Nav({isMenuOpen, handleMenuClick}) {

    const items = ["home", "about", "services", "contact"]

  return (
        <nav className={isMenuOpen ? "nav active" : "nav"}>
            <div className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
                {items.map((item, index) => (
                <Link 
                    to={item} 
                    key={index} 
                    className="nav-link"
                    onClick={handleMenuClick}
                >
                    {item}
                </Link>
                ))}
            </div>
        </nav>
  )
}

export default Nav