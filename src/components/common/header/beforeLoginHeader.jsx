import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { SelectFieldMan } from '../../../common/selectFieldMan';
import { LANGUAGES_OPTIONS } from '../constant.js';
import { MenuItemWithKeyValueId } from '../menuItem.jsx';
import styles from "./beforeLoginHeader.module.scss";
const BeforeLoginHeader = () => {
  return (
    <div className={styles.beforeLoginHeader}>
      <div className={styles.topHeader + " " + "ms-auto"}>
        <div className="d-flex justify-content-between align-items-center ms-auto mb-2">
          <div className="d-flex">Subscribe Newsletter</div>
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
      <Navbar collapseOnSelect expand="lg">
        <Container fluid>
          <Navbar.Brand href="/" className="mx-lg-auto py-0">
            <img
              src="assets/images/smjsnLogo.svg"
              className="d-inline-block align-top img-fluid"
              alt="SMJSN Logo"
            />
          </Navbar.Brand>
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
              <Nav className={styles.dropDownMenu + " " + "ms-auto pt-lg-4 justify-content-end align-items-lg-center flex-grow-1"}>
                <Nav.Link href="#home" active className={styles.menuLink}>Home</Nav.Link>
                <Nav.Link href="#about" className={styles.menuLink}>About us</Nav.Link>
                <Nav.Link href="#programs" className={styles.menuLink}>Programs</Nav.Link>
                <Nav.Link href="#stories" className={styles.menuLink}>Stories</Nav.Link>
                <Nav.Link href="#newsAndEvents" className={styles.menuLink}>News & Events</Nav.Link>
                <Nav.Link href="#getInvolved" className={styles.menuLink}>Get Involved</Nav.Link>
                <Nav.Link href="#contactUs" className={styles.menuLink}>Contact Us</Nav.Link>
              </Nav>
              <div className="d-flex">
                <Button variant="warning" className="btnOrange mt-3 ms-auto">Donate</Button>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div >
  )
}

export default BeforeLoginHeader;