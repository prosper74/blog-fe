import React from "react"
import { UilExternalLinkAlt, UilCalender } from "@iconscout/react-unicons"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { timeSince } from "../dateFunction"
import * as style from "../../styles/blogcard.module.css"

function BlogCard({ blogData }) {
  return (
    <div className={style.blog}>
      <div className={style.blogContainer}>
        {blogData.map(({ node }) => (
          <Link
            to={"/blog/" + node.title.toLowerCase().replace(/ /g, "-")}
            key={node.strapiId}
            className={style.postContent}
          >
            <GatsbyImage
              image={getImage(node.thumbnail.localFile)}
              alt={node.title}
              className={style.postImage}
            />
            <div className={style.postInformation}>
              <h3>{node.title}</h3>
              <p>{node.excerpt && node.excerpt.substring(0, 80)}</p>
            </div>
            <div className={style.postFooter}>
              <div className={style.readMore}>
                Read more
                <UilExternalLinkAlt size="15" className={style.readMoreIcon} />
              </div>
              <div className={style.readMore}>
                <UilCalender size="15" className={style.viewMoreIcon} />
                &nbsp;
                {timeSince(new Date(node.createdAt))} ago
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* <Link to="/blog" className={style.viewMoreButton}>
        View more
        <UilExternalLinkAlt size="18" className={style.viewMoreIcon} />
      </Link> */}
    </div>
  )
}

export default BlogCard
