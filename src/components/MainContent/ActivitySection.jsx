import { Button, Col, Row } from "react-bootstrap";
import { ArrowRight, BarChartLineFill, EyeFill, Pencil, PeopleFill } from "react-bootstrap-icons";

const ActivitySection = () => {
  return (
    <>
      <Row>
        <Col className="border bg-white rounded-2 mt-3">
          <h3 className="mb-0">Analisi</h3>
          <div className="d-flex align-items-center">
            <EyeFill className="me-1" /> <p className="m-0">Solo per te</p>
          </div>
          <Row className="mt-3">
            <Col xs={4}>
              <Row>
                <Col xs={12} className="d-flex align-items-start">
                  <PeopleFill className="me-2 large-icon" />
                  <div>
                    <p className="m-0">2 visualizzazioni del profilo</p>
                    <p className="m-0"> Scopri chi ha visitato il tuo profilo</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <Row>
                <Col xs={12} className="d-flex align-items-start">
                  <BarChartLineFill className="me-2 large-icon" />
                  <div>
                    <p className="m-0">N impressioni del post</p>
                    <p>crea un post per aumentare l&apos; interesse</p>
                    <p>Ultimi 7 giorni</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={4}></Col>
          </Row>
          <Row className="text-center">
            <Button
              variant="outline-secondary"
              className="text-dark rounded-0 border-top border-end-0 border-start-0 border-bottom-0 custom-button-hover w-100"
            >
              Mostra tutte le analisi
              <ArrowRight className="ms-2" />
            </Button>
          </Row>
        </Col>
      </Row>
      {/* CONSIGLIATI PER TE */}
      <Row className="border bg-white rounded-2  mt-3">
        <Row>
          <Col>
            <div className="mb-3 mt-3">
              <h4 className="mb-0">Attività</h4>
              <a href="#">26 follower</a>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <div className="mt-3 mb-3">
              <Button
                className="me-3 bg-transparent text-primary border border-primary rounded-pill btn-sm"
                style={{ maxWidth: "auto", maxHeight: "2rem" }}
              >
                Crea un post
              </Button>
              <Pencil style={{ cursor: "pointer" }} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <h6 className="mb-0">Non hai ancora pubblicato nulla</h6>
              <p>I post che condividi appariranno qui</p>
            </div>
          </Col>
        </Row>
        <Row className="text-center">
          <Button
            variant="outline-secondary"
            className="text-dark rounded-0 border-top border-end-0 border-start-0 border-bottom-0 custom-button-hover w-100"
          >
            Mostra tutte le attività
            <ArrowRight className="ms-2" />
          </Button>
        </Row>
      </Row>
    </>
  );
};

export default ActivitySection;
