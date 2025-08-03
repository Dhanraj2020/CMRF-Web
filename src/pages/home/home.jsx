import BackgroundPurpose from "../../components/backgroundPurpose/backgroundPurpose"
import TopCarousel from "../../components/common/carousel/carousel"
import BeforeLoginFooter from "../../components/common/footer/beforeLoginFooter"
import HeaderContainer from "../../components/common/header/headerContainer"
import CoursesOffered from "../../components/coursesOffered/coursesOffered"
import OperatingModalPurpose from "../../components/operatingModalPurpose/operatingModalPurpose"
import SustainableDevelopmentGoal from "../../components/sustainableDevelopmentGoal/sustainableDevelopmentGoal"

const Home = () => {
  return (
    <div className="d-flex flex-column">
      <HeaderContainer isLogin={false} />
      <div className="pageContent">
        {/* <SignIn /> */}
        <TopCarousel />
        <CoursesOffered/>
        <OperatingModalPurpose />
        <SustainableDevelopmentGoal/>
        <BackgroundPurpose />
      </div>
      <div className="mt-auto">
        <BeforeLoginFooter />
      </div>
    </div>
  )
}

export default Home