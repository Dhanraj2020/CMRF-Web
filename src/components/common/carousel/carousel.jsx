import Carousel from 'react-bootstrap/Carousel';
import CarouselImages from './carouselImages';
import { Button } from 'react-bootstrap';
import styles from "./topCarousel.module.scss";

const TopCarousel = () => {
  return (
    <>
      <Carousel className={styles.topCarousel + " " + "topCarousel"}>
        <Carousel.Item>
          <div>
            <img src="/assets/images/home/carouselImage1.svg" alt="carousel-img1" className="img-fluid d-block w-100" />
          </div>
          {/*  <Carousel.Caption className={styles.carouselCaption}>
            <h3>Our Mission</h3>
            <p>To promote skill integrated higher
              education by using state-of-the-art
              technology and competency and
              empowering the community”</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img src="/assets/images/home/carouselImage2.svg" alt="carousel-img2" className="img-fluid d-block w-100" />
          </div>
          <Carousel.Caption className={styles.carouselCaption}>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div>
            <img src="/assets/images/home/carouselImage3.svg" alt="carousel-img3" className="img-fluid d-block w-100" />
          </div>
          <Carousel.Caption className={styles.carouselCaption}>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel >
    </>
  );
}

export default TopCarousel;