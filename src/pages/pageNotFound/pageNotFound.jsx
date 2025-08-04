import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
const PageNotFound = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col md={12}>
            <div>
              <h1>PageNotFound</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  )
}

export default memo(PageNotFound);