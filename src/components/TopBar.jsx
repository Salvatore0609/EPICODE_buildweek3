import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import {
  BarChart,
  Bullseye,
  CardChecklist,
  CompassFill,
  // Grid3x3Gap,
  PeopleFill,
  PersonCheckFill,
  PlayBtnFill,
  Plus,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <Navbar className="bg-white MyNav " sticky="top">
        <Container className=" p-0  d-flex justify-content-around">
          <Navbar.Brand href="#" className="nav-brand me-0">
            <img
              src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
              alt="logo"
              width="60"
              height="60"
            />
          </Navbar.Brand>
          <Form className="d-flex input-zone position-relative">
            <Search className="search-icon position-absolute   translate-middle-y ms-3" />
            <Form.Control type="search" placeholder="Cerca" className="ps-5 Cerca" aria-label="Search" />
          </Form>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="w-100">
            <Nav className=" d-flex justify-content-around w-100">
              <Link
                to="/"
                className="d-flex flex-column justify-content-center nav-link
               "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                </svg>
                <a href="#" className="nav-paragraphs">
                  Home
                </a>
              </Link>
              <Nav.Link href="#" className="d-flex flex-column justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                <a href="#" className=" nav-paragraphs">
                  Rete
                </a>
              </Nav.Link>
              <Nav.Link href="#" className="d-flex flex-column justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                <a href="#" className=" nav-paragraphs">
                  Lavoro
                </a>
              </Nav.Link>
              <Nav.Link href="#" className="d-flex flex-column justify-content-center align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
                <a href="#" className=" nav-paragraphs ">
                  Messaggistica
                </a>
              </Nav.Link>
              <Nav.Link href="#" className="d-flex flex-column justify-content-center align-items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
                <a href="#" className=" nav-paragraphs">
                  Notifiche
                </a>
              </Nav.Link>

              <Nav.Link className="d-flex flex-column justify-content-center align-items-center p-0">
                <img
                  alt="profile pic"
                  width="24"
                  height="24"
                  className="rounded-circle"
                  src="https://plus.unsplash.com/premium_photo-1661333468805-e44347dbbf58?w=600&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyJTIwYW5nZXJ8ZW58MHx8MHx8fDA%3D"
                />
                <NavDropdown title="Tu" id="navbarScrollingDropdown" className="p-0" align="end">
                  <Row className="you-section">
                    <Col>
                      <NavDropdown.Item>
                        <Link to="/main-content">
                          <img
                            alt="profile pic"
                            width="55"
                            height="55"
                            className="rounded-circle"
                            src="https://plus.unsplash.com/premium_photo-1661333468805-e44347dbbf58?w=600&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyJTIwYW5nZXJ8ZW58MHx8MHx8fDA%3D"
                          />

                          <span className="fw-bold ms-2 ">Salvatore Desole</span>
                        </Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#">
                        <Link to="/main-content">
                          <Button variant="outline-primary rounded-5 px-3 pb-3 ">Visualizza profilo</Button>
                        </Link>
                        <Button variant="primary" className="ms-3 rounded-5 px-4 pb-3">
                          Verifica
                        </Button>
                      </NavDropdown.Item>

                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#">
                        <h6>Account</h6>
                        <p>
                          <a href="#" className="text-secondary fw-medium premium-text ">
                            Prova 1 mese di Premium per 0 EUR
                          </a>
                        </p>
                        <p>
                          <a href="#" className="underline">
                            Impostazioni e privacy
                          </a>
                        </p>
                        <p>
                          <a href="#" className="underline">
                            Guida
                          </a>
                        </p>
                        <p>
                          <a href="#" className="underline">
                            Lingua
                          </a>
                        </p>
                      </NavDropdown.Item>
                    </Col>

                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#">
                      <h6>Gestisci</h6>

                      <p>
                        <a href="#" className="underline">
                          Post e attivitÃ
                        </a>
                      </p>
                      <p>
                        <a href="#" className="underline">
                          Account per la pubblicazione di...
                        </a>
                      </p>
                      <p>
                        <a href="#" className="underline">
                          Esci
                        </a>
                      </p>
                    </NavDropdown.Item>
                  </Row>
                </NavDropdown>
              </Nav.Link>
              <Nav.Link href="#" className="d-flex flex-column justify-content-center align-items-center  ">
                {/* <Grid3x3Gap className="fs-5 " /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match fs-5 "
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>
                <NavDropdown title="Per le aziende" id="navbarScrollingDropdown" align="end">
                  <Row className="gap-4 d-flex large-nav ">
                    <Col md={5} className="ms-4 ">
                      <NavDropdown.Item
                        style={{
                          width: "650px",
                        }}
                      >
                        <h5>Le mie app</h5>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <p className="fw-medium  menu-items">
                          <CompassFill className="fs-4 me-3" />
                          Trova Lead
                        </p>
                        <p className="fw-medium menu-items ">
                          <PeopleFill className="fs-4 me-3" />
                          Gruppi
                        </p>
                      </NavDropdown.Item>

                      <NavDropdown.Item>
                        <p className="text-secondary fw-medium">Talent</p>

                        <p className="menu-items">
                          <BarChart className="fs-4 me-3" />
                          Talent Insight
                        </p>
                        <p className="menu-items">
                          <CardChecklist className="fs-4 me-3" />
                          Pubblica un&apos;offerta di lavoro
                        </p>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <p className="text-secondary fw-medium">Vendite</p>
                        <p className="menu-items">
                          {" "}
                          <PersonCheckFill className="fs-4 me-3" />
                          Marketplace dei servizi
                        </p>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <p className="text-secondary fw-medium">Marketing</p>
                        <p className="menu-items">
                          {" "}
                          <Bullseye className="fs-4 me-3" />
                          Publicizza
                        </p>
                      </NavDropdown.Item>
                      <NavDropdown.Item>
                        <p className="text-secondary fw-medium">Learning</p>

                        <p className="menu-items">
                          <PlayBtnFill className="fs-4 me-3" />
                          Learning
                        </p>
                      </NavDropdown.Item>
                    </Col>
                    <Col md={5} className="ms-4 ">
                      <NavDropdown.Item>
                        <h5>Scopri altro per il business</h5>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="menu-items">
                        <p className="fw-medium menu-item">Assumi su LinkedIn </p>
                        <p className=" menu-subtext">Trova, attrai e assumi</p>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="menu-items">
                        <p className="fw-medium menu-item">Vendi su LinkedIn</p>
                        <p className="menu-subtext">Sblocca nuove oppurtunitÃ di vendita</p>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="menu-items">
                        <p className="fw-medium menu-item">Offerta di lavoro gratuita</p>
                        <p className="menu-subtext">Ottieni rapidamente candidati qualificati</p>
                      </NavDropdown.Item>

                      <NavDropdown.Item className="menu-items">
                        <p className="fw-medium menu-item">Fai pubblicitÃ su LinkedIn</p>
                        <p className="menu-subtext">Acquisisci clienti e fai crescere la tua azienda</p>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="menu-items">
                        <p className="fw-medium menu-item">Inizia con premium</p>
                        <p className="menu-subtext">Amplia e sfrutta la tua rete</p>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="menu-items">
                        <p className="fw-medium menu-item">Impara con LinkedIn</p>
                        <p className="menu-subtext">Gestisci i dettagli di fatturazione e account</p>
                      </NavDropdown.Item>
                      <NavDropdown.Item className="menu-items">
                        <p className="fw-medium menu-item ">
                          Crea una pagina aziendale <Plus className="fs-4 " />
                        </p>
                      </NavDropdown.Item>
                    </Col>
                  </Row>
                </NavDropdown>
              </Nav.Link>

              <Nav.Link
                className="d-flex flex-column justify-content-center align-items-center "
                style={{ width: "200px" }}
              >
                <a href="#" className="premium-a text-center ">
                  Prova premium per 0 EUR
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
