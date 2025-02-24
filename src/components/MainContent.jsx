import { Col, Container, Row } from "react-bootstrap";

const MainContent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p>Profilo e modifica</p>
          <Row>
            <Col>
              <p>Consigliati per te</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Analisi</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Attività</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Esperienza</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Formazione</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Competenze</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>interessi</p>
            </Col>
          </Row>
        </Col>
        {/* ----------- */}
        <Col>
          <p>Lingua del Profilo</p>
          <p>Profilo pubblico e Url</p>
          <Row>
            <Col>
              <p>Altre visualizzazioni</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>persone che potresti conoscere</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>potrebbe interessarti</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
