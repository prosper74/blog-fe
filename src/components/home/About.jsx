import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as style from "../../styles/about.module.css"

export default function About() {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      site {
        siteMetadata {
          aboutDescription
          aboutSubtitle
          aboutTitle
        }
      }
    }
  `)

  const { aboutDescription, aboutTitle, aboutSubtitle } = data.site.siteMetadata

  return (
    <div className={style.about} id="about">
      <h2>{aboutTitle}</h2>
      <p className={style.subtitle}>{aboutSubtitle}</p>
      <p className={style.description}>{aboutDescription}</p>

      <h2 className={style.teamSection}>Our Team</h2>
      <div className={style.row}>
        <div className={style.column}>
          <div className={style.card}>
            <img
              src="https://personalexcellence.co/files/ceo.jpg"
              alt="Jane"
              className={style.cardImage}
            />
            <div className={style.container}>
              <h2>Jane Doe</h2>
              <p className={style.title}>CEO & Founder</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>jane@example.com</p>
              <p>
                <button className={style.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={style.column}>
          <div className={style.card}>
            <img
              src="https://personalexcellence.co/files/ceo.jpg"
              alt="Mike"
              className={style.cardImage}
            />
            <div className={style.container}>
              <h2>Mike Ross</h2>
              <p className={style.title}>Art Director</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>mike@example.com</p>
              <p>
                <button className={style.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className={style.column}>
          <div className={style.card}>
            <img
              src="https://personalexcellence.co/files/ceo.jpg"
              alt="John"
              className={style.cardImage}
            />
            <div className={style.container}>
              <h2>John Doe</h2>
              <p className={style.title}>Designer</p>
              <p>Some text that describes me lorem ipsum ipsum lorem.</p>
              <p>john@example.com</p>
              <p>
                <button className={style.button}>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
