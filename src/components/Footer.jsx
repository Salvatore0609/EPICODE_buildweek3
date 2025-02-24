import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="bg-secondary">
      <Row>
        <Col>
          <p>Informazioni </p>
          <p>Informativa sulla community professionale</p>
          <p>Privacy e condizioni</p>
          <p>Sales Solutions</p>
          <p>Centro sicurezza</p>
        </Col>
        <Col>
          <p>Accessibilità</p>
          <p>Carriera</p>
          <p>opzioni per gli annunci pubblicitari</p>
          <p>Mobile</p>
        </Col>
        <Col>
          <p>Talent Solutions</p>
          <p>Soluzioni</p>
          <p>Pubblicità</p>
          <p>Piccole imprese</p>
        </Col>
        <Col>
          <p>altro </p>
          <p>altro</p>
          <p>altro</p>
          <p>altro</p>
          <p>altro</p>
        </Col>
        <Col>dropdown con lingue</Col>
      </Row>
    </Container>
  );
};

export default Footer;
