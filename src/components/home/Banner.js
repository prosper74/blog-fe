import React from "react"
import * as style from "../../styles/home.module.css"

export default function Banner() {
  return (
    <div className={style.heroImage} id="home">
      <img src="" alt="" />
      <div className={style.heroText}>
        <h1>I am John Doe</h1>
        <p>And I'm a Photographer</p>
        <button>Hire me</button>
      </div>
    </div>
  )
}
