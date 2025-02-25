import { Button, Col, Image, Row } from "react-bootstrap";
import { EyeFill, PersonPlusFill } from "react-bootstrap-icons";

const MaybeYouKnow = () => {
  return (
    <>
      <Row className="border border-2 border-secondary-subtle  mt-3">
        <Col>
          <p className="mb-0">Altre visualizzazioni</p>
          <div className="d-flex align-items-center m-0">
            <EyeFill /> <p className="m-0">Solo per te</p>
          </div>
        </Col>
        <div className="mt-3">
          <Row>
            <Col xs={3}>
              <Image src="{profile.image}" />
            </Col>
            <Col xs={9}>
              <p>profile.name</p>
              <p>profile.title</p>
              <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                <PersonPlusFill />
                Collegati
              </Button>
            </Col>
          </Row>
        </div>
        <Row className="text-center text-secondary mt-3">
          <a href="#">Mostra tutto</a>
        </Row>
      </Row>

      <Row className="border border-2 border-secondary-subtle   mt-3">
        <Col>
          <p>persone che potresti conoscere</p>
          <p className="m-0 text-secondary">Dalla tua azienza</p>
        </Col>
        <div className="mt-3">
          <Row>
            <Col xs={3}>
              <Image src="{profile.image}" />
            </Col>
            <Col xs={9}>
              <p>profile.name</p>
              <p>profile.title</p>
              <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                <PersonPlusFill />
                Collegati
              </Button>
            </Col>
          </Row>
        </div>
        <Row className="text-center text-secondary m-3">
          <a href="#">Mostra tutto</a>
        </Row>
      </Row>
    </>
  );
};

export default MaybeYouKnow;
