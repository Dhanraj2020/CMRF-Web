import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { SelectFieldMan } from '../../../common/selectFieldMan';
import { LANGUAGES_OPTIONS } from '../constant.js';
import { MenuItemWithKeyValueId } from '../menuItem.jsx';
import styles from "./beforeLoginHeader.module.scss";
const BeforeLoginHeader = () => {
  return (
    <div className={styles.beforeLoginHeader}>
      <div className={styles.topHeader + " " + "ms-auto"}>
        <div className="d-flex justify-content-between align-items-center ms-auto my-2">
          <div className="d-flex">
            <img src="/assets/images/emblem-icon.svg" alt='emblem icon' className='img-fluid' />
            <img src="/assets/images/mh-logo-icon.svg" alt='emblem icon' className='img-fluid' />
          </div>
          <div className="brandLogo">
            <div>Chief Minister's <span>Relief Fund</span></div>
            <div>Government of Maharashtra</div>
          </div>
          <div className={styles.textSize + " " + "d-inline-flex align-items-center"}>
            <span>Text Size:</span>
            <a href="#" title="-A">-A</a>
            <a href="#" title="A">A</a>
            <a href="#" title="A+">A+</a>
          </div>
          <div className={styles.changeLanguageOpt + " " + "d-flex align-items-center"}>
            <SelectFieldMan
              label="Change Language:"
              name="lang"
              // error={errors}
              // value={account.stateId || null}
              // onChange={onChangeState}
              disabled={false}
              dataarray={MenuItemWithKeyValueId(LANGUAGES_OPTIONS, 'langID', 'langName')}
            />
          </div>
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
                <img
                  src="assets/images/smjsnLogo.svg"
                  className="d-inline-block align-top img-fluid"
                  alt="SMJSN Logo"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-0">
              <Nav className={styles.dropDownMenu + " " + "align-items-lg-center flex-grow-1"}>
                <Nav.Link href="#home" active className={styles.menuLink}>Home</Nav.Link>
                <Nav.Link href="#about" className={styles.menuLink}>Important<br />
                  Resolutions</Nav.Link>
                <Nav.Link href="#programs" className={styles.menuLink}>Reports</Nav.Link>
                <Nav.Link href="#stories" className={styles.menuLink}>Hospital</Nav.Link>
                <Nav.Link href="#newsAndEvents" className={styles.menuLink}>RTI</Nav.Link>
                <Nav.Link href="#getInvolved" className={styles.menuLink}>FAQ</Nav.Link>
                <Nav.Link href="#contactUs" className={styles.menuLink}>Contact Us</Nav.Link>
                <Nav.Link href="#contactUs" className={styles.menuLink}>Criteria and <br />Eligiblity</Nav.Link>
                <Nav.Link href="#contactUs" className={styles.menuLink}>Application <br />Status Enquiry
                </Nav.Link>
              </Nav>
              <div className={styles.btnBox + " " + "d-flex ms-auto my-2 gap-3"}>
                <a href="#" title="sitemap" target="_blank"><img src="/assets/images/sitemap-icon.svg" className="img-fluid" alt="sitemap" /></a>
                <a href="#" title="sitemap" target="_blank"><img src="/assets/images/search-box-icon.svg" className="img-fluid" alt="sitemap" /></a>
                <Button variant="warning" className={styles.topHeaderBtn + " " + "btnOrange"}>Donate Now</Button>
                <Button variant="warning" className={styles.topHeaderBtn + " " + "btnOrange"}>Login</Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div >
  )
}

export default BeforeLoginHeader;