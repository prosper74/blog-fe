import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import BlogPosts from "../components/blog/BlogPosts"
import Layout from "../components/common/Layout"

let path

export default function BlogPage({
  data: {
    allStrapiPosts: { edges: posts },
  },
}) {
  useEffect(() => {
    path = window !== undefined ? window.location.pathname : ""
  })

  return (
    <>
      <Seo
        NewTitle="Prosper Blog"
        NewDescription="Browse all my blog posts"
        pathName={path}
      />
      <Layout>
        <BlogPosts posts={posts} />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allStrapiPosts(sort: { fields: createdAt, order: DESC }) {
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
`
