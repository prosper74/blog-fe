import React from "react"
import BlogCard from "../common/BlogCard"
import * as style from "../../styles/blogposts.module.css"

export default function BlogPosts({ posts }) {
  return (
    <div className={style.blogPosts}>
      <BlogCard blogData={posts} />
    </div>
  )
}
