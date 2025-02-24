import { Badge, Button, Card, Col, Container, Image, Row, Tab, Tabs } from "react-bootstrap";
import { App, ArrowRight, BarChartLineFill, EyeFill, Pencil, PeopleFill, PlusLg, XLg } from "react-bootstrap-icons";

const MainContent = () => {
  return (
    <Container>
      <Row className="gap-4 d-flex justify-content-center ">
        <Col md={8}>
          {/* PANNELLO PRINCIPALE */}
          <Row>
            <Col className="border border-2 border-secondary mt-4 p-0 ">
              <Card className="">
                <Card.Img
                  variant="top"
                  src="https://media.licdn.com/dms/image/v2/C5616AQFyq0OEeeELiA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1618202768321?e=1746057600&v=beta&t=orOlXEWuHIHD_jLQQq9usupmfqP6369kcOvCVO0HRyo"
                />
                <Card.Body>
                  <div className="d-flex">
                    <Card.Title className="me-3">Salvatore Desole</Card.Title>
                    <Badge className="bg-transparent text-primary border border-primary ">
                      Aggiungi badge di verifica
                    </Badge>
                    <div className="d-flex ms-auto align-items-center justify-content-center">
                      {/* <img> */}
                      <App />
                      {/*   </img> */}
                      <p className="m-0">Liceo Artistico</p>
                    </div>
                  </div>
                  <Card.Text>
                    <p>Sommario</p>
                    <p>Regione, Stato - (informazione di contatto)</p>
                    <p>collegamenti(amicizie)</p>
                  </Card.Text>
                  <Button className="me-3 rounded-pill" variant="primary">
                    Go somewhere
                  </Button>
                  <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill ">
                    Go somewhere
                  </Button>
                  <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill">
                    Go somewhere
                  </Button>
                  <Button className="me-3 bg-transparent text-secondary border border-secondary rounded-pill">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* CONSIGLIATI PER TE */}
          <Row>
            <Col className="border border-2 border-secondary mt-3">
              <h3>Consigliato per te</h3>
              <div className="d-flex align-items-center">
                <EyeFill /> <p className="m-0">Solo per te</p>
              </div>
              <div className="border border-secondary border-1 bg-transparent rounded-3 p-3 mb-3">
                <div className="d-flex">
                  <Image src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq" />
                  <strong>
                    Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa
                  </strong>
                </div>
                <p>Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.</p>
                <Button className="bg-transparent text-secondary border border-secondary rounded-pill">
                  Aggiungi un riepilogo
                </Button>
              </div>
            </Col>
          </Row>
          {/* ANALISI */}
          <Row>
            <Col className="border border-2 border-secondary mt-3">
              <h3>Analisi</h3>
              <div className="d-flex align-items-center">
                <EyeFill /> <p className="m-0">Solo per te</p>
              </div>
              <Row>
                <Col xs={4}>
                  <Row>
                    <Col xs={1}>
                      <PeopleFill />
                    </Col>
                    <Col xs={11}>
                      <p className="m-0">N visualizzazioni del profilo</p>
                      <p className="m-0"> Scopri chi ha visitato il tuo profilo</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={4}>
                  <Row>
                    <Col xs={1}>
                      <BarChartLineFill />
                    </Col>
                    <Col xs={11}>
                      <p className="m-0">N impressioni del post</p>
                      <p>crea un post per aumentare l&apos; interesse</p>
                      <p>Ultimi 7 giorni</p>
                    </Col>
                  </Row>
                </Col>
                <Col xs={4}></Col>
              </Row>
              <Row className="text-center">
                <a href="#">
                  Mostra tutte le Attività <ArrowRight />
                </a>
              </Row>
            </Col>
          </Row>
          {/* CONSIGLIATI PER TE */}
          <Row className="border border-2 border-secondary mt-3">
            <Row>
              <Col>
                <p>Attività</p>
                <a href="#">26 follower</a>
              </Col>
              <Col>
                <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill">
                  Crea un post
                </Button>
                <Pencil />
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <p>Non hai ancora pubblicato nulla</p>
                  <p>I post che condividi appariranno qui</p>
                </div>
              </Col>
            </Row>
            <Row className="text-center">
              <a href="#">
                Mostra tutte le Attività <ArrowRight />
              </a>
            </Row>
          </Row>
          {/* ESPERIENZE */}
          <Row className="border border-2 border-secondary mt-3">
            <Row>
              <Col>
                <p>Esperienza</p>
              </Col>
              <Col>
                <PlusLg />
                <Pencil />
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <Image
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                  className="w-75"
                />
              </Col>
              <Col xs={8}>
                <h3>Collaboratore tecnico</h3>
                <p>ESSECIQUADRO ASSOCIATI - Architettura e ingegneria - A tempo pieno</p>
                <p>Sett 2022 - Mag 2023 - 9 mesi</p>
                <p>Sassari, Sardegna, Italia</p>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <Image
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                  className="w-75"
                />
              </Col>
              <Col xs={8}>
                <h3>Collaboratore tecnico</h3>
                <p>ESSECIQUADRO ASSOCIATI - Architettura e ingegneria - A tempo pieno</p>
                <p>Sett 2022 - Mag 2023 - 9 mesi</p>
                <p>Sassari, Sardegna, Italia</p>
              </Col>
            </Row>
          </Row>
          {/* FORMAZIONE */}
          <Row className="border border-2 border-secondary mt-3">
            <Row>
              <Col>
                <p>Formazione</p>
              </Col>
              <Col>
                <PlusLg />
                <Pencil />
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <Image
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                  className="w-75"
                />
              </Col>
              <Col xs={8}>
                <h3>Liceo Artistico</h3>
                <p>Diploma in Design dell&apos; Architetura e dell&apos; Arredamento </p>
                <p>Sett 2022 - Mag 2023 - 9 mesi</p>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <Image
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                  className="w-75"
                />
              </Col>
              <Col xs={8}>
                <h3>Università degli Studi di Sassari</h3>
                <p>Architettura</p>
              </Col>
            </Row>
          </Row>

          {/* COMPETENZE */}
          <Row>
            <Col className="border border-2 border-secondary mt-3 p-2 ">
              <div className="border border-1 border-secondary p-3 rounded-3 " style={{ outline: "dashed" }}>
                <div className="d-flex">
                  <h3 className="me-auto">Competenze</h3>
                  <XLg />
                </div>
                <p>
                  Fai capire se hai un profilo adatto per le nuove opportunità: il 50% dei recruiter usa i dati sulle
                  competenze per coprire le posizioni aperte
                </p>
                <h4 className="text-muted ">Soft skill</h4>
                <h4 className="text-muted border-top border-secondary pt-2">Competenze tecniche</h4>
                <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill ">
                  Aggiungi competenze
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-secondary mt-3">
              {/* INTERESSI */}
              <p>interessi</p>
              <Tabs defaultActiveKey="Aziende" transition={false} id="noanim-tab-example" className="mb-3">
                <Tab eventKey="Aziende" title="Aziende">
                  <Row>
                    <Col>
                      <Row>
                        <Col xs={2}>
                          <Image
                            src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                            className="w-75"
                          />
                        </Col>
                        <Col xs={10}>
                          <p>contenuto</p>
                          <p>contenuto</p>
                          <p>contenuto</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col xs={2}>
                          <Image
                            src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                            className="w-75"
                          />
                        </Col>

                        <Col xs={10}>
                          <p>contenuto</p>
                          <p>contenuto</p>
                          <p>contenuto</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="Scuole o università" title="Scuole o universitàe">
                  <Row>
                    <Col>
                      <Row>
                        <Col xs={2}>
                          <Image
                            src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                            className="w-75"
                          />
                        </Col>

                        <Col xs={10}>
                          <p>contenuto</p>
                          <p>contenuto</p>
                          <p>contenuto</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                        <Col xs={2}>
                          <Image
                            src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                            className="w-75"
                          />
                        </Col>

                        <Col xs={10}>
                          <p>contenuto</p>
                          <p>contenuto</p>
                          <p>contenuto</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="text-center">
                    <a href="#">
                      Mostra tutte le Aziende <ArrowRight />
                    </a>
                  </Row>
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Col>
        {/* ----------- */}
        <Col md={2} className="border border-2 border-secondary">
          <Row>
            <Col className="border border-2 border-secondary mt-4">
              <p>Lingua del Profilo</p>
              <p>Profilo pubblico e Url</p>
            </Col>
          </Row>

          <Row>
            <Col className="border border-2 border-secondary mt-3">
              <p>Altre visualizzazioni</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-secondary mt-3">
              <p>persone che potresti conoscere</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-secondary mt-3">
              <p>potrebbe interessarti</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
