import React from "react"
import * as style from "../../styles/home.module.css"

export default function Banner() {
  return (
    <div className={style.heroImage} id="home">
      <img src="" alt="" />
      <div className={style.heroText}>
        <h1>I am Prosper Atu</h1>
        <p>And I'm a Web Developer</p>
        <a
          href="https://prosperatu.netlify.app"
          target="_blank"
          rel="noreferrer"
          alt="my portfolio"
        >
          <button>About Me</button>
        </a>
      </div>
    </div>
  )
}
