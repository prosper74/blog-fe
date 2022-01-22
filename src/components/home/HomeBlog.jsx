import React from "react"
import * as style from "../../styles/homeblog.module.css"
import { UilExternalLinkAlt, UilCalender } from "@iconscout/react-unicons"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { timeSince } from "../dateFunction"

function HomeBlog() {
  // Graphql query to fetch the blog posts from the .md files
  const data = useStaticQuery(graphql`
    query HomeBlogQuery {
      allMarkdownRemark(
        filter: { frontmatter: { stack: { eq: "Blog" } } }
        limit: 3
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 0.7
                  width: 500
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
            date
            excerpt
            slug
            title
          }
          id
        }
      }
    }
  `)

  const blogData = data.allMarkdownRemark.nodes

  return (
    <div className={style.blog} id="blog">
      <h2>Latest Stories</h2>
      <p className={style.subtitle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
        reprehenderit optio, explicabo harum fugiat
      </p>
      <div className={style.blogContainer}>
        {blogData.map(d => (
          <Link
            to={"/blog/" + d.frontmatter.slug}
            key={d.id}
            className={style.postContent}
          >
            <GatsbyImage
              image={getImage(d.frontmatter.featuredImage)}
              alt={d.frontmatter.title}
              className={style.postImage}
            />
            {/* <img
              src="https://www.bbvaapimarket.com/wp-content/uploads/2018/04/blogsapis.jpg"
              alt=""
              className={style.postImage}
            /> */}
            <div className={style.postInformation}>
              <h3>{d.frontmatter.title}</h3>
              <p>{d.frontmatter.excerpt}</p>
            </div>
            <div className={style.postFooter}>
              <div className={style.readMore}>
                Read more
                <UilExternalLinkAlt size="15" className={style.readMoreIcon} />
              </div>
              <div className={style.readMore}>
                <UilCalender size="15" className={style.viewMoreIcon} />
                &nbsp;
                {timeSince(new Date(d.frontmatter.date))} ago
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to="/blog" className={style.viewMoreButton}>
        View more
        <UilExternalLinkAlt size="18" className={style.viewMoreIcon} />
      </Link>
    </div>
  )
}

export default HomeBlog
