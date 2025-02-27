import { useState } from "react";
import { Button, Card, Col, Collapse, Container, Dropdown, Form, Image, ListGroup, Row } from "react-bootstrap";
import {
  BlockquoteLeft,
  BookmarkFill,
  Calendar,
  CardImage,
  ChatText,
  ChevronCompactDown,
  ChevronCompactRight,
  ChevronCompactUp,
  GlobeEuropeAfrica,
  HandThumbsUp,
  InfoSquareFill,
  Newspaper,
  PeopleFill,
  PersonFillAdd,
  SendFill,
  Shuffle,
  WalletFill,
  Youtube,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
          <div className="py-3   bg-white border border-secondary-subtle mb-2  rounded-3">
            <div className="mb-2">
              <Image
                alt="Profilo"
                width="50px"
                height="50px"
                className="rounded-circle border border-light border-2 ms-2 img-fluid"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              />
              <Button
                className="rounded-pill d-inline-block border-secondary ms-2 text-start fw-semibold"
                style={{ width: "75%" }}
                variant="light"
              >
                Crea un post
              </Button>
            </div>
            <div className="d-flex justify-content-around align-items-center text-dark ">
              <Form>
                <Form.Group controlId="formFile" className="mb-0">
                  <Form.Label htmlFor="file-upload" className="custom-file-upload" style={{ cursor: "pointer" }}>
                    <div className="d-flex align-items-center mb-0 mx-2">
                      <CardImage className="text-primary fs-5" />
                      <p className="text-dark fw-semibold mb-0 ms-2"> Foto</p>
                    </div>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    id="file-upload"
                    name="file"
                    className="bg-transparent text-none border-0"
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="formFile" className="mb-0">
                  <Form.Label htmlFor="file-upload" className="custom-file-upload" style={{ cursor: "pointer" }}>
                    <div className="d-flex  align-items-center mb-0 mx-2 ">
                      <Youtube className="text-success fs-5" />
                      <p className="text-dark fw-semibold mb-0 ms-2">Video</p>
                    </div>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    id="file-upload"
                    name="file"
                    className="bg-transparent text-none border-0"
                  />
                </Form.Group>
              </Form>
              <Form>
                <Form.Group controlId="formFile" className="mb-0">
                  <Form.Label htmlFor="file-upload" className="custom-file-upload" style={{ cursor: "pointer" }}>
                    <div className="d-flex  align-items-center mb-0 mx-2">
                      <BlockquoteLeft className="text-danger" />
                      <p className="text-dark fw-semibold mb-0 ms-2">Scrivi un articolo</p>
                    </div>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    id="file-upload"
                    name="file"
                    className="bg-transparent text-none border-0"
                  />
                </Form.Group>
              </Form>
            </div>
          </div>

          <div className="py-3  bg-white border border-secondary-subtle mb-2 p-2 rounded-3">
            <div className="d-flex align-items-center">
              <img
                alt="Profilo"
                width="50px"
                height="50px"
                className="rounded-circle border border-light border-2 ms-2 img-fluid"
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              />
              <div className="d-flex flex-column">
                <div className="d-flex ">
                  <h6 className="mb-0">Nome e Cognome &#8226;</h6> <p className="mb-0">3° e oltre</p>
                </div>
                <p className="text-secondary mb-0">Head of GCS Hub Hiring, EMEA & Ireland Market Recruiting Lead</p>
                <p className="mb-0 text-secondary">
                  2 giorni fa &#8226; <GlobeEuropeAfrica className="text-secondary fw-semibold" />
                </p>
              </div>
            </div>
            <div>
              <p>
                The opening of Google&apos;s magnificent Ananta campus in Bengaluru—one of our largest globally—
                symbolizes the limitless potential we see in India and the power of collaboration! Ananta, symbolizing
                &quot;limitless,&quot; embodies the boundless innovation and creativity that can be achieved through
                thoughtful design. As a member of the REWS & GSRS team, I am immensely proud of the collaborative effort
                that went into creating Ananta. I extend my heartfelt thanks to our partners, Googlers, and the entire
                REWS & GSRS team for their passion and hard work. This project exemplifies our commitment to innovation
                and teamwork. To learn more about Ananta, visit: https://lnkd.in/gpWTRmky
              </p>
              <img
                width={500}
                height={500}
                src="https://media.licdn.com/dms/image/v2/D4E22AQHd6R3wsNy2TA/feedshare-shrink_800/B4EZUDTSVSHUAw-/0/1739517143858?e=1743638400&v=beta&t=r1pg3iCRCmyER7GOvny9EMkxMk60mxWwApcB7Tl_NnQ"
                alt="post"
              />
            </div>
            <div className="d-flex flex-column justify-content-end">
              <div className="pt-0 pb-0">
                <div className="d-flex flex-grow-1 justify-content-between" style={{ width: "100%" }}>
                  <div className="d-flex ">
                    <div className=" d-flex  justify-content-between">
                      <ul className="d-flex flew-wrap reaction-section">
                        <li>
                          <Button className="d-flex align-items-center" variant="light">
                            <img
                              className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light"
                              src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
                              alt="like"
                              data-test-reactions-icon-type="LIKE"
                              data-test-reactions-icon-theme="light"
                              data-test-reactions-icon-style="consumption"
                              data-test-reactions-icon-size="small"
                            ></img>
                            <img
                              className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--1 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-PRAISE data-test-reactions-icon-theme-light"
                              src="https://static.licdn.com/aero-v1/sc/h/b1dl5jk88euc7e9ri50xy5qo8"
                              alt="celebrate"
                              data-test-reactions-icon-type="PRAISE"
                              data-test-reactions-icon-theme="light"
                              data-test-reactions-icon-style="consumption"
                              data-test-reactions-icon-size="small"
                            ></img>
                            <img
                              className="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--2 reactions-icon__consumption--small reactions-icon--stacked data-test-reactions-icon-type-EMPATHY data-test-reactions-icon-theme-light"
                              src="https://static.licdn.com/aero-v1/sc/h/cpho5fghnpme8epox8rdcds22"
                              alt="love"
                              data-test-reactions-icon-type="EMPATHY"
                              data-test-reactions-icon-theme="light"
                              data-test-reactions-icon-style="consumption"
                              data-test-reactions-icon-size="small"
                            ></img>
                            <span className="text-secondary">665</span>
                          </Button>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="d-flex flew-wrap reaction-section">
                        <li>
                          <Button variant="light" className="text-secondary ms-2 p-0">
                            Commenti
                          </Button>
                          <Button variant="light" className="text-secondary p-0 ms-2">
                            Diffusioni post
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bord ">
                  <div className="mt-2">
                    <Button variant="light" className="fw-semibold text-dark-emphasis ms-2">
                      <HandThumbsUp />
                      <span>Consiglia</span>
                    </Button>
                    <Button variant="light" className="fw-semibold text-dark-emphasis ms-2">
                      <ChatText />
                      <span>Commenta</span>
                    </Button>
                    <Button variant="light" className="fw-semibold text-dark-emphasis ms-2">
                      <Shuffle />
                      <span>Diffondi il post</span>
                    </Button>
                    <Button variant="light" className="fw-semibold text-dark-emphasis ms-2">
                      <SendFill />
                      <span>Invia</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
