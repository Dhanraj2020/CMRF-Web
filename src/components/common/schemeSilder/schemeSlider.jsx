import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { GOVERNMENT_SCHMES_OPTIONS } from '../constant';
import styles from "./schemeSlider.module.scss";
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
const SchemeSlider = () => {
  // function Responsive() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
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
    <section className={styles.schemeSlider}>
      <div className={styles.schemeSliderInnerBox + " " + "p-md-4"}>
        <div className="sliderContainer">
          <Slider {...settings}>
            {GOVERNMENT_SCHMES_OPTIONS.map((link, index) => (
              <div className="d-flex justify-content-between align-items-center" key={index}>
                <a
                  href={link.href}
                  aria-label={link.ariaLabel}
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={link.schemeImgSrc}
                    className="img-fluid"
                    alt={link.alt}
                  />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default SchemeSlider;