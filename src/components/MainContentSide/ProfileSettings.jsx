import { Col, Collapse, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const ProfileSettings = () => {
  return (
    <>
      <Row className="border border-2 border-secondary-subtle  mt-4">
        <Col>
          <div>
            <Row>
              <Col xs={10}>
                <h6>Lingua del Profilo</h6>
                <p className=" text-secondary">Italiano</p>
              </Col>
              <Col xs={1}>
                <Pencil />
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col xs={10}>
                <h6>Profilo pubblico e Url</h6>
                <p className="text-secondary">www.linkedin.com/in/salvatore-desole-b074451b</p>
              </Col>
              <Col xs={1}>
                <Pencil />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProfileSettings;
