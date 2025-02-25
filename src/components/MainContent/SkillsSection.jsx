import { Button, Col, Row } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";

const SkillSection = () => {
  return (
    <>
      <Row>
        <Col className="border border-2 border-secondary-subtle  mt-3 p-2 ">
          <div className="border border-1 border-secondary-subtle  p-3 rounded-3 " style={{ outline: "dashed" }}>
            <div className="d-flex">
              <h3 className="me-auto">Competenze</h3>
              <XLg />
            </div>
            <p>
              Fai capire se hai un profilo adatto per le nuove opportunità: il 50% dei recruiter usa i dati sulle competenze per coprire le posizioni
              aperte
            </p>
            <h4 className="text-muted ">Soft skill</h4>
            <h4 className="text-muted border-top border-secondary-subtle  pt-2">Competenze tecniche</h4>
            <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill ">Aggiungi competenze</Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SkillSection;
