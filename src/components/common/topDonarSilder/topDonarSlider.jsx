import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { GOVERNMENT_SCHMES_OPTIONS } from '../constant';
import styles from "./topDonarSlider.module.scss";
import { Col, Row } from 'react-bootstrap';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "grid", placeItems: "center", width: "48px", height: "48px", color: "#5A5D62", fontSize: "30px"
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
      style={{ ...style, display: "grid", placeItems: "center", width: "48px", height: "48px", zIndex: "1", color: "#5A5D62", fontSize: "30px" }}
      onClick={onClick}
    ><BsChevronLeft />
    </div>
  );
}
const TopDonarSlider = () => {
  // function Responsive() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    initialSlide: 0,
    arrows: false,
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
    <section className={styles.topDonarSlider}>
      <div className={styles.topDonarSliderInnerBox + " " + "ps-4 py-md-4"}>
        <Row>
          <Col md={1} className="pe-4">
            <div className={top.DonarCount}>
              <p className={styles.titleHeading + " " + "text-nowrap"}>Top Donor</p>
              <p className={styles.donarCountvalues}>1204+</p>
            </div>
          </Col>

          <Col md={11}>
            <div className="sliderContainer border-start">
              <Slider {...settings}>
                {GOVERNMENT_SCHMES_OPTIONS.map((link, index) => (
                  <div className="d-flex justify-content-between align-items-center" key={index}>
                    <a
                      href={link.href}
                      aria-label={link.ariaLabel}
                      title={link.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <div className={styles.donarInfoCard + " " + "d-flex justify-content-center align-items-center flex-column"}>
                        <div className={styles.labelText}>₹ 47,95,928</div>
                        <div className={styles.valueText}>PA to SP Buldana</div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>

            </div>
          </Col>
        </Row>
      </div>
      {/* <img src="/assets/images/wa-icon.svg" className={styles.waConnect + " " + 'img-fuild cursor-pointer'} /> */}
    </section >
  )
}

export default TopDonarSlider;