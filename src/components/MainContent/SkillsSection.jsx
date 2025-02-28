import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { ArrowRight, XLg } from "react-bootstrap-icons";

const SkillSection = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) {
    return null;
  }
  return (
    <>
      <Row>
        <Col className="border rounded-2 bg-white  mt-3 p-0 ">
          <div
            className="border border-1 border-secondary-subtle  p-3 pb-1 rounded-3 mb-0 "
            style={{ outline: "dashed" }}
          >
            <div className="d-flex">
              <h3 className="me-auto">Competenze</h3>
              <XLg className="ms-2" onClick={() => setIsVisible(false)} style={{ cursor: "pointer" }} />
            </div>
            <p>
              Fai capire se hai un profilo adatto per le nuove opportunità: il 50% dei recruiter usa i dati sulle
              competenze per coprire le posizioni aperte
            </p>
            <h4 className="text-muted ">Soft skill</h4>
            <h4 className="text-muted border-top border-secondary-subtle  pt-2">Competenze tecniche</h4>
            <Button className="me-3 mb-3 bg-transparent text-primary border border-primary rounded-pill ">
              Aggiungi competenze
            </Button>
            <Button
              variant="outline-secondary"
              className="text-dark rounded-0 border-top border-end-0 border-start-0 border-bottom-0 custom-button-hover w-100 pb-0"
            >
              Mostra tutte le competenze
              <ArrowRight className="ms-2" />
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SkillSection;
