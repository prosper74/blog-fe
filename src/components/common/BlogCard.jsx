import React from "react"
import { UilExternalLinkAlt, UilCalender } from "@iconscout/react-unicons"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import * as style from "../../styles/blogcard.module.css"

function BlogCard({ blogData }) {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
      className={style.blog}
    >
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
              <motion.h3
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 1.1, duration: 0.7 }}
              >
                {node.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", delay: 1.3, duration: 0.7 }}
              >
                {node.excerpt && node.excerpt.substring(0, 100)}...
              </motion.p>
            </div>
            <div className={style.postFooter}>
              <div className={style.readMore}>
                Read more
                <UilExternalLinkAlt size="15" className={style.readMoreIcon} />
              </div>
              <div className={style.readMore}>
                <UilCalender size="15" className={style.viewMoreIcon} />
                &nbsp;
                {node.createdAt}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default BlogCard
