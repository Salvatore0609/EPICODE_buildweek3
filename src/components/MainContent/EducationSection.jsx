import { Col, Image, Row } from "react-bootstrap";
import { Pencil, PlusLg } from "react-bootstrap-icons";

const EducationSection = () => {
  return (
    <>
      <Row className="border rounded-2 bg-white  mt-3">
        <Row>
          <Col>
            <p>Formazione</p>
          </Col>
          <Col className="d-flex justify-content-end">
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
    </>
  );
};

export default EducationSection;
