import { Button, Col, Image, Row } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";

const Interestings = () => {
  return (
    <>
      <Row className="border rounded-2 bg-white  mt-3">
        <Col>
          <p>Potrebbe interessarti</p>
          <p className="m-0 text-secondary">Pagine per te</p>
        </Col>
        <div className="mt-3">
          <Row>
            <Col xs={3}>
              <Image
                style={{
                  width: "40px",
                  height: "40px",
                }}
                src="data:image/png;base64,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"
              />
            </Col>
            <Col xs={9}>
              <p>Flos</p>
              <p>Illuminotecnica </p>
              <p className="text-secondary">11 Mln follower </p>
              <Row>
                <Col xs={3} className="d-flex " style={{ flexShrink: "0" }}>
                  <Image
                    src="https://images.pexels.com/photos/30767565/pexels-photo-30767565/free-photo-of-ritratto-professionale-in-bianco-e-nero.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      flex: " 1 0 auto",
                    }}
                  />
                  <Image
                    src="https://media.istockphoto.com/id/157428352/it/foto/amici-in-un-photo-booth.jpg?b=1&s=612x612&w=0&k=20&c=xdtm1eF7u-584Il10ju5ixJyc0K7Sy9Uro0jy3XOqkI="
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      transform: "translateX(-50%)",
                      flex: " 1 0 auto",
                    }}
                  />
                </Col>
                <Col xs={9}>
                  <p style={{ fontSize: "10px" }}>2 collegamenti seguono questa pagina</p>
                </Col>
              </Row>
              <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                <PlusLg />
                Segui
              </Button>
            </Col>
          </Row>
        </div>
        <div className="mt-3">
          <Row>
            <Col xs={3}>
              <Image
                style={{
                  width: "40px",
                  height: "40px",
                }}
                src="data:image/png;base64,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"
              />
            </Col>
            <Col xs={9}>
              <p>Flos</p>
              <p>Illuminotecnica </p>
              <p className="text-secondary">11 Mln follower </p>
              <Row>
                <Col xs={3} className="d-flex " style={{ flexShrink: "0" }}>
                  <Image
                    src="https://images.pexels.com/photos/30767565/pexels-photo-30767565/free-photo-of-ritratto-professionale-in-bianco-e-nero.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      flex: " 1 0 auto",
                    }}
                  />
                  <Image
                    src="https://media.istockphoto.com/id/157428352/it/foto/amici-in-un-photo-booth.jpg?b=1&s=612x612&w=0&k=20&c=xdtm1eF7u-584Il10ju5ixJyc0K7Sy9Uro0jy3XOqkI="
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      transform: "translateX(-50%)",
                      flex: " 1 0 auto",
                    }}
                  />
                </Col>
                <Col xs={9}>
                  <p style={{ fontSize: "10px" }}>2 collegamenti seguono questa pagina</p>
                </Col>
              </Row>
              <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                <PlusLg />
                Segui
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

export default Interestings;
