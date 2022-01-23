import React, { useState, useEffect } from "react"
import Layout from "../components/common/Layout"
import Banner from "../components/home/Banner"
import Services from "../components/home/Services"
import HomeBlog from "../components/home/HomeBlog"
import Contact from "../components/home/Contact"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"
import "../styles/global.css"

export default function Home() {
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <div className="mainPage">
      {loading ? (
        <div className="loader">
          <ClimbingBoxLoader color={"#6633FF"} loading={loading} size={20} />
        </div>
      ) : (
        <Layout>
          <Banner />
          <Services />
          <HomeBlog />
          <Contact />
        </Layout>
      )}
    </div>
  )
}
