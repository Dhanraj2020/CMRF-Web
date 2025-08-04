import React, { memo } from "react"
import AboutSection from "../../components/aboutSection/aboutSection"
import TopCarousel from "../../components/common/carousel/carousel"
import TopDonarSlider from "../../components/common/topDonarSilder/topDonarSlider"
import QuickLinks from "../../components/quickLinks/quickLinks"
const Home = () => {
  return (
    <React.Fragment>
      <TopCarousel />
      <TopDonarSlider />
      <AboutSection />
      <QuickLinks />
    </React.Fragment>
  )
}
export default memo(Home)