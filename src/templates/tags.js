import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { ArrowBackIos } from "@material-ui/icons"
import { Breadcrumbs, Typography } from "@material-ui/core"
import Seo from "../components/seo"
import Layout from "../components/common/Layout"
import BlogCard from "../components/common/BlogCard"
import * as style from "../styles/category.module.css"

export default function Tag({
  pageContext: { name, id, thumbnail },
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
        NewDescription={`Browse all blog posts in ${name}`}
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
          <GatsbyImage
            image={getImage(thumbnail.localFile)}
            alt={name}
            className={style.featuredImage}
          />
          <div>
            <div className={style.categoryDesc}>
              <h1>{name}</h1>
            </div>
          </div>
          <BlogCard blogData={posts} />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query GetTagPosts($id: String!) {
    allStrapiPosts(filter: { tags: { elemMatch: { id: { eq: $id } } } }) {
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
