import styles from "./stickyWorkStation.module.scss";

const StickyWorkStation = () => {
  return (
    <div className={styles.stickyWorkStationSection}>
      <ul className="list-unstyled">
        <li className={styles.workStation + " " + "d-flex justify-content-center align-items-center mb-2"}>W1</li>
        <li className={styles.workStation + " " + "d-flex justify-content-center align-items-center mb-2"}>W2</li>
        <li className={styles.workStation + " " + "d-flex justify-content-center align-items-center mb-2"}>W3</li>
        <li className={styles.workStation + " " + "d-flex justify-content-center align-items-center mb-2"}>W4</li>
        <li className={styles.workStation + " " + "d-flex justify-content-center align-items-center mb-2"}>W5</li>
      </ul>
    </div>
  )
}

export default StickyWorkStation;