import { Col, Container, Row } from "react-bootstrap"
import styles from "./beforeLoginFooter.module.scss";
const BeforeLoginFooter = () => {
  return (
    <footer>
      <div className={styles.footerNavigationMenus}>
        <Container fluid>
          <Row>
            <Col md={6}>
              <div className="p-lg-4 py-md-4 py-3">
                <div className={styles.heading + " " + "text-uppercase text-start"}>Contact us</div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className={styles.addressBox}>
                    <p className="font-weight-bold mb-2">Registered office</p>
                    <div>
                      Bombay House, 24, Homi Mody Street,<br />
                      Mumbai 400 001, India<br />
                      +91 - 22 - 6665 8282<br />
                      +91 - 22 - 6665 8013<br />
                      talktous@smjsn.org
                    </div>
                  </div>
                  <div className={styles.addressBox}>
                    <p className="font-weight-bold mb-2">Support office</p>
                    <div>
                      World Trade Center-1, 26th floor,<br />
                      Cuffe Parade, Mumbai 400 005, India<br />
                      +91 - 22 - 6135 8282<br />
                      +91 - 22 - 6135 8369<br />
                      talktous@smjsn.org
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="p-lg-4 py-md-4 py-3">
              <div className={styles.heading + " " + "text-uppercase text-start"}>other links</div>
                <div className={styles.footerLinks + " " + "d-flex justify-content-between align-items-center"}>
                  <div>
                    <a href="/" title="Home">Home</a>
                    <a href="#" title="About Us">About Us</a>
                    <a href="#" title="News & Events">News & Events</a>
                    <a href="#" title="Get Involved">Get Involved</a>
                    <a href="#" title="Contact Us">Contact Us</a>
                  </div>
                  <div>
                    <a href="#" title="Impact Stories">Impact Stories</a>
                    <a href="#" title="Our Partners">Our Partners</a>
                    <a href="#" title="Copyright Policy">Copyright Policy</a>
                    <a href="#" title="Term & Conditions">Term & Conditions</a>
                    <a href="#" title="Help">Help</a>
                  </div>
                  <div>
                    <a href="#" title="Feedback">Feedback</a>
                    <a href="#" title="Disclaimer">Disclaimer</a>
                    <a href="#" title="Privacy Policy">Privacy Policy</a>
                    <a href="#" title="Sitemap">Sitemap</a>
                    <a href="#" title="Contact Us">Contact Us</a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="px-0">
              <p className={styles.footerNote +" " +"text-center mt-3 mb-0 p-4"}>
                © 2024 All Rights Reserved, Shri Madhav Jan Seva Nyas (SMJSN)
              </p>
            </Col>
          </Row>
        </Container>
      </div>

    </footer>
  )
}

export default BeforeLoginFooter