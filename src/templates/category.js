import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import { ArrowBackIos } from "@material-ui/icons"
import { Breadcrumbs, Typography } from "@material-ui/core"
import Layout from "../components/common/Layout"
import Seo from "../components/seo"
import BlogCard from "../components/common/BlogCard"
import * as style from "../styles/category.module.css"

export default function Category({
  pageContext: { name, id, description, thumbnail },
  data: {
    allStrapiPosts: { edges: posts },
  },
}) {
  let path
  useEffect(() => {
    path = window !== undefined ? window.location.pathname : ""
  })

  return (
    <>
      <Seo
        NewTitle={name}
        NewDescription={
          name === "Journey"
            ? `Browse all blog posts in my Tech ${name}`
            : `Browse all blog posts in ${name}`
        }
        pathName={path}
      />
      <Layout>
        <div key={id} className={style.category}>
          <div className={style.breadcrumb}>
            <span>
              <Link to="/blog">
                <ArrowBackIos />
              </Link>
            </span>
            <div className={style.breadcrumbInfo}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Typography variant="p">{name}</Typography>
              </Breadcrumbs>
            </div>
          </div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 0.3, duration: 0.5 }}
          >
            <GatsbyImage
              image={getImage(thumbnail.localFile)}
              alt={name}
              className={style.featuredImage}
            />
          </motion.div>

          <div>
            <div className={style.categoryDesc}>
              <motion.h1 initial={{ y: -500 }} animate={{ y: 0 }}>
                {name}
              </motion.h1>
              <motion.p initial={{ y: 500 }} animate={{ y: 0 }}>
                {description}
              </motion.p>
            </div>
          </div>
          <BlogCard blogData={posts} />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query GetCategoryPosts($id: String!) {
    allStrapiPosts(filter: { category: { id: { eq: $id } } }) {
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
`
