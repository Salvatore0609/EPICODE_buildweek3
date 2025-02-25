import { useState } from "react";
import { Button, Col, Collapse, Container, Image, Row, Form, InputGroup } from "react-bootstrap";
import { ChevronCompactDown, ChevronCompactUp, PencilSquare, Search, Sliders, ThreeDots } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const MessageBar = () => {
  const profile = useSelector((state) => state.profile);
  const [open, setOpen] = useState(false);
  return (
    <Container fluid className="fixed-bottom">
      <Row className="me-1">
        <Col
          lg={{ span: 3, offset: 9 }}
          className="bg-white border border-secondary-subtle rounded-top shadow d-none d-lg-block p-0"
        >
          <div className="d-flex align-items-center py-2  justify-content-between" id="msg-head">
            <div className="d-flex align-items-center ms-2">
              <Image src={profile.image} alt="profile pic" className="rounded-circle" width="40px" height="40px" />
              <p className="fw-semibold mb-0 ms-2">Messaggistica</p>
            </div>
            <div className="d-flex align-items-center me-2">
              <Button variant="sm">
                <ThreeDots className="fs-6" />
              </Button>
              <Button variant="sm">
                <PencilSquare className="fs-6" />
              </Button>

              {open === true ? (
                <Button
                  variant="sm"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <ChevronCompactDown className="fs-6" />
                </Button>
              ) : (
                <Button
                  variant="sm"
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  <ChevronCompactUp className="fs-6" />
                </Button>
              )}
            </div>
          </div>

          <Collapse in={open}>
            <div id="example-collapse-text" className="text-center border-top border-secondary-subtle">
              <div className="mx-2">
                <Form className="d-flex mt-2">
                  <InputGroup size="sm" className="mb-3 px-1">
                    <Button variant="light btn-sm" id="button-addon1">
                      <Search />
                    </Button>
                    <Form.Control
                      className="bg-light border-0"
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                      placeholder="Cerca messaggi"
                    />
                    <Button variant="light btn-sm" id="button-addon1">
                      <Sliders />
                    </Button>
                  </InputGroup>
                </Form>
                <Image
                  fluid
                  src="https://static.licdn.com/aero-v1/sc/h/eeol4w9o9de2j4gq699mzx79d"
                  alt="nessun messaggio"
                  className="py-2"
                />
                <h4 className="px-5 py-3 fw-normal">Ancora nessun messaggio</h4>
                <p className="px-1">
                  Entra in contatto e dai il via a una conversazione per far decollare la tua carriera
                </p>
                <Button variant="outline-dark rounded-pill fw-semibold mb-5 btn-sm" id="btn-invio-msg">
                  Invia un messaggio
                </Button>
              </div>
            </div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

export default MessageBar;
