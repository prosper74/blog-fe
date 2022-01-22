import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ArrowBackIos } from "@material-ui/icons"
import { Breadcrumbs, Typography } from "@material-ui/core"
import Layout from "../components/common/Layout"
import BlogCard from "../components/common/BlogCard"
import * as style from "../styles/category.module.css"

export default function Category({
  pageContext: { name, id, description, thumbnail },
  data: {
    allStrapiPosts: { edges: posts },
  },
}) {
  return (
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
        <GatsbyImage
          image={getImage(thumbnail.localFile)}
          alt={name}
          className={style.featuredImage}
        />
        <div>
          <div className={style.categoryDesc}>
            <h1>{name}</h1>
            <p>{description}</p>
          </div>
        </div>
        <BlogCard blogData={posts} />
      </div>
    </Layout>
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
