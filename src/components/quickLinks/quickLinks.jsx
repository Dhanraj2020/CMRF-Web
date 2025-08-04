import React from 'react'
import styles from "./quickLinks.module.scss";
import { QUICKLINKS_OPTIONS } from '../common/constant';
import { Col, Row } from 'react-bootstrap';
const QuickLinks = () => {
  return (
    <div className={styles.quickLinksSection}>
      <Row>
        {QUICKLINKS_OPTIONS.map((item, index) => (
          <Col key={index} className="border-start py-4">
            <div className="d-flex align-items-center flex-column h-100">
              <img src={item.quickLinkIconSrc} alt={item.label} className="img-fluid" />
              <label className={styles.labelText + " " + "mt-auto"}>{item.label}</label>
            </div>
          </Col>
        ))}
      </Row>
    </div >
  )
}

export default QuickLinks;