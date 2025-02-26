import { Col, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const ProfileSettings = () => {
  return (
    <>
      <Row className="border rounded-2 bg-white  mt-4">
        <Col>
          <Row>
            <Col xs={10}>
              <h6>Lingua del Profilo</h6>
              <p className=" text-secondary">Italiano</p>
            </Col>
            <Col xs={2}>
              <Pencil />
            </Col>
          </Row>

          <Row>
            <Col xs={10}>
              <h6>Profilo pubblico e Url</h6>
              <div className="w-50">
                <a href="www.linkedin.com/in/salvatore-desole-b074451b" className="text-secondary">
                  www.linkedin.com/in/salvatore-desole-b074451b
                </a>
              </div>
            </Col>
            <Col xs={2}>
              <Pencil />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProfileSettings;
