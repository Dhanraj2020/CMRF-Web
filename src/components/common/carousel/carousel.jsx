import Carousel from 'react-bootstrap/Carousel';
import styles from "./topCarousel.module.scss";
import { Col, Container, Row } from 'react-bootstrap';

const TopCarousel = () => {
  return (
    <>
      <Carousel className={styles.topCarousel + " " + "topCarousel"}>
        <Carousel.Item>
          <div>
            <img src="/assets/images/home/carouselImage.svg" alt="carousel-img1" className="img-fluid d-block w-100" />
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
            <img src="/assets/images/home/carouselImage.svg" alt="carousel-img2" className="img-fluid d-block w-100" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div>
            <img src="/assets/images/home/carouselImage.svg" alt="carousel-img3" className="img-fluid d-block w-100" />
          </div>
        </Carousel.Item>
      </Carousel >
      <Container fluid>
        <Row>
          <Col className="px-0">
            <div className={styles.newsTicker}>
              <div className={styles.newsLabel}>What's New</div>
              <div className={styles.marqueeWrapper}>
                <div className={styles.marqueeText}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s...
                </div>
              </div>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default TopCarousel;