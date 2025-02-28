import { useEffect } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { EyeFill, PersonPlusFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setProfilesList } from "../../redux/reducers/profilesLists";

const MaybeYouKnow = () => {
  const API_URL = "https://striveschool-api.herokuapp.com/api/profile/";
  const BEARER_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JjNTc1ZGU3MDMzNzAwMTUzMTZkYmEiLCJpYXQiOjE3NDAzOTYzODIsImV4cCI6MTc0MTYwNTk4Mn0.ONZKTuW8uMZfm7TTZUQUDzRq8jfZZmWwJ4vefV07-jY";

  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profilesLists);

  useEffect(() => {
    const fetchProfilesList = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: { Authorization: `Bearer ${BEARER_TOKEN}` },
        });
        if (!response.ok) {
          throw new Error("Errore durante il fetch del profilo");
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          dispatch(setProfilesList(data));
        } else {
          console.log("i dati ricevuti non sono un Array :", data);
        }
      } catch (error) {
        console.error("errore nel caricamento dei profili : ", error);
      }
    };
    fetchProfilesList();
  }, [dispatch]);

  return (
    <>
      <Row className="border rounded-2 bg-white  mt-3">
        <Col>
          <p className="mb-0 fw-semibold ">Altre visualizzazioni</p>
          <div className="d-flex align-items-center m-0">
            <EyeFill className="mx-2 text-secondary" /> <p className="m-0 text-secondary">Solo per te</p>
          </div>
        </Col>
        {profiles.length > 0 ? (
          profiles.slice(0, 4).map((profile) => (
            <div key={profile._id} className="mt-3 d-flex">
              <Image
                style={{ width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" }}
                src={profile.image}
                className="ms-2 "
              />

              <div className="d-flex flex-column ms-2">
                <p className="fw-bold p-0 m-0 profile-name">{profile.name}</p>
                <p className="mb-2">{profile.title}</p>
                <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill connect-button fw-semibold">
                  <PersonPlusFill />
                  Collegati
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>nessun profilo disponibile</p>
        )}
        <Row className="text-center text-secondary mt-3">
          <a href="#">Mostra tutto</a>
        </Row>
      </Row>

      <Row className="border rounded-2 bg-white   mt-3">
        <Col>
          <p className="fw-semibold p-0 mb-0">Persone che potresti conoscere</p>
          <p className="m-0 text-secondary">Dalla tua azienda</p>
        </Col>
        {profiles.length > 5 ? (
          profiles.slice(5, 9).map((profile) => (
            <div key={profile._id} className="mt-3 d-flex ">
              <Image
                style={{ width: "40px", height: "40px", borderRadius: "50%", cursor: "pointer" }}
                src={profile.image}
                className="ms-2 "
              />

              <div className="d-flex flex-column ms-2">
                <p className="fw-bold p-0 m-0 profile-name">{profile.name}</p>
                <p className="mb-2">{profile.title}</p>

                <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill fw-semibold  px-4 connect-button">
                  <PersonPlusFill />
                  Collegati
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>nessun profilo disponibile</p>
        )}

        <Row className="text-center  m-3 mostra-tutto">
          <a href="#">Mostra tutto</a>
        </Row>
      </Row>
    </>
  );
};

export default MaybeYouKnow;
