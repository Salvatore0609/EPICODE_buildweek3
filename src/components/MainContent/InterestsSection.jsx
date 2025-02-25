import { Col, Image, Row, Tab, Tabs } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

const InterestSection = () => {
  return (
    <>
      <Row>
        <Col className="border border-2 border-secondary-subtle  mt-3">
          <p>interessi</p>
          <Tabs defaultActiveKey="Aziende" transition={false} id="noanim-tab-example" className="mb-3">
            <Tab eventKey="Aziende" title="Aziende">
              <Row>
                <Col>
                  <Row>
                    <Col xs={2}>
                      <Image
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                        className="w-75"
                      />
                    </Col>
                    <Col xs={10}>
                      <p>contenuto</p>
                      <p>contenuto</p>
                      <p>contenuto</p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={2}>
                      <Image
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                        className="w-75"
                      />
                    </Col>

                    <Col xs={10}>
                      <p>contenuto</p>
                      <p>contenuto</p>
                      <p>contenuto</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Scuole o università" title="Scuole o università">
              <Row>
                <Col>
                  <Row>
                    <Col xs={2}>
                      <Image
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                        className="w-75"
                      />
                    </Col>

                    <Col xs={10}>
                      <p>contenuto</p>
                      <p>contenuto</p>
                      <p>contenuto</p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={2}>
                      <Image
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                        className="w-75"
                      />
                    </Col>

                    <Col xs={10}>
                      <p>contenuto</p>
                      <p>contenuto</p>
                      <p>contenuto</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Tab>
          </Tabs>
          <Row className="text-center">
            <a href="#">
              Mostra tutte le Aziende <ArrowRight />
            </a>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default InterestSection;
