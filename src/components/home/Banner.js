import React from "react"
import { motion } from "framer-motion"
import * as style from "../../styles/home.module.css"

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
}

export default function Banner() {
  return (
    <div className={style.heroImage} id="home">
      <img src="" alt="" />
      <div className={style.heroText}>
        <motion.h1 initial={{ y: "100vh" }} animate={{ y: 0 }}>
          I am Prosper Atu
        </motion.h1>
        <p>A Frontend Developer and Technical writer</p>
        <a
          href="https://prosperatu.netlify.app"
          target="_blank"
          rel="noreferrer"
          alt="my portfolio"
        >
          <motion.button variants={buttonVariants} whileHover="hover">
            About Me
          </motion.button>
        </a>
      </div>
    </div>
  )
}
