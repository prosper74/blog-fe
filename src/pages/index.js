import React, { useEffect } from "react"
import Seo from "../components/seo"
import Layout from "../components/common/Layout"
import Banner from "../components/home/Banner"
import Services from "../components/home/Services"
import HomeBlog from "../components/home/HomeBlog"
import Contact from "../components/home/Contact"
import "../styles/global.css"

let path

export default function Home() {
  
  useEffect(() => {
    path = window !== undefined ? window.location.pathname : ""
  })

  return (
    <div className="mainPage">
      <Seo NewTitle="Prosper Blog" pathName={path} />
      <Layout>
        <Banner />
        <Services />
        <HomeBlog />
        <Contact />
      </Layout>
    </div>
  )
}
