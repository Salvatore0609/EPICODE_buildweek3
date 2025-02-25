import { Button, Col, Image, Row } from "react-bootstrap";
import { Pencil, PlusLg, SuitcaseLgFill, XLg } from "react-bootstrap-icons";
import ExperienceModal from "../ExperienceModal";
import React from "react";

const ExperienceSection = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Row>
        <Col className="border border-2 border-secondary-subtle  mt-3 p-2 ">
          <div className="border border-1 border-secondary-subtle  p-3 rounded-3 " style={{ outline: "dashed" }}>
            <div className="d-flex">
              <h3 className="me-auto">Esperienze</h3>
              <XLg />
            </div>
            <p>Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più visualizzazioni del profilo e collegamenti</p>
            <div className="d-flex">
              <SuitcaseLgFill className="text-secondary pt-1 fs-4" />

              <div className="text-secondary ms-2 mb-2">
                <h5 className="m-0">Qualifica</h5>
                <p className="m-0">Organizzazione</p>
                <p className="m-0">2023-presente</p>
              </div>
            </div>
            <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill " onClick={() => setModalShow(true)}>
              Aggiungi esperienza
            </Button>

            <ExperienceModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Col>
      </Row>
      <Row className="border border-2 border-secondary-subtle  mt-3">
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
    </>
  );
};

export default ExperienceSection;
