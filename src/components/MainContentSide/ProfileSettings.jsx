import { Col, Row } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const ProfileSettings = () => {
  return (
    <>
      <Row className="border rounded-2 bg-white  mt-4">
        <Col>
          <Row>
            <Col xs={10}>
              <h5 className="h5">Lingua del Profilo</h5>
              <p className=" text-secondary">Italiano</p>
              <hr />
            </Col>
            <Col xs={2}>
              <Pencil style={{ cursor: "pointer" }} />
            </Col>
          </Row>

          <Row>
            <Col xs={10}>
              <h5 className="h5">Profilo pubblico e Url</h5>
              <div className="w-45">
                <a href="www.linkedin.com/in/salvatore-desole-b074451b" className="text-secondary">
                  www.linkedin.com/in/salvatore-desole-b074451b
                </a>
              </div>
            </Col>
            <Col xs={2}>
              <Pencil style={{ cursor: "pointer" }} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ProfileSettings;
