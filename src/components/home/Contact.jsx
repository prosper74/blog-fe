import React from "react"
import {
  UilCalling,
  UilEnvelopeCheck,
  UilGithubAlt,
} from "@iconscout/react-unicons"
import * as style from "../../styles/contact.module.css"

function Contact() {
  return (
    <section className={style.contact} id="contact">
      <div className={style.contactContainer}>
        <div>
          <div className={style.titleText}>
            <h2>Get in touch</h2>
            <p>
              Please follow me on socials, lets connect. I'll be waiting for
              you... 😊
            </p>
          </div>
          <div className={style.contactContent}>
            <div className={style.contactInfo}>
              <UilCalling size="40" className={style.phoneIcon} />
              <div>
                <h3 className={style.contactTitle}>Call or Whatsapp</h3>
                <span className={style.contactDesc}>+234 803 428 5512</span>
              </div>
            </div>

            <div className={style.contactInfo}>
              <UilEnvelopeCheck size="40" className={style.phoneIcon} />
              <div>
                <h3 className={style.contactTitle}>Email</h3>
                <span className={style.contactDesc}>atu.prosper@gmail.com</span>
              </div>
            </div>

            <div className={style.contactInfo}>
              <UilGithubAlt size="40" className={style.phoneIcon} />
              <div>
                <h3 className={style.contactTitle}>Github</h3>
                <span className={style.contactDesc}>github.com/prosper74</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
