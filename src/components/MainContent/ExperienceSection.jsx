import { Button, Col, Image, Row } from "react-bootstrap";
import { Pencil, PlusLg, SuitcaseLgFill, XLg } from "react-bootstrap-icons";

import { useEffect, useState } from "react";
import ExperienceModal from "./ExperienceModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from "../../redux/action/experienceAction";
import { addExperience } from "../../redux/reducers/experienceSlice";

const ExperienceSection = ({ userId }) => {
  const [modalShow, setModalShow] = useState(false);
  const [editExp, setEditExp] = useState(null);
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experience.experiences);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(fetchExperience(userId)).finally(() => setLoading(false));
    }
  }, [dispatch, userId]);

  const handleSave = (data) => {
    console.log("Dati salvati:", data);

    dispatch(addExperience(data));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Row className="border bg-white rounded-2  mt-3">
        <Row>
          <Col>
            <h3 className="me-auto">Esperienze</h3>
          </Col>
        </Row>
        {experiences && experiences.length > 0 ? (
          experiences.map((exp) => (
            <Row key={exp._id}>
              <Col xs={2}>
                <Image src={exp.image} className="w-75" />
              </Col>
              <Col xs={8}>
                <h3>{exp.role}</h3>
                <p>
                  {exp.company}-{exp.area}
                </p>
                <p>
                  {exp.startDate}-{exp.endDate}
                </p>
                <p>{exp.area}</p>
              </Col>
              <Col xs={2} className="d-flex align-items-center justify-content-end">
                <Pencil
                  role="button"
                  className="me-3"
                  onClick={() => {
                    setEditExp(exp);
                    setModalShow(true);
                  }}
                />
              </Col>
            </Row>
          ))
        ) : (
          <Row>
            <Col className="border bg-white rounded-2  mt-3 p-2 ">
              <div className="border border-1 border-secondary-subtle  p-3 rounded-3 " style={{ outline: "dashed" }}>
                <div className="d-flex">
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
                <Button
                  className="me-3 bg-transparent text-primary border border-primary rounded-pill "
                  onClick={() => {
                    setModalShow(true), setEditExp(null);
                  }}
                >
                  <PlusLg />
                </Button>

                <ExperienceModal show={modalShow} onHide={() => setModalShow(false)} experience={editExp} onSave={handleSave} />
              </div>
            </Col>
          </Row>
        )}
      </Row>
    </>
  );
};

export default ExperienceSection;
