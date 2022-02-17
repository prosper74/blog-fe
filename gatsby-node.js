const path = require(`path`)
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/SinglePost.js`)
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const tagTemplate = path.resolve(`src/templates/tags.js`)
  const result = await graphql(`
    query MyPosts {
      posts: allStrapiPosts {
        edges {
          node {
            strapiId
            title
            body
            createdAt(fromNow: true)
            like
            category {
              name
            }
            tags {
              name
            }
            thumbnail {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      categories: allStrapiCategories {
        edges {
          node {
            strapiId
            name
            description
            thumbnail {
              url
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      tags: allStrapiTags {
        edges {
          node {
            strapiId
            name
            thumbnail {
              url
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
  const categories = result.data.categories.edges
  const tags = result.data.tags.edges

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
        like: post.node.like,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/blog/${category.node.name.toLowerCase().replace(/ /g, "-")}`,
      component: categoryTemplate,
      context: {
        name: category.node.name,
        description: category.node.description,
        id: category.node.strapiId,
        thumbnail: category.node.thumbnail,
      },
    })
  })

  tags.forEach(tag => {
    createPage({
      path: `/blog/${tag.node.name.toLowerCase().replace(/ /g, "-")}`,
      component: tagTemplate,
      context: {
        name: tag.node.name,
        id: tag.node.strapiId,
        thumbnail: tag.node.thumbnail,
      },
    })
  })
}
