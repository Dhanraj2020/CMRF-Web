import { Button, Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "./applicationEnquiryStatus.module.scss";
import { memo } from "react";
const ApplicationEnquiryStatus = () => {
  return (
    <section className={styles.applicationEnquirySection}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.applicationForm}>
              <h1 className={styles.formHeading}>Application Enquiry</h1>
              <div className={styles.labelText}>Fields marked with <span className="textRed">*</span> are mandatory</div>
              <Form className="mt-4">
                <FormGroup className="mb-3" controlId="formBasicReferenceNumber">
                  <Form.Label className={styles.labelText + " " + "text-dark"}>Application Reference Number <span className="textRed">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Reference Number" />
                  {/* <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicMobileNumber">
                  <Form.Label className={styles.labelText + " " + "text-dark"}>Mobile No.<span className="textRed">*</span></Form.Label>
                  <Form.Control type="text" placeholder="Mobile Number" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicCaptchCode">
                  <Form.Label className={styles.labelText + " " + "text-dark"}>Please enter the character as seen in the below box*<span className="textRed">*</span></Form.Label>

                  <div className="d-flex justify-content-center align-items-center">
                    <Form.Control type="text" placeholder="" className="rounded-start border-end-0 flex1" />
                    <a href="#" className={styles.repeatIconBox + " " + "py-2 border-1 border-secondary"}><img src="/assets/images/repeat-icon.svg" className="img-fluid" /></a>
                    <img src="/assets/images/captcha.svg" className="img-fluid rounded-end border-start-0" />
                  </div>
                </FormGroup>
                <div className="d-flex align-items-center gap-3">
                  <Button variant="outline-primary" className="flex-fill blueOutlineBtn h48">Clear</Button>
                  <Button variant="primary" className="btnBlue flex-fill h48">Submit</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default memo(ApplicationEnquiryStatus);