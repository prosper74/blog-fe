import React from "react"
import { UilExternalLinkAlt } from "@iconscout/react-unicons"
import { graphql, Link, useStaticQuery } from "gatsby"
import { motion } from "framer-motion"
import BlogCard from "../common/BlogCard"
import * as style from "../../styles/homeblog.module.css"

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
            createdAt
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
      <motion.div whileHover={{ scale: 1.1 }}>
        <Link to="/blog" className={style.viewMoreButton}>
          View more
          <UilExternalLinkAlt size="18" className={style.viewMoreIcon} />
        </Link>
      </motion.div>
    </div>
  )
}

export default HomeBlog
