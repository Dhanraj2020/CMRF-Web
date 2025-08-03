import AboutSection from "../../components/aboutSection/aboutSection"
import TopCarousel from "../../components/common/carousel/carousel"
import BeforeLoginFooter from "../../components/common/footer/beforeLoginFooter"
import HeaderContainer from "../../components/common/header/headerContainer"
import SchemeSlider from "../../components/common/schemeSilder/schemeSlider"
import TopDonarSlider from "../../components/common/topDonarSilder/topDonarSlider"
import QuickLinks from "../../components/quickLinks/quickLinks"

const Home = () => {
  return (
    <div className="d-flex flex-column">
      <HeaderContainer isLogin={false} />
      <div className="pageContent">
        <TopCarousel />
        <TopDonarSlider />
        <AboutSection />
        <QuickLinks />
        <SchemeSlider />
      </div>
      <div className="mt-auto">
        <BeforeLoginFooter />
      </div>
    </div>
  )
}

export default Home