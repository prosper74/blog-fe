import React from "react"
import { Link } from "gatsby"
import MarkdownView from "react-showdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share"
import { Bookmark, ArrowBackIos } from "@material-ui/icons"
import {
  Breadcrumbs,
  IconButton,
  Tooltip,
  Typography,
  Chip,
} from "@material-ui/core"
import { timeSince } from "../components/dateFunction"
import Layout from "../components/common/Layout"
import * as style from "../styles/singlepost.module.css"

const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      delay: 0.3,
      duration: 0.5,
    },
  },
}

const metaVariants = {
  catHidden: { x: -400 },
  dateHidden: { x: 400 },
  visible: {
    x: 0,
    transition: { type: "spring", delay: 0.5, duration: 0.5 },
  },
}

const contentVariants = {
  hidden: { y: 150, opacity: 0 },
  titleVisible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.6, duration: 0.6 },
  },
  bodyVisible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", delay: 0.8, duration: 0.6 },
  },
}

export default function SinglePost({
  pageContext: { title, body, id, thumbnail, tags, category, createdAt },
}) {
  return (
    <Layout>
      <div key={id} className={style.singlePost}>
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
              <Typography variant="p">Single</Typography>
            </Breadcrumbs>
          </div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <GatsbyImage
            image={getImage(thumbnail.localFile)}
            alt={title}
            className={style.featuredImage}
          />
        </motion.div>
        <div>
          <div className={style.metadata}>
            <motion.span
              variants={metaVariants}
              initial="catHidden"
              animate="visible"
            >
              <em>{category}</em>
            </motion.span>
            <motion.div
              variants={metaVariants}
              initial="dateHidden"
              animate="visible"
              className={style.metadataInfo}
            >
              <span>{timeSince(new Date(createdAt))} ago</span>
              <Tooltip title="Bookmark" className={style.bookmarkIcon}>
                <IconButton aria-label="delete" className={style.bookIcon}>
                  <Bookmark />
                </IconButton>
              </Tooltip>
            </motion.div>
          </div>
          <div className={style.mainContent}>
            <motion.h1
              variants={contentVariants}
              initial="hidden"
              animate="titleVisible"
            >
              {title}
            </motion.h1>
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="bodyVisible"
              className={style.post_inner}
            >
              <MarkdownView markdown={body} />
            </motion.div>
            Category: &nbsp;
            <Link to={"/blog/" + category.toLowerCase().replace(/ /g, "-")}>
              <Chip label={category} />
            </Link>
            <br />
            <br />
            <span>
              Tags: &nbsp;
              {tags.map(d => (
                <Link
                  key={d.name}
                  to={"/blog/" + d.name.toLowerCase().replace(/ /g, "-")}
                >
                  <Chip label={d.name} className={style.chipElements} />
                </Link>
              ))}
            </span>
          </div>
          <div className={style.shareSection}>
            <b>Share to:</b>
            <Tooltip
              title="Share post to facebook"
              className={style.bookmarkIcon}
            >
              <FacebookShareButton
                url={`https://prosper-blog.netlify.app/blog/${title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                quote={`ProsperBlog - ${title}`}
                hashtag={"#" + category}
              >
                <FacebookIcon size={27} className={style.socialMediaButton} />
              </FacebookShareButton>
            </Tooltip>
            <Tooltip
              title="Share post to Twitter"
              className={style.bookmarkIcon}
            >
              <TwitterShareButton
                url={`https://prosper-blog.netlify.app/blog/${title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                quote={`ProsperBlog - ${title}`}
                hashtag={"#" + category}
              >
                <TwitterIcon size={27} className={style.socialMediaButton} />
              </TwitterShareButton>
            </Tooltip>
            <Tooltip
              title="Share post to Whatsapp"
              className={style.bookmarkIcon}
            >
              <LinkedinShareButton
                url={`https://prosper-blog.netlify.app/blog/${title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                quote={`ProsperBlog - ${title}`}
                hashtag={"#" + category}
              >
                <LinkedinIcon size={27} className={style.socialMediaButton} />
              </LinkedinShareButton>
            </Tooltip>
            <Tooltip
              title="Share post to facebook"
              className={style.bookmarkIcon}
            >
              <WhatsappShareButton
                url={`https://prosper-blog.netlify.app/blog/${title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                quote={`ProsperBlog - ${title}`}
                hashtag={"#" + category}
              >
                <WhatsappIcon size={27} className={style.socialMediaButton} />
              </WhatsappShareButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </Layout>
  )
}
