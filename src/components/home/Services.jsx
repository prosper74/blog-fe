import React from "react"
import { UilExternalLinkAlt, UilAirplay } from "@iconscout/react-unicons"
import { graphql, Link, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import * as style from "../../styles/service.module.css"

function Services() {
  // Graphql query to fetch the services from the .md files
  const data = useStaticQuery(graphql`
    query servicesQuery {
      allMarkdownRemark(
        filter: { frontmatter: { stack: { eq: "Services" } } }
        sort: { fields: frontmatter___title, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            description
            slug
          }
          id
        }
      }
    }
  `)
  const servicesData = data.allMarkdownRemark.nodes

  return (
    <div className={style.services}>
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        className={style.servicesContainer}
      >
        {servicesData.map(d => (
          <Link
            to={
              d.frontmatter.slug === "portfolio"
                ? "https://prosperatu.netlify.app"
                : "/" + d.frontmatter.slug
            }
            className={style.serviceContent}
            key={d.id}
          >
            <UilAirplay className={style.serviceIcon} />
            <div>
              <h3>{d.frontmatter.title}</h3>
              <p>{d.frontmatter.description}</p>
            </div>
            <div className={style.viewMore}>
              View More
              <UilExternalLinkAlt size="15" className={style.viewMoreIcon} />
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}

export default Services
