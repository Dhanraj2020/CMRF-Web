import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SubHeadingH4 } from '../../common/common'
import styles from "./backgroundPurpose.module.scss";
const BackgroundPurpose = () => {
  return (
    <section className={styles.backgroundPurposeSection}>
      <Container fluid>
        <Row>
          <Col md={5}>
            <div className="d-flex justify-content-lg-end justify-content-center align-items-center position-relative me-xl-4 flex-wrap">
              <img src="assets/images/home/centurionUniversityIcon.svg" alt="Centurion University Icon" className={styles.universityIcon + " " + "img-fluid "} />
              <img src="assets/images/home/smjsnIcon.svg" alt="SMJSN Icon" className="img-fluid" />
            </div>
          </Col>
          <Col md={7}>
            <div className={styles.purposeContent +" "+"p-md-4 p-0"}>
              <SubHeadingH4
                className={styles.heading +" "+"pb-2"}
                header="Background & Purpose"
              />
              <div className={styles.purposeContentBox}>
                <p><span className="fw-bold">Shri Madhav Jan Seva Nyas (SMJSN),</span> having its main campus at 6246+HJ8, Patti Kalyana, Samalkha, Haryana is desirous of establishing an Advanced Skill Development Center at its flagship campus with an overall vision of providing unemployed & unskilled youth with hands on, industry-oriented training, further education and placement opportunities that will help shape their careers and future through jobs and self-employment.</p>
                <p><span className="fw-bold">Centurion University of Technology & Management (CUTM),</span> a NAAC A+ accredited state enacted private university of Odisha established by state legislation (Orissa Act 4 of 2010), having its principal campus at Plot No.136/137 Ramchandrapur, Jatni, Khurda, Odisha and having developed extensive expertise in skill development & skill integrated higher education with the following credentials:
                </p>
                <ul>
                  <li>
                    UGC notified & NAAC A+ Grade accredited University and an innovation partner of National Skill Development Corporation.
                  </li>
                  <li>Gazette Notified as a Skills University of Odisha by Govt. of Odisha in 2017.</li>
                  <li>Gazette Notified as a Center of Excellence by the Ministry of Skill Development & Entrepreneurship, Govt. of India, and a partner of DGT, MSDE under Flexi MoU program for high employment potential courses.
                  </li>
                  <li>Accredited with Awarding body status National Council for Vocational Education & Training (NCVET) for assessing & certifying QP NOS-linked NSQF aligned skill courses.
                  </li>
                  <li>
                    Strong track record of training & placements having skilled over 500,000 youth through its social outreach, Gram Tarang and extensive industry partnerships with over 200 industry partners.
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BackgroundPurpose