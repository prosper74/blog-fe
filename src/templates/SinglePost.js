import React from "react"
import { Link } from "gatsby"
import MarkdownView from "react-showdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Bookmark,
  Facebook,
  Twitter,
  Instagram,
  WhatsApp,
  ArrowBackIos,
} from "@material-ui/icons"
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
        <GatsbyImage
          image={getImage(thumbnail.localFile)}
          alt={title}
          className={style.featuredImage}
        />
        <div>
          <div className={style.metadata}>
            <span>
              <em>{category}</em>
            </span>
            <div className={style.metadataInfo}>
              <span>{timeSince(new Date(createdAt))} ago</span>
              <Tooltip title="Bookmark" className={style.bookmarkIcon}>
                <IconButton aria-label="delete" className={style.bookIcon}>
                  <Bookmark />
                </IconButton>
              </Tooltip>
            </div>
          </div>
          <div className={style.mainContent}>
            <h1>{title}</h1>
            <div className={style.post_inner}>
              <MarkdownView markdown={body} />
            </div>
            <br />
            <br />
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
          <div className="shareButtons">
            <b>Share to:</b>
            <Tooltip
              title="Share post to facebook"
              className={style.bookmarkIcon}
            >
              <IconButton aria-label="delete">
                <Facebook />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Share post to Twitter"
              className={style.bookmarkIcon}
            >
              <IconButton aria-label="delete">
                <Twitter />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Share post to Whatsapp"
              className={style.bookmarkIcon}
            >
              <IconButton aria-label="delete">
                <WhatsApp />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Share post to facebook"
              className={style.bookmarkIcon}
            >
              <IconButton aria-label="delete">
                <Instagram />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </Layout>
  )
}
