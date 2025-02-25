import { Button, Col, Row } from "react-bootstrap";
import { ArrowRight, BarChartLineFill, EyeFill, Pencil, PeopleFill } from "react-bootstrap-icons";

const ActivitySection = () => {
  return (
    <>
      <Row>
        <Col className="border border-2 border-secondary-subtle  mt-3">
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
      <Row className="border border-2 border-secondary-subtle  mt-3">
        <Row>
          <Col>
            <p>Attività</p>
            <a href="#">26 follower</a>
          </Col>
          <Col>
            <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill">Crea un post</Button>
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
    </>
  );
};

export default ActivitySection;
