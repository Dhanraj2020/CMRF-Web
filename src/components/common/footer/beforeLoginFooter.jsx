import { Col, Container, Row } from "react-bootstrap"
import styles from "./beforeLoginFooter.module.scss";
const BeforeLoginFooter = () => {
  return (
    <footer>
      <div className={styles.footerNavigationMenus}>
        <Container>
          <Row>
            <Col md={12}>
              <div className="d-flex justify-content-center align-items-center mt-lg-4 mt-3 gap-3">
                <a href="#" aria-label="Visit our Twitter profile" title="x-twitter" target="_blank" rel="noopener noreferrer" className="pe-none"><img src="/assets/images/xTwitter-icon.svg" alt="x-Twitter" className="img-fluid" /></a>

                <a href="#" aria-label="Visit our Facebook profile" title="facebook" target="_blank" rel="noopener noreferrer" className="pe-none"><img src="/assets/images/facebook-icon.svg" alt="facebook" className="img-fluid" /></a>

                <a href="#" aria-label="Visit our Instagram profile" title="instagram" target="_blank" rel="noopener noreferrer" className="pe-none"><img src="/assets/images/instagram-icon.svg" alt="instagram" className="img-fluid" /></a>

                <a href="#" aria-label="Visit our Youtube profile" title="Youtube" target="_blank" rel="noopener noreferrer" className="pe-none"><img src="/assets/images/youtube-icon.svg" alt="Youtube" className="img-fluid" /></a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className={styles.footerLinks + " " + "d-flex justify-content-center align-items-center pt-lg-4 pb-3"}>
                <a href="#" title="Privacy Policy">Privacy Policy</a>
                <a href="#" title="Term & Conditions">Term & Conditions</a>
                <a href="#" title="Copyright Policy">Copyright Policy</a>
                <a href="#" title="Hyperlinking Policy">Hyperlinking Policy</a>
                <a href="#" title="Disclaimer">Disclaimer</a>
                <a href="#" title="Accessibility Statement">Accessibility Statement</a>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="px-0">
              <p className={styles.footerNote + " " + "text-center mb-4"}>
                © 2015 This is the official website of Government of Maharashtra. All Rights Reserved. <br />Developed by National Informatics Centre, Maharashtra State Unit, Mumbai
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default BeforeLoginFooter