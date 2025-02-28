import { useState } from "react";
import { Button, Card, Col, Collapse, Container, Dropdown, Image, ListGroup, Row } from "react-bootstrap";
import {
  BookmarkFill,
  Calendar,
  ChevronCompactDown,
  ChevronCompactRight,
  ChevronCompactUp,
  InfoSquareFill,
  Newspaper,
  PeopleFill,
  PersonFillAdd,
  WalletFill,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreatePost from "./HomePage/CreatePost";

const Homepage = () => {
  const profile = useSelector((state) => state.profile);
  const [open, setOpen] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  const handleLinkClick = (e) => {
    setClickedLink(e.target.href);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={2}>
          <Card>
            <div className="position-relative">
              <Card.Img
                className="background-image rounded-0"
                variant="top"
                src="https://media.licdn.com/dms/image/v2/C5616AQFyq0OEeeELiA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1618202768321?e=1746057600&v=beta&t=orOlXEWuHIHD_jLQQq9usupmfqP6369kcOvCVO0HRyo"
                style={{ height: 80 }}
              />

              <div className="profile-image-container position-absolute top-100 start-0 translate-middle ps-5">
                <Image
                  fluid
                  src={profile.image}
                  alt="Profilo"
                  className="rounded-circle border border-light border-2 ms-5"
                  width="70px"
                  height="70px"
                />
              </div>
            </div>

            <Card.Body className="mt-3">
              <Card.Title className="me-3">
                {profile.name} {profile.surname}
              </Card.Title>

              <p className="m-0">{profile.title}</p>

              <Card.Text>
                <p>{profile.bio}</p>
                <p>{profile.area}</p>
                <div className="d-flex">
                  <Image src="" alt="logo azienda" width="30px" height="30px"></Image>
                  <p className="ms-2">EPICODE</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>

          <div className="mt-3 ">
            <div className="text-center">
              {open === false ? (
                <Button
                  variant="transparent"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Vedi altro <ChevronCompactDown className="fs-6" />
                </Button>
              ) : (
                <Button
                  variant="transparent"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Meno dettagli <ChevronCompactUp className="fs-6" />
                </Button>
              )}
            </div>

            <Collapse in={open}>
              <div id="example-collapse-text">
                <div className="bg-white border border-secondary-subtle mb-2 p-2 rounded-3">
                  <h6>Visualizza tutte le analisi</h6>
                  <a href="#">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6 className="text-dark m-0">Collegamenti</h6>
                        <p>Espandi la tua rete</p>
                      </div>

                      <PersonFillAdd className="m-1 text-dark" />
                    </div>
                  </a>
                </div>
                <a href="#">
                  <div className="bg-white border border-secondary-subtle mb-2 p-2 rounded-3">
                    <p className="m-0">Accedi a strumenti e informazioni in esclusiva</p>
                    <h6 className="text-dark">
                      <WalletFill /> Prova premium per 0EUR
                    </h6>
                  </div>
                </a>
                <div className="bg-white border border-secondary-subtle mb-2 p-2 rounded-3">
                  <a href="#">
                    <p className="text-dark fw-semibold mb-2">
                      <BookmarkFill className="mb-1 me-2" /> Elementi salvati
                    </p>
                  </a>
                  <a href="#">
                    <p className="text-dark fw-semibold mb-2">
                      <PeopleFill className="mb-1 me-2" /> Gruppi
                    </p>
                  </a>
                  <a href="#">
                    <p className="text-dark fw-semibold mb-2">
                      <Newspaper className="mb-1 me-2" /> Newsletter
                    </p>
                  </a>
                  <a href="#">
                    <p className="text-dark fw-semibold mb-2">
                      <Calendar className="mb-1 me-2" />
                      Eventi
                    </p>
                  </a>
                </div>
              </div>
            </Collapse>
          </div>
        </Col>

        <Col md={6}>
          {/* CREATE POST WINDOW */}

          <CreatePost />
        </Col>

        <Col md={4}>
          <div className="bg-white border border-secondary-subtle mb-2 py-3 px-2 rounded-3">
            <div className="d-flex justify-content-between">
              <h5>LinkedIn Notizie</h5>
              <InfoSquareFill />
            </div>
            <div>
              <h6 className="text-secondary">Storie principali</h6>
              <ListGroup>
                <ListGroup.Item className="border-0 p-0">
                  <h6 className="mb-1">Roma ospita la COP16 bis</h6>
                  <p>1 giorno fa &#8226; 298 lettori</p>
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div>
              <a href="https://www.linkedin.com/games/tango/" target="_blank">
                <h6>I giochi di oggi</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Image src="https://static.licdn.com/aero-v1/sc/h/im5l00imv9odauybfemlfxm6" alt="gioco"></Image>
                    <div className="ms-2">
                      <h6 className="mb-0 text-dark">Tango</h6>
                      <p className="m-0">Armonizza la griglia</p>
                    </div>
                  </div>
                  <ChevronCompactRight className="text-dark fs-5" />
                </div>
              </a>
              <a href="https://www.linkedin.com/games/tango/" target="_blank">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <Image src="https://static.licdn.com/aero-v1/sc/h/25itbd3dpc6ockbgvdhot9qp1" alt="gioco"></Image>
                    <div className="ms-2">
                      <h6 className="mb-0 text-dark">Queens</h6>
                      <p className="m-0">Incorona ogni regione</p>
                    </div>
                  </div>
                  <ChevronCompactRight className="text-dark fs-5" />
                </div>
              </a>
            </div>
          </div>
          <a href="#">
            <div className="py-3 d-flex align-items-center bg-white border border-secondary-subtle mb-2 p-2 rounded-3">
              <p className="bg-warning mb-0 px-1 rounded">SUGGERIMENTO</p>
              <p className="text-secondary mb-0 ms-3">Prova Linkedln sull &#38;app per Windows</p>
            </div>
          </a>

          <div className="mt-4">
            <ul className="d-flex flex-wrap align-items-center justify-content-center">
              <li className="me-4 no-dots">
                <a
                  tabIndex="0"
                  target="_blank"
                  href="https://about.linkedin.com/it-it"
                  className={`global-footer__link  ${
                    clickedLink === "https://about.linkedin.com/it-it" ? "clicked-link" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Informazioni
                </a>
              </li>
              <li className="me-4 no-dots">
                <a
                  tabIndex="0"
                  target="_blank"
                  href="https://www.linkedin.com/accessibility"
                  className={`global-footer__link  ${
                    clickedLink === "https://www.linkedin.com/accessibility" ? "clicked-link" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Accessibilità
                </a>
              </li>
              <li className="me-4 no-dots">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
                  className={`global-footer__link  ${
                    clickedLink === "https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
                      ? "clicked-link"
                      : ""
                  }`}
                  aria-label="Domande? Visita il nostro Centro assistenza."
                  onClick={handleLinkClick}
                >
                  Centro assistenza
                </a>
              </li>
              <li className="me-4 no-dots">
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="global-footer__link  p-0">
                    Privacy e condizioni
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://www.linkedin.com/legal/privacy-policy" onClick={handleLinkClick}>
                      Informativa sulla Privacy
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.linkedin.com/legal/user-agreement" onClick={handleLinkClick}>
                      Contratto di licenza
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://it.linkedin.com/legal/l/linkedin-pages-terms?"
                      onClick={handleLinkClick}
                    >
                      Termini e condizioni delle pagine
                    </Dropdown.Item>
                    <Dropdown.Item href="https://it.linkedin.com/legal/cookie-policy?" onClick={handleLinkClick}>
                      Informativa sui cookie
                    </Dropdown.Item>
                    <Dropdown.Item href="https://it.linkedin.com/legal/copyright-policy?" onClick={handleLinkClick}>
                      Informativa sul copyright
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://it.linkedin.com/legal/california-privacy-disclosure?"
                      onClick={handleLinkClick}
                    >
                      Opzioni relative all Informativa sulla privacy (Stato della California)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="me-4 no-dots">
                <a
                  tabIndex="0"
                  target="_blank"
                  href="https://www.linkedin.com/help/linkedin/answer/62931?lang=it"
                  className={`global-footer__link  ${
                    clickedLink === "https://www.linkedin.com/help/linkedin/answer/62931?lang=it" ? "clicked-link" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  Opzioni per gli annunci pubblicitari
                </a>
              </li>
              <li className="me-4 no-dots">
                <a
                  target="_blank"
                  href="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart/"
                  className={`global-footer__link  ${
                    clickedLink ===
                    "https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart/"
                      ? "clicked-link"
                      : ""
                  }`}
                  aria-label="Gestisci il tuo account e la tua privacy Vai alle impostazioni"
                  onClick={handleLinkClick}
                >
                  Pubblicità
                </a>
              </li>
              <li className="me-4 no-dots">
                <Dropdown>
                  <Dropdown.Toggle variant="link" className="global-footer__link  p-0">
                    Servizi alle aziende
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://www.linkedin.com/legal/privacy-policy" onClick={handleLinkClick}>
                      Informativa sulla Privacy
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.linkedin.com/legal/user-agreement" onClick={handleLinkClick}>
                      Contratto di licenza
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://it.linkedin.com/legal/l/linkedin-pages-terms?"
                      onClick={handleLinkClick}
                    >
                      Termini e condizioni delle pagine
                    </Dropdown.Item>
                    <Dropdown.Item href="https://it.linkedin.com/legal/cookie-policy?" onClick={handleLinkClick}>
                      Informativa sui cookie
                    </Dropdown.Item>
                    <Dropdown.Item href="https://it.linkedin.com/legal/copyright-policy?" onClick={handleLinkClick}>
                      Informativa sul copyright
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://it.linkedin.com/legal/california-privacy-disclosure?"
                      onClick={handleLinkClick}
                    >
                      Opzioni relative all Informativa sulla privacy (Stato della California)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li className="me-4 no-dots">
                <a
                  target="_blank"
                  href="#"
                  className={`global-footer__link  ${clickedLink === "#" ? "clicked-link" : ""}`}
                  aria-label="Gestisci il tuo account e la tua privacy Vai alle impostazioni"
                  onClick={handleLinkClick}
                >
                  Scarica l&#38;app LinkedIn
                </a>
              </li>
              <li className="me-4 no-dots">
                <a
                  target="_blank"
                  href="#"
                  className={`global-footer__link  ${clickedLink === "#" ? "clicked-link" : ""}`}
                  aria-label="Gestisci il tuo account e la tua privacy Vai alle impostazioni"
                  onClick={handleLinkClick}
                >
                  Altro
                </a>
              </li>
            </ul>
            <div className="d-flex justify-content-center">
              <Image src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="logo LinkedIn" />
              <p className="mb-0 ms-1">LinkedIn Corporation © 2025</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
