import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MarkdownView from "react-showdown"
import { motion } from "framer-motion"
import {
  containerVariants,
  bannerVariants,
  metaVariants,
  contentVariants,
  socialButtonVariants,
} from "../components/animations"
import Seo from "../components/seo"
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
import { ArrowBackIos, FavoriteBorder, Favorite } from "@material-ui/icons"
import {
  Breadcrumbs,
  // IconButton,
  Tooltip,
  Typography,
  Chip,
  // Badge,
  Grid,
} from "@material-ui/core"
import Layout from "../components/common/Layout"
import * as style from "../styles/singlepost.module.css"

let path

export default function SinglePost({
  pageContext: { title, body, id, thumbnail, tags, category, createdAt, like },
}) {
  const [isLike, setIsLike] = useState(false)
  // const [postLikes, setPostLikes] = useState([])
  let likedPosts

  // console.log(postLikes)

  const handleLike = async () => {
    if (likedPosts.includes(id)) {
      setIsLike(true)
    } else {
      likedPosts.push(id)
      localStorage.setItem("userLike", JSON.stringify(likedPosts))
      setIsLike(true)
      let newLike = like + 1

      try {
        await axios.patch(process.env.GATSBY_STRAPI + "/posts/" + id, {
          like: newLike,
        })
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    path = window !== undefined ? window.location.pathname : ""
    likedPosts =
      window !== undefined
        ? JSON.parse(window.localStorage.getItem("userLike") || "[]")
        : ""

    if (likedPosts.includes(id)) {
      setIsLike(true)
    } else {
      setIsLike(false)
    }
  }, [isLike, likedPosts, id])

  return (
    <>
      {/* SEO component for the page  */}
      <Seo
        isBlogPost={true}
        NewTitle={title}
        NewDescription={body.substr(0, 60)}
        newImage={thumbnail.url}
        pathName={path}
      />
      {/* End of SEO  */}

      {/* Page Layout  */}
      <Layout>
        <motion.div
          key={id}
          variants={containerVariants}
          className={style.singlePost}
        >
          {/* Breadcrumb */}
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
          {/* End of Breadcrumb */}

          {/* Post featured image  */}
          <motion.div
            variants={bannerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <GatsbyImage
              image={getImage(thumbnail.localFile)}
              alt={title}
              className={style.featuredImage}
            />
          </motion.div>
          {/* End of featured imgae */}

          <div>
            {/* post meta data  */}
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid item xs={4}>
                <motion.span
                  variants={metaVariants}
                  initial="catHidden"
                  animate="visible"
                >
                  <em>{category}</em>
                </motion.span>
              </Grid>
              <Grid item xs={4} align="center">
                <motion.div
                  variants={metaVariants}
                  initial="dateHidden"
                  animate="visible"
                >
                  {createdAt}
                </motion.div>
              </Grid>
              <Grid
                container
                xs={4}
                justifyContent="flex-end"
                className={style.likeContainer}
              >
                <Tooltip title="like" onClick={handleLike}>
                  {isLike ? (
                    <Favorite color="error" fontSize="large" />
                  ) : (
                    <FavoriteBorder fontSize="large" />
                  )}
                </Tooltip>
                {like || isLike ? (
                  <motion.div
                    variants={metaVariants}
                    initial="likeHidden"
                    animate="visible"
                    className={style.badge}
                  >
                    {!isLike ? like : like + 1}
                  </motion.div>
                ) : null}
              </Grid>
            </Grid>
            {/* End of meta data */}

            <div className={style.mainContent}>
              {/* Post title */}
              <motion.h1
                variants={contentVariants}
                initial="hidden"
                animate="titleVisible"
              >
                {title}
              </motion.h1>
              {/* Post body  */}
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="bodyVisible"
                className={style.post_inner}
              >
                <MarkdownView markdown={body} />
              </motion.div>
              {/* Category and tags */}
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

            {/* Share post to social media  */}
            <div className={style.shareSection}>
              <b>Share to:</b>
              <motion.span variants={socialButtonVariants} whileHover="hover">
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
                    <FacebookIcon
                      size={27}
                      round={true}
                      className={style.socialMediaButton}
                    />
                  </FacebookShareButton>
                </Tooltip>
              </motion.span>
              <motion.span variants={socialButtonVariants} whileHover="hover">
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
                    <TwitterIcon
                      size={27}
                      round={true}
                      className={style.socialMediaButton}
                    />
                  </TwitterShareButton>
                </Tooltip>
              </motion.span>
              <motion.span variants={socialButtonVariants} whileHover="hover">
                <Tooltip
                  title="Share post to Linkedin"
                  className={style.bookmarkIcon}
                >
                  <LinkedinShareButton
                    url={`https://prosper-blog.netlify.app/blog/${title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    quote={`ProsperBlog - ${title}`}
                    hashtag={"#" + category}
                  >
                    <LinkedinIcon
                      size={27}
                      round={true}
                      className={style.socialMediaButton}
                    />
                  </LinkedinShareButton>
                </Tooltip>
              </motion.span>
              <motion.span variants={socialButtonVariants} whileHover="hover">
                <Tooltip
                  title="Share post to Whatsapp"
                  className={style.bookmarkIcon}
                >
                  <WhatsappShareButton
                    url={`https://prosper-blog.netlify.app/blog/${title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    quote={`ProsperBlog - ${title}`}
                    separator=":: "
                  >
                    <WhatsappIcon
                      size={30}
                      round={true}
                      className={style.socialMediaButton}
                    />
                  </WhatsappShareButton>
                </Tooltip>
              </motion.span>
            </div>
          </div>
        </motion.div>
      </Layout>
      {/* End of page */}
    </>
  )
}
