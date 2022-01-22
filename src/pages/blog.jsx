import React from "react"
import { graphql } from "gatsby"
import BlogPosts from "../components/blog/BlogPosts"
import Layout from "../components/common/Layout"

export default function BlogPage({
  data: {
    allStrapiPosts: { edges: posts },
  },
}) {
  return (
    <Layout>
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiPosts {
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
