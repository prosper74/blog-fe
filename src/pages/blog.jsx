import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import BlogPosts from "../components/blog/BlogPosts"
import Layout from "../components/common/Layout"

export default function BlogPage({
  data: {
    allStrapiPosts: { edges: posts },
  },
}) {
  const path = typeof window !== undefined && window.location.pathname
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
