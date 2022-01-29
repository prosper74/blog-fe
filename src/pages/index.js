import React from "react"
import Layout from "../components/common/Layout"
import Banner from "../components/home/Banner"
import Services from "../components/home/Services"
import HomeBlog from "../components/home/HomeBlog"
import Contact from "../components/home/Contact"
import "../styles/global.css"

export default function Home() {
  return (
    <div className="mainPage">
      <Layout>
        <Banner />
        <Services />
        <HomeBlog />
        <Contact />
      </Layout>
    </div>
  )
}
