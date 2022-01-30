import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ isBlogPost, NewTitle, NewDescription, newImage, pathName }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          author
          keywords
          twitter
          fbAppID
        }
      }
    }
  `)
  const {
    title,
    description,
    siteUrl,
    image,
    author,
    keywords,
    twitter,
    fbAppID,
  } = site.siteMetadata

  const allKeywords = keywords.map(keyword => `"${keyword}"`)

  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content={author} />
      <title>
        {`${
          isBlogPost
            ? NewTitle
            : NewTitle + " | " + (NewDescription || description)
        }` || title}
      </title>
      <meta name="description" content={NewDescription || description} />
      <meta name="image" content={newImage || image} />
      <link rel="canonical" href={pathName || siteUrl} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={pathName || siteUrl} />
      {isBlogPost ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={NewTitle || title} />
      <meta property="og:description" content={NewDescription || description} />
      <meta property="og:image" content={newImage || image} />
      <meta property="fb:app_id" content={fbAppID} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitter} />
      <meta name="twitter:title" content={NewTitle || title} />
      <meta
        name="twitter:description"
        content={NewDescription || description}
      />
      <meta name="twitter:image" content={newImage || image} />
    </Helmet>
  )
}

export default Seo
