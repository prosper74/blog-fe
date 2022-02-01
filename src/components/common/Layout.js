import React from "react"
import { motion } from "framer-motion"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { pageVariants } from "../animations"
import "../../styles/global.css"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <motion.main
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.main>
      <Footer />
    </>
  )
}

export default Layout
