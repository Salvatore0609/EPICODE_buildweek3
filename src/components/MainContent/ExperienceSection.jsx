import { Button, Col, Image, Row } from "react-bootstrap";
import { PlusLg, SuitcaseLgFill, XLg } from "react-bootstrap-icons";

import { useEffect, useState } from "react";
import ExperienceModal from "./ExperienceModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchExperience } from "../../redux/action/experienceAction";
import { addExperience, updateExperience } from "../../redux/reducers/experienceSlice";

const ExperienceSection = ({ userId }) => {
  const [modalShow, setModalShow] = useState(false);
  const [editExp, setEditExp] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
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

  const handleEditSave = (data) => {
    console.log("Dati salvati:", data);

    dispatch(updateExperience(data));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <Row className="border bg-white rounded-2  mt-3">
        <Row>
          <Col className="d-flex mt-2">
            <h3 className="me-auto">Esperienze</h3>
            <Button
              className="bg-transparent text-dark border-0  "
              onClick={() => {
                setEditExp(null);
                setModalShow(true);
              }}
            >
              <PlusLg />
            </Button>
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
                  {exp.startDate} - {exp.endDate}
                </p>
                <p>{exp.area}</p>
              </Col>
              <Col xs={2} className="d-flex align-items-center justify-content-end">
                <Button
                  className="bg-transparent text-dark border-0 "
                  onClick={() => {
                    setEditExp(exp);
                    setModalShow(true);
                  }}
                ></Button>
                <ExperienceModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  experience={editExp}
                  onSave={handleEditSave}
                />
              </Col>
            </Row>
          ))
        ) : (
          <Row>
            <Col className="border bg-white rounded-2  mt-3 p-2 ">
              <div className="border border-1 border-secondary-subtle  p-3 rounded-3 " style={{ outline: "dashed" }}>
                <div className="d-flex">
                  <p className="me-auto">
                    Metti in risalto i risultati raggiunti e ottieni fino a 2 volte più visualizzazioni del profilo e
                    collegamenti
                  </p>
                  <XLg className="ms-2" onClick={() => setIsVisible(false)} style={{ cursor: "pointer" }} />
                </div>
                <div className="d-flex">
                  <SuitcaseLgFill className="text-secondary pt-1 fs-4" />

                  <div className="text-secondary ms-2 mb-2">
                    <h5 className="m-0">Qualifica</h5>
                    <p className="m-0">Organizzazione</p>
                    <p className="m-0">2023-presente</p>
                  </div>
                </div>

                <ExperienceModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  experience={editExp}
                  onSave={handleSave}
                />
              </div>
            </Col>
          </Row>
        )}
      </Row>
    </>
  );
};

export default ExperienceSection;
