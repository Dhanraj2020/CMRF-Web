import { Button, Col, Container, Row } from 'react-bootstrap';
import EventCarousel from '../common/eventCarousel/eventCarousel';
import styles from "./aboutSection.module.scss";
const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <Container fluid>
        <Row>
          <Col md={7}>
            <Row>
              <Col md={6}>
                <div className="d-flex flex-column mb-5">
                  <div className='d-flex flex-column h-100'>
                    <div className={styles.paraText + " " + 'mb-4'}>
                      <h1 className={styles.heading}>About CMRF</h1>
                      <p>Welcome to the Chief Minister’s Relief<br />
                        Fund, Maharashtra The Chief Minister’s<br />
                        Relief Fund aims to provide immediate<br />
                        relief to people in distress within the<br />
                        State of Maharashtra, as well as in the
                        country...</p>
                    </div>
                    <div className='mt-auto'>
                      <Button variant="warning" className="btnOrange">Read more</Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <img
                  src="/assets/images/home/devendra-fadnavis-sir.svg"
                  className={styles.cmImg1 + " " + "img-fluid"}
                  alt="Devendra Fadnavis"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={styles.countCard + " " + "d-flex justify-content-center align-items-center flex-column"}>
                  <p className={styles.labelText}>Total Donations Received</p>
                  <p className={styles.valueText}>2371+</p>
                </div>
              </Col>
              <Col>
                <div className="card border-0">
                  <img src="/assets/images/home/cmrf-qr.svg" className="img-fluid" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row className="mb-3">
              <Col>
                <div className={styles.countCard + " " + styles.creamBgCard + " " + "d-flex justify-content-center align-items-center flex-column "}>
                  <p className={styles.labelText}>Total Money Spent</p>
                  <p className={styles.valueText}>1204+</p>
                </div>
              </Col>
              <Col>
                <div className={styles.countCard + " " + styles.lightBlueBgCard + " " + "d-flex justify-content-center align-items-center flex-column"}>
                  <p className={styles.labelText}>Beneficiaries Helped</p>
                  <p className={styles.valueText}>2371+</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={styles.orangeBgCard + " " + "h-100 p-4 rounded"}>
                  <h2 className={styles.heading}>Events</h2>
                  <EventCarousel />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    </section >
  )
}

export default AboutSection