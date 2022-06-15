import { Link } from "gatsby";
import React from "react";
import * as style from "../../styles/footer.module.css";
import {
  UilGithub,
  UilLinkedinAlt,
  UilTwitter,
  UilOutgoingCall,
  UilEnvelopeCheck,
} from "@iconscout/react-unicons";

function Footer() {
  const n = 128;

  return (
    <div className={style.main}>
      <div className={style.footer}>
        <div className={style.bubbles}>
          {[...Array(n)].map((d, i) => (
            <div
              className={style.bubble}
              key={i}
              style={{
                size: `${2 + Math.random() * 4}rem`,
                left: `${-10 + Math.random() * 200}rem`,
                transform: `translate(${-5 + Math.random() * 200}%, 100%)`,
                animationDuration: `${2 + Math.random() * 2}s`,
                animationDelay: `${-1 * (2 + Math.random() * 2)}s`,
              }}
            ></div>
          ))}
        </div>

        <div className={style.content}>
          <div>
            <div>
              <b>
                <a
                  href="https://prosperatu.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Portfolio
                </a>
              </b>
            </div>
            <div>
              <p>
                <b>Built With</b>
              </p>
              <a
                href="https://www.gatsbyjs.com/"
                target="_blank"
                rel="noreferrer"
              >
                Gatsby |
              </a>
              <a href="https://strapi.io/" target="_blank" rel="noreferrer">
                Strapi
              </a>
            </div>
            <div className={style.socials}>
              <a
                href="https://github.com/prosper74"
                target="_blank"
                rel="noreferrer"
              >
                <UilGithub size="18" />
              </a>
              <a
                href="https://www.linkedin.com/in/prosper-atu/"
                target="_blank"
                rel="noreferrer"
              >
                <UilLinkedinAlt size="18" />
              </a>
              <a
                href="https://twitter.com/prosperjohnson"
                target="_blank"
                rel="noreferrer"
              >
                <UilTwitter size="18" />
              </a>
              <a href="tel:+2348034285512" rel="noreferrer">
                <UilOutgoingCall size="18" />
              </a>
              <a
                href="mailto:atu.prosper@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <UilEnvelopeCheck size="18" />
              </a>
            </div>
          </div>
          <div className={style.myImage}>
            <a
              href="https://prosperatu.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/67523206?v=4"
                alt="Prosper Atu"
                className={style.image}
              />
              <p>©2022 ProsperDev</p>
            </a>
          </div>
        </div>
      </div>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            ></feColorMatrix>
            <feComposite
              in="SourceGraphic"
              in2="blob"
              operator="atop"
            ></feComposite>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Footer;
