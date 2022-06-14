import { Link } from "gatsby"
import React, { useRef } from "react"
import "../../styles/global.css"
import Logo from "../../images/myLogo2.svg"

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
              <img src={Logo} alt="My Logo" className="my-logo" />
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
                <Link to="/blog/journey" className="menu-link">
                  Journey
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/blog/javascript" className="menu-link">
                  JavaScript
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/blog/blockchain" className="menu-link">
                  Blockchain
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/blog/tech" className="menu-link">
                  Tech Stories
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
