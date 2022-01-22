import React from "react"
import * as style from "../../styles/projects.module.css"
import "../../styles/projects.module.css"
import Slider from "./Slider"

function Projects() {
  return (
    <div className={style.projects} id="projects">
      <h2>Projects</h2>
      <p className={style.subtitle}>Our recent jobs</p>
      <p className={style.description}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
        aspernatur neque qui numquam voluptates minima autem maxime labore illo,
        magnam, soluta atque, sequi eum delectus molestias corporis laudantium
        fugiat eaque.
      </p>

      <Slider />
    </div>
  )
}

export default Projects
