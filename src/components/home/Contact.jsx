import React from "react"
import * as style from "../../styles/contact.module.css"
import {
  UilCalling,
  UilEnvelopeCheck,
  UilMessage,
} from "@iconscout/react-unicons"

function Contact() {
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <section className={style.contact} id="contact">
      <div className={style.contactContainer}>
        <div>
          <div>
            <h2>Get in touch</h2>
            <p className={style.subtitle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
              reprehenderit optio, explicabo harum fugiat
            </p>
          </div>
          <div className={style.contactInfo}>
            <UilCalling size="40" className={style.phoneIcon} />
            <div>
              <h3 className={style.contactTitle}>Call</h3>
              <span className={style.contactDesc}>+234 803 428 5512</span>
            </div>
          </div>

          <div className={style.contactInfo}>
            <UilCalling size="40" className={style.phoneIcon} />
            <div>
              <h3 className={style.contactTitle}>Whatsapp</h3>
              <span className={style.contactDesc}>+234 803 428 5512</span>
            </div>
          </div>

          <div className={style.contactInfo}>
            <UilEnvelopeCheck size="40" className={style.phoneIcon} />
            <div>
              <h3 className={style.contactTitle}>Email</h3>
              <span className={style.contactDesc}>+234 803 428 5512</span>
            </div>
          </div>

          <div className={style.contactInfo}>
            <UilEnvelopeCheck size="40" className={style.phoneIcon} />
            <div>
              <h3 className={style.contactTitle}>Email</h3>
              <span className={style.contactDesc}>+234 803 428 5512</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={style.contactGrid}>
          <div className={style.contactGrid}>
            <div className={style.contactContent}>
              <label htmlFor="name" className={style.contactLabel}>
                Name
              </label>
              <input type="text" id="name" />
            </div>

            <div className={style.contactContent}>
              <label htmlFor="email" className={style.contactLabel}>
                Email
              </label>
              <input type="email" id="email" />
            </div>

            <div className={style.contactContent}>
              <label htmlFor="project" className={style.contactLabel}>
                Subject
              </label>
              <input type="text" id="project" />
            </div>

            <div className={style.contactContent}>
              <label htmlFor="message" className={style.contactLabel}>
                Message
              </label>
              <textarea name="" id="message" cols="0" rows="7"></textarea>
            </div>

            <button type="submit" className={style.formButton}>
              Submit Message
              <UilMessage size="18" className={style.messageIcon} />
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
