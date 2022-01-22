import { Link } from "gatsby"
import React, { useRef } from "react"
import "../../styles/global.css"

function Navbar() {
  const menuIcon = useRef(null)
  const setMenu = useRef(null)
  const setMenuLink = useRef(null)

  const setBurgerMenu = () => {
    if (
      menuIcon.current.className === "burger" &&
      setMenu.current.className === "menu"
    ) {
      menuIcon.current.className += " active"
      setMenu.current.className += " active"
      setMenu.current.style.maxHeight = setMenu.current.scrollHeight + "px"
      setMenuLink.current.className += " active"
    } else {
      menuIcon.current.className = "burger"
      setMenu.current.className = "menu"
      setMenuLink.current.className = "menu-link"
      setMenu.current.removeAttribute("style")
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <section className="wrapper">
          <h1 className="brand">
            <Link to="/" className="brand-link">
              Prosper
            </Link>
          </h1>
          <button
            type="button"
            className="burger"
            ref={menuIcon}
            onClick={setBurgerMenu}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
          <div className="menu" ref={setMenu}>
            <ul className="menu-inner" ref={setMenuLink}>
              <li className="menu-item">
                <Link to="/" className="menu-link">
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/#about" className="menu-link">
                  Profile
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/#projects" className="menu-link">
                  Projects
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/#blog" className="menu-link">
                  Blog
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/#contact" className="menu-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </nav>
  )
}

export default Navbar
