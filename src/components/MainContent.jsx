import { Badge, Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { App, ArrowRight, BarChartLineFill, EyeFill, PeopleFill } from "react-bootstrap-icons";

const MainContent = () => {
  return (
    <Container>
      <Row className="gap-4 d-flex justify-content-center">
        <Col md={8} className="border border-2 border-warning">
          <Row>
            <Col className="border border-2 border-warning mt-4 p-0 ">
              <Card className="">
                <Card.Img
                  variant="top"
                  src="https://media.licdn.com/dms/image/v2/C5616AQFyq0OEeeELiA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1618202768321?e=1746057600&v=beta&t=orOlXEWuHIHD_jLQQq9usupmfqP6369kcOvCVO0HRyo"
                />
                <Card.Body>
                  <div className="d-flex">
                    <Card.Title className="me-3">Salvatore Desole</Card.Title>
                    <Badge className="bg-transparent text-primary border border-primary ">Aggiungi badge di verifica</Badge>
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
                  <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill ">Go somewhere</Button>
                  <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill">Go somewhere</Button>
                  <Button className="me-3 bg-transparent text-secondary border border-secondary rounded-pill">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-warning mt-3">
              <h3>Consigliato per te</h3>
              <div className="d-flex align-items-center">
                <EyeFill /> <p className="m-0">Solo per te</p>
              </div>
              <div className="border border-secondary border-1 bg-transparent rounded-3 p-3 mb-3">
                <div className="d-flex">
                  <Image src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq" />
                  <strong>Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa</strong>
                </div>
                <p>Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.</p>
                <Button className="bg-transparent text-secondary border border-secondary rounded-pill">Aggiungi un riepilogo</Button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-warning mt-3">
              <h3>Analisi</h3>
              <div className="d-flex align-items-center">
                <EyeFill /> <p className="m-0">Solo per te</p>
              </div>
              <div className="d-flex align-items-center">
                <PeopleFill /> <p className="m-0">N visualizzazioni del profilo</p>
                <p>scopri chi ha visitato il tuo profilo</p>
              </div>
              <div className="d-flex align-items-center border-bottom">
                <BarChartLineFill /> <p className="m-0">N impressioni del post</p>
                <p>crea un post per aumentare l&apos; interesse</p>
                <p>Ultimi 7 giorni</p>
              </div>
              <a href="#">
                Mostra tutte le Attività <ArrowRight />
              </a>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-warning mt-3">
              <p>Attività</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-warning mt-3">
              <p>Esperienza</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-warning mt-3">
              <p>Formazione</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-warning mt-3">
              <p>Competenze</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-warning mt-3">
              <p>interessi</p>
            </Col>
          </Row>
        </Col>
        {/* ----------- */}
        <Col md={2} className="border border-2 border-warning">
          <Row>
            <Col className="border border-2 border-warning mt-4">
              <p>Lingua del Profilo</p>
              <p>Profilo pubblico e Url</p>
            </Col>
          </Row>

          <Row>
            <Col className="border border-2 border-warning mt-3">
              <p>Altre visualizzazioni</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-warning mt-3">
              <p>persone che potresti conoscere</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-warning mt-3">
              <p>potrebbe interessarti</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
