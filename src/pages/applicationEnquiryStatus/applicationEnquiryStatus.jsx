import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import styles from "./applicationEnquiryStatus.module.scss";
const ApplicationEnquiryStatus = () => {
  return (
    <section className={styles.applicationEnquirySection}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.applicationForm}>
              <h1>Application Enquiry</h1>
              <div>Fields marked with * are mandatory</div>
              <Form className="mt-4">
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Reference Number" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </FormGroup>
                <FormGroup className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Mobile No.*</Form.Label>
                  <Form.Control type="email" placeholder="Mobile Number" />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default ApplicationEnquiryStatus;