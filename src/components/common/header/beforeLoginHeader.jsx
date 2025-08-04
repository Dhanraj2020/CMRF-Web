import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import styles from "./beforeLoginHeader.module.scss";
const BeforeLoginHeader = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleToggle = () => {
    setShowOptions(prev => !prev);
  };
  const location = useLocation();
  const currentPath = location.pathname;
  console.log({ currentPath })
  const navMenuClassName = `${styles.menuLink}`;
  return (
    <div className={styles.beforeLoginHeader}>
      <div className={styles.topHeader + " " + "ms-auto"}>
        <div className="d-flex justify-content-between align-items-center my-2">
          <div className="d-flex align-items-center gap-2 ms-3">
            <img src="/assets/images/emblem-icon.svg" alt='emblem icon' className='img-fluid' />
            <img src="/assets/images/mh-logo-icon.svg" alt='emblem icon' className='img-fluid' />
          </div>
          <div className={styles.brandLogoBox}>
            <div className={styles.brandLogo}>Chief Minister's <span className={styles.relifFund}>Relief Fund</span></div>
            <div className={styles.mhGov}>Government of Maharashtra</div>
          </div>
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center gap-3">
              <Button variant="primary" className="btnBlue">
                <div className="d-flex justify-content-center align-items-center gap-2">
                  <span>मराठी </span>
                  <img src="/assets/images/refresh-icon.svg" className="img-fluid" />
                </div>
              </Button>
              <div className="d-flex align-items-center gap-3 position-relative">
                <Button className={styles.textSizeBtn} onClick={handleToggle}>A</Button>
                {/* A+ and A- section */}
                {showOptions && (
                  <div className={styles.btnOptBox}>
                    <button>A+</button>
                    <button>A−</button>
                  </div>
                )}
              </div>
              <Form className="toggleSwitchBtn d-flex align-items-center">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                // label="Check this switch"
                />
              </Form>
            </div>
            <div className={styles.callToBtn + " " + "d-flex align-items-center gap-2"}>
              <img src="/assets/images/phone-call-icon.svg" className="img-fluid" />

              <div className="d-flex flex-column">
                <div className={styles.tollFreeNo}>Toll Free Number</div>
                <div className={styles.phNo}>+91- 3678-7890</div>
              </div>
            </div>
          </div>
          {/* <div className={styles.textSize + " " + "d-inline-flex align-items-center"}>
            <span>Text Size:</span>
            <a href="#" title="-A">-A</a>
            <a href="#" title="A">A</a>
            <a href="#" title="A+">A+</a>
          </div> */}
          {/* <div className={styles.changeLanguageOpt + " " + "d-flex align-items-center"}>
            <SelectFieldMan
              label="Change Language:"
              name="lang"
              // error={errors}
              // value={account.stateId || null}
              // onChange={onChangeState}
              disabled={false}
              dataarray={MenuItemWithKeyValueId(LANGUAGES_OPTIONS, 'langID', 'langName')}
            />
          </div> */}
        </div>
      </div>
      <Navbar collapseOnSelect expand="lg" className="py-0">
        <Container fluid className={styles.topHeaderMenu}>
          {/* <Navbar.Brand href="/" className="mx-lg-auto py-0">
            <img
              src="assets/images/smjsnLogo.svg"
              className="d-inline-block align-top img-fluid"
              alt="SMJSN Logo"
            />
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="start"
            className="topHeaderOffcanvasMenus"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                <div className={styles.beforeLoginHeader + " " + "d-flex"}>
                  <div className="d-flex align-items-center gap-2">
                    <img src="/assets/images/emblem-icon.svg" alt='emblem icon' className='img-fluid' />
                    <img src="/assets/images/mh-logo-icon.svg" alt='emblem icon' className='img-fluid' />
                  </div>
                  <div className={styles.brandLogoBox}>
                    <div className={styles.brandLogo}>Chief Minister's <span className={styles.relifFund}>Relief Fund</span></div>
                    <div className={styles.mhGov}>Government of Maharashtra</div>
                  </div>
                </div>
                {/* <img
                  src="assets/images/smjsnLogo.svg"
                  className="d-inline-block align-top img-fluid"
                  alt="SMJSN Logo"
                /> */}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <Nav className={styles.dropDownMenu + " " + "align-items-lg-center flex-grow-1"}>
                <Nav.Link href="/" className={(currentPath === "/") ? `${navMenuClassName} active` : navMenuClassName} >Home</Nav.Link>
                <Nav.Link href="about" className={navMenuClassName} style={{ pointerEvents: 'none' }}>Important<br />
                  Resolutions</Nav.Link>
                <Nav.Link href="#programs" className={navMenuClassName} style={{ pointerEvents: 'none' }}>Reports</Nav.Link>
                <Nav.Link href="#stories" className={navMenuClassName} style={{ pointerEvents: 'none' }}>Hospital</Nav.Link>
                <Nav.Link href="#newsAndEvents" className={navMenuClassName} style={{ pointerEvents: 'none' }}>RTI</Nav.Link>
                <Nav.Link href="#getInvolved" className={navMenuClassName} style={{ pointerEvents: 'none' }}>FAQ</Nav.Link>
                <Nav.Link href="#contactUs" className={navMenuClassName} style={{ pointerEvents: 'none' }}>Contact Us</Nav.Link>
                <Nav.Link href="#criteriaAndEligibility" className={navMenuClassName} style={{ pointerEvents: 'none' }}>Criteria and <br />Eligiblity</Nav.Link>
                <Nav.Link href="/application-status-enquiry" className={(currentPath === "/application-status-enquiry") ? `${navMenuClassName} active` : navMenuClassName}>Application <br />Status Enquiry
                </Nav.Link>
              </Nav>
              <div className={styles.btnBox + " " + "d-flex ms-auto my-2 gap-3"}>
                <a href="#" title="sitemap" target="_blank"><img src="/assets/images/sitemap-icon.svg" className="img-fluid" alt="sitemap" /></a>
                <a href="#" title="sitemap" target="_blank"><img src="/assets/images/search-box-icon.svg" className="img-fluid" alt="sitemap" /></a>
                <Button variant="warning" className={styles.topHeaderBtn + " " + "btnOrange pe-none"}>Donate Now</Button>
                <Button variant="warning" className={styles.topHeaderBtn + " " + "btnOrange pe-none"}>Login <img src="/assets/images/user-icon.svg" className={styles.userIcon + " " + "img-fluid"} /></Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div >
  )
}

export default BeforeLoginHeader;