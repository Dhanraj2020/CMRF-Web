import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsArrowRight, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SubHeadingH4 } from '../../common/common';
import styles from "./coursesOffered.module.scss";
import { COURSES_OFFERED } from '../common/constant';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "grid", placeItems: "center", background: "linear-gradient(180deg, #F79026 0%, #EF4637 100%)", width: "48px", height: "48px", borderRadius: "50%", boxShadow: "0px 4px 4px 0px #00000040", color: "#fff"
      }}
      onClick={onClick}
    ><BsChevronRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "grid", placeItems: "center", background: "linear-gradient(180deg, #F79026 0%, #EF4637 100%)", width: "48px", height: "48px", borderRadius: "50%", boxShadow: "0px 4px 4px 0px #00000040", zIndex: "1", color:"#fff" }}
      onClick={onClick}
    ><BsChevronLeft />
    </div>
  );
}
const CoursesOffered = () => {
  // function Responsive() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // }
  return (
    <section className={styles.coursesOffered}>
      <div className={styles.coursesOfferedInnerBox + " " + "p-md-4 pb-md-5"}>
        <SubHeadingH4 header="Courses Offered" className={styles.heading + " " + "text-center pt-3 pt-lg-0"} />
        <p className={styles.subTitle}>Ready to take the next step in your <span className="fw-bold">professional development?</span> Enroll now and join us on this exciting journey of learning and growth!</p>
        
        <div className="sliderContainer mx-lg-3">
          <Slider {...settings}>
            {COURSES_OFFERED && COURSES_OFFERED.map((item,i)=>{
              return(
                <div className="px-2 h-100" key={i}>
                <Card className={styles.courseSectorCard + " " + "border-0 h-100"}>
                  <div className={styles.sectorType}>
                    <div className={styles.sectorTypeBox}>
                      <Card.Img src={`/assets/images/home/coursesOfferedBg${i+1}.svg`} alt="Apparel Sector" className={styles.cardImg + " " + "img-fluid"} />
                      <div className={styles.sectorInfo + " " + "d-flex flex-column"}>
                        <div>
                          <Card.Title className={styles.cardTitle}>Sector</Card.Title>
                          <div className={styles.sectorName}>{item.sector}</div>
                        </div>
                        <div className="d-flex align-items-center mt-auto">
                          <div className={styles.certifiedByBox}>
                            <div className={styles.certifiedBy}>Certified by</div>
                            <div className={styles.universityName}>{item.certifiedBy}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Card.Body className={styles.cardBody + " " + "d-flex flex-column p-3"}>
                    <div className="mb-5">
                      {item.data.map((resp,index)=>{
                        return(
                          <Card.Text className={styles.cardText} key={index}>
                          {resp.certificate}
                          <div className={styles.courseDuration}>{resp.duration} | {resp.eligible}</div>
                        </Card.Text>
                        )
                      })}
                    </div>
                    <div className="mt-auto">
                      <Button variant="link" className={styles.viewMoreLink + " " + "text-center"}>
                        <BsArrowRight /> <span className="me-2">view more..</span></Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
              )
            })}
 
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default CoursesOffered;