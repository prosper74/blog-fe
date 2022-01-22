import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "../../styles/global.css"

function Layout({ children }) {
  return (
  <>
      <Navbar />
      <div>{children}</div>
      <Footer />
  </>
  )
}

export default Layout
