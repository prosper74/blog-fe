import React from "react"
import { UilExternalLinkAlt } from "@iconscout/react-unicons"
import { graphql, Link, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import BlogCard from "../common/BlogCard"
import * as style from "../../styles/homeblog.module.css"

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0 5px 8px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
}

function HomeBlog() {
  // Graphql query to fetch the blog posts from the .md files
  const data = useStaticQuery(graphql`
    query HomeBlogQuery {
      allStrapiPosts(limit: 6, sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            strapiId
            title
            excerpt
            createdAt(fromNow: true)
            thumbnail {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `)

  const blogData = data.allStrapiPosts.edges

  return (
    <div className={style.blog} id="blog">
      <h2>Latest Stories</h2>
      <p className={style.subtitle}>
        Read my latest posts from all categories. Hopefully, you'll get inspired
        today... smiles
      </p>
      <BlogCard blogData={blogData} />
      <div className={style.viewMore}>
        <motion.button variants={buttonVariants} whileHover="hover">
          <Link to="/blog" className={style.viewMoreButton}>
            View more
            <UilExternalLinkAlt size="18" className={style.viewMoreIcon} />
          </Link>
        </motion.button>
      </div>
    </div>
  )
}

export default HomeBlog
