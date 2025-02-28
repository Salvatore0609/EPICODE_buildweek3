import { Button, Col, Image, Row, Tab, Tabs } from "react-bootstrap";
import { ArrowRight, PlusLg } from "react-bootstrap-icons";

const InterestSection = () => {
  return (
    <>
      <Row className="p-0">
        <Col className="border rounded-2 bg-white  mt-3">
          <h5 className="mt-4 mb-3">Interessi</h5>
          <Tabs defaultActiveKey="Aziende" transition={false} id="noanim-tab-example" className="mb-3 custom-tabs ">
            <Tab eventKey="Aziende" title="Aziende">
              <Row className="p-0">
                <Col>
                  <Row className="p-0">
                    <Col xs={2} className="p-0 ">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                        className="w-100 ms-2"
                      />
                    </Col>
                    <Col xs={10}>
                      <h4 className="m-0">EPICODE</h4>
                      <p className="m-0"> 18.869 follower</p>
                      <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                        <PlusLg />
                        Segui
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row className="p-0">
                    <Col xs={2} className="p-0 ">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                        className="w-100 ms-2"
                      />
                    </Col>
                    <Col xs={10}>
                      <h4 className="m-0">EPICODE</h4>
                      <p className="m-0"> 18.869 follower</p>
                      <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                        <PlusLg />
                        Segui
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="text-center mt-3 p-0">
                <Col>
                  <Button
                    variant="outline-secondary"
                    className="text-dark rounded-0 border-top border-end-0 border-start-0 border-bottom-0 custom-button-hover w-100"
                  >
                    Mostra tutte le aziende
                    <ArrowRight className="ms-2" />
                  </Button>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="Scuole o università" title="Scuole o università" className="p-0">
              <Row>
                <Col>
                  <Row className="mb-3">
                    <Col xs={2} className="p-0 ">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                        className="w-100 ms-2"
                      />
                    </Col>
                    <Col xs={10}>
                      <h4 className="m-0">EPICODE</h4>
                      <p className="m-0"> 18.869 follower</p>
                      <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                        <PlusLg />
                        Segui
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <Col xs={2} className="p-0 ">
                      <Image
                        src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1748476800&v=beta&t=doTFJx0D6s9OjWg9ZXuLy9TSWloZEUtDzU0J_gPyBJs"
                        className="w-100 ms-2"
                      />
                    </Col>
                    <Col xs={10}>
                      <h4 className="m-0">EPICODE</h4>
                      <p className="m-0"> 18.869 follower</p>
                      <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                        <PlusLg />
                        Segui
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default InterestSection;
