import React from 'react'
import { SubHeadingH4 } from '../../common/common'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { BsArrowRight } from "react-icons/bs";
import { OPERATING_MODEL_PROPOSED } from '../common/constant';
import styles from "./operatingModalPurpose.module.scss";
const OperatingModalPurpose = () => {
  return (
    <section className={styles.operatingModalPurpose}>
      <div className={styles.operatingModalPurposeInnerBox + " " + "p-md-4 pb-md-5"}>
        <SubHeadingH4 header="Operating Model Proposed" className={styles.heading + " " + "text-center"} />
        <p className={styles.subTitle}>Our operating model is designed to drive efficiency, foster innovation, and ensure excellence in every aspect of our operations.</p>
        <Container>
          <Row>
            {OPERATING_MODEL_PROPOSED && OPERATING_MODEL_PROPOSED.map((item, i) => {
              return (
                <Col md={3} key={i} className="mb-3">
                  <Card className={`${styles.operatingModalCard} h-100 card${i + 1} operatingCard`}>
                    <Card.Body className={styles.cardBody + " " + "d-flex flex-column"}>
                      <div>
                        <Card.Title className={styles.cardTitle}>{item && item.model}</Card.Title>
                        <Card.Text className={styles.cardText}>
                          {item && item.desp}
                        </Card.Text>
                      </div>
                      <div className="text-center mt-auto">
                        <Card.Img src={`/assets/images/home/operatingModalPurposeIcon-${i + 1}.svg`} className={styles.cardImg} />
                        <Button variant="link" className={styles.viewMoreLink + " " + "text-center"}><BsArrowRight /> view more..</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default OperatingModalPurpose