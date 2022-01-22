const path = require(`path`)
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/SinglePost.js`)
  const result = await graphql(`
    query MyPosts {
      posts: allStrapiPosts {
        edges {
          node {
            strapiId
            title
            body
            createdAt
            category {
              name
            }
            tags {
              name
            }
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

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.posts.edges

  posts.forEach(post => {
    createPage({
      path: `/blog/${post.node.title.toLowerCase().replace(/ /g, "-")}`,
      component: blogPostTemplate,
      context: {
        title: post.node.title,
        body: post.node.body,
        id: post.node.strapiId,
        thumbnail: post.node.thumbnail,
        tags: post.node.tags,
        category: post.node.category.name,
        createdAt: post.node.createdAt,
      },
    })
  })
}
