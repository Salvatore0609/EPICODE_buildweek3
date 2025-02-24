import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import "../components/TopBar.css";
const TopBar = () => {
  return (
    <Navbar /* expand="lg"  */ className="bg-white">
      <Container fluid>
        <Navbar.Brand href="#" className="nav-brand">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            className="mercado-match"
            width="45"
            height="45"
            focusable="false"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg> */}
          <img
            src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo.png"
            alt="logo"
            width="60"
            height="60"
          />
        </Navbar.Brand>
        <Form className="d-flex input-zone">
          <Form.Control type="search" placeholder="Cerca" className="me-2 Cerca" aria-label="Search" />
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Link href="#action1" className="d-flex flex-column mx-3">
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
            </Nav.Link>
            <Nav.Link href="#" className="d-flex flex-column mx-3">
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
            <Nav.Link href="#" className="d-flex flex-column mx-3">
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
            <Nav.Link href="#" className="d-flex flex-column mx-3">
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
            <Nav.Link href="#" className="d-flex flex-column mx-3">
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
            <NavDropdown title="Tu" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#">
                <Button variant="outline-primary">Visualizza profilo</Button>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Button variant="primary">Verifica</Button>
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
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
                <h6>Gestisci</h6>

                <p>
                  <a href="#" className="underline">
                    Post e attività
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
            </NavDropdown>
            <Nav.Link href="#" className="d-flex flex-column mx-3">
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
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
              </svg>
              <NavDropdown title="Per le aziende" id="navbarScrollingDropdown">
                <Row className="gap-4 p-4">
                  <Col md={6}>
                    <NavDropdown.Item className="" style={{ width: "600px" }}>
                      <h5>Le mie app</h5>
                      <p className="fw-medium">Trova Lead</p>
                      <p className="fw-medium">Gruppi</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item style={{ width: "600px" }}>
                      <p className="text-secondary fw-medium">Talent</p>
                      <p>Talent Insight</p>
                      <p>Pubblica un&apos;offerta di lavoro</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <p className="text-secondary fw-medium">Vendite</p>
                      <p>Marketplace dei servizi</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <p className="text-secondary fw-medium">Marketing</p>
                      <p>Publicizza</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <p className="text-secondary fw-medium">Learning</p>
                      <p>Learning</p>
                    </NavDropdown.Item>
                  </Col>
                  <Col md={6}>
                    <NavDropdown.Item>
                      <h5>Le mie app</h5>
                      <p className="fw-medium">Trova Lead</p>
                      <p className="fw-medium">Gruppi</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <p className="text-secondary fw-medium">Talent</p>
                      <p>Talent Insight</p>
                      <p>Pubblica un&apos;offerta di lavoro</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <p className="text-secondary fw-medium">Vendite</p>
                      <p>Marketplace dei servizi</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <p className="text-secondary fw-medium">Marketing</p>
                      <p>Publicizza</p>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <p className="text-secondary fw-medium">Learning</p>
                      <p>Learning</p>
                    </NavDropdown.Item>
                  </Col>
                </Row>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
