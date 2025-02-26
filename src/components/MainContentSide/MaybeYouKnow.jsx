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
      <Row className="border border-2 border-secondary-subtle  mt-3">
        <Col>
          <p className="mb-0">Altre visualizzazioni</p>
          <div className="d-flex align-items-center m-0">
            <EyeFill /> <p className="m-0">Solo per te</p>
          </div>
        </Col>
        {profiles.length > 0 ? (
          profiles.slice(0, 4).map((profile) => (
            <div key={profile._id} className="mt-3">
              <Row>
                <Col xs={3}>
                  <Image style={{ width: "30px", height: "30px" }} src={profile.image} />
                </Col>
                <Col xs={9}>
                  <p>{profile.name}</p>
                  <p>{profile.title}</p>
                  <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                    <PersonPlusFill />
                    Collegati
                  </Button>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <p>nessun profilo disponibile</p>
        )}
        <Row className="text-center text-secondary mt-3">
          <a href="#">Mostra tutto</a>
        </Row>
      </Row>

      <Row className="border border-2 border-secondary-subtle   mt-3">
        <Col>
          <p>persone che potresti conoscere</p>
          <p className="m-0 text-secondary">Dalla tua azienza</p>
        </Col>
        {profiles.length > 5 ? (
          profiles.slice(5, 9).map((profile) => (
            <div key={profile._id} className="mt-3">
              <Row>
                <Col xs={3}>
                  <Image style={{ width: "30px", height: "30px" }} src={profile.image} />
                </Col>
                <Col xs={9}>
                  <p>{profile.name}</p>
                  <p>{profile.title}</p>
                  <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle  rounded-pill">
                    <PersonPlusFill />
                    Collegati
                  </Button>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <p>nessun profilo disponibile</p>
        )}

        <Row className="text-center text-secondary m-3">
          <a href="#">Mostra tutto</a>
        </Row>
      </Row>
    </>
  );
};

export default MaybeYouKnow;
