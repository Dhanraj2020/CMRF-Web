import React from 'react'
import { SubHeadingH4 } from '../../common/common'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'
import { SUSTAINABLE_DEVELOPMENT_GOALS } from '../common/constant'
import styles from "./sustainableDevelopmentGoal.module.scss";
const SustainableDevelopmentGoal = () => {
  return (
    <section className={styles.sustainableDevelopmentGoal + " " + "p-md-4"}>
      <div className={styles.sustainableDevelopmentGoalInnerBox + " " + "p-md-4 pb-md-5"}>
        <SubHeadingH4 header="Sustainable Development Goals" className={styles.heading + " " + "text-center"} />
        <p className={styles.subTitle}>Transforming Lives through Sustainable Solutions.</p>
        <Container fluid>
          <Row>
            {SUSTAINABLE_DEVELOPMENT_GOALS && SUSTAINABLE_DEVELOPMENT_GOALS.map((item, i) => {
              return (
                <Col xl={3} lg={4} md={6} key={i} className="mb-3">
                  <Card className={styles.sustainableDevelopmentGoalsCard + " " + `sustainableDevelopmetGoalCard border-0 h-100 goalCard${i + 1}`} >
                    <div className={styles.goalType}>
                      <div className={styles.goalTypeBox}>
                        <Card.Img src={`/assets/images/home/goalBg${i + 1}.svg`} alt={`Goal ${i + 1}`} className={styles.cardImg} />
                        <div className={styles.goalInfo}>
                          <Card.Title className={styles.cardTitle}>Goal</Card.Title>
                          <div className="d-flex align-items-center">
                            <span className={styles.goalTypeNumber}>{item.goal}</span>
                            <span className={styles.goalName}>{item.name}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Card.Body className="d-flex flex-column p-0">
                      <div className="d-flex flex-column h-100">
                        <Card.Text className={styles.cardText + " " + "mb-0"}>
                          {item.desp}
                        </Card.Text>
                        <div className={styles.goalInfoBox}>
                          <div>
                            <div className="d-flex justify-content-start align-items-center mb-3">
                              <div>
                                <div className={styles.count}>{item.targets}</div>
                                <div className={styles.label}>Targets</div>
                              </div>
                              <div className="ms-auto me-5">
                                <div className={styles.count}>{item.events}</div>
                                <div className={styles.label}>Events</div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center">
                              <div className="mb-2">
                                <div className={styles.count}>{item.publications}</div>
                                <div className={styles.label}>Publications</div>
                              </div>
                              <div className="ms-auto me-5">
                                <div className={styles.count}>{item.actions}</div>
                                <div className={styles.label}>Actions</div>
                              </div>
                            </div>
                          </div>
                          <div className="text-center mt-auto">
                            <Button variant="link" className={styles.viewMoreLink + " " + "text-center"}>
                              <BsArrowRight /> <span className="me-2">read more..</span></Button>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </section >
  )
}

export default SustainableDevelopmentGoal