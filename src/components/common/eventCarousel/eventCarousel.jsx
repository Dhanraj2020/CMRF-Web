import { Carousel } from 'react-bootstrap';
import styles from "./eventCarousel.module.scss";
import StickyWorkStation from '../stickyWorkStation/stickyWorkStation';

const EventCarousel = () => {
  return (
    <section className={styles.eventCarouselSection + " " + "eventCarousel"}>
      <Carousel>
        <Carousel.Item className={styles.carouselItem}>
          <div>
            <img src="/assets/images/home/carouselImage.svg" alt="carousel-img1" className="img-fluid d-block w-100" />
          </div>
          <Carousel.Caption className={styles.carouselCaption + " " + "text-start"}>
            <h6 className={styles.captionHeading + " " + "mb-2"}>Lorem Ipsum</h6>
            <p className={styles.captionText + " " + "mb-0"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <div>
            <img src="/assets/images/home/carouselImage.svg" alt="carousel-img1" className="img-fluid d-block w-100" />
          </div>
          <Carousel.Caption className={styles.carouselCaption + " " + "text-start"}>
            <h6 className={styles.captionHeading + " " + "mb-2"}>Lorem Ipsum</h6>
            <p className={styles.captionText + " " + "mb-0"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
          <div>
            <img src="/assets/images/home/carouselImage.svg" alt="carousel-img1" className="img-fluid d-block w-100" />
          </div>
          <Carousel.Caption className={styles.carouselCaption + " " + "text-start"}>
            <h6 className={styles.captionHeading + " " + "mb-2"}>Lorem Ipsum</h6>
            <p className={styles.captionText + " " + "mb-0"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <StickyWorkStation />
    </section>
  )
}

export default EventCarousel