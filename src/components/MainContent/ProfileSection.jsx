import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Image, Row } from "react-bootstrap";
import { App, EyeFill, Pencil, PencilFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../redux/reducers/profileSlice";
import { fetchProfile, updateProfile } from "../../redux/action/profileAction";
import EditProfileModal from "./EditProfilModal";
import ProfileBgModal from "./ProfileBgModal";
import ProfilePicModal from "../ProfilePicModal";
import setEditExp from "./ExperienceSection";
import setModalShow from "./ExperienceSection";

const ProfileSection = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  const [showEditModal, setShowEditModal] = useState(false);
  const [showProfileBgModal, setShowProfileBgModal] = useState(false);
  const [showProfilePicModal, setShowProfilePicModal] = useState(false);

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  useEffect(() => {
    const getProfile = async () => {
      const profileData = await fetchProfile("me");
      dispatch(setProfile(profileData));
    };
    getProfile();
  }, [dispatch]);

  const handleProfileUpdate = async (updatedProfile) => {
    await updateProfile(updatedProfile);
    dispatch(setProfile(updatedProfile));
    handleCloseEditModal();
  };

  if (!profile) return <div>Loading...</div>;
  return (
    <>
      <Row>
        <Col className="border rounded-2 bg-white  mt-4 p-0">
          <Card>
            <div className="position-relative">
              <div className="position-absolute top-0 end-0">
                <Button variant="small" onClick={() => setShowProfileBgModal(true)}>
                  <PencilFill />
                </Button>
                <ProfileBgModal show={showProfileBgModal} onHide={() => setShowProfileBgModal(false)} />
              </div>
              <Card.Img
                className="background-image rounded-0"
                variant="top"
                src="https://media.licdn.com/dms/image/v2/C5616AQFyq0OEeeELiA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1618202768321?e=1746057600&v=beta&t=orOlXEWuHIHD_jLQQq9usupmfqP6369kcOvCVO0HRyo"
              />
            </div>

            <div className="profile-image-container">
              <Button variant="transparent" onClick={() => setShowProfilePicModal(true)}>
                <img src={profile.image} alt="Profilo" className="profile-image" />
              </Button>
            </div>
            <ProfilePicModal show={showProfilePicModal} onHide={() => setShowProfilePicModal(false)} />
            <Button variant="transparent" onClick={handleShowEditModal} className="d-flex justify-content-end mt-2">
              <Pencil />
            </Button>
            <EditProfileModal
              show={showEditModal}
              handleClose={handleCloseEditModal}
              profile={profile}
              onSave={handleProfileUpdate}
            />

            <Card.Body className="mt-3">
              <div className="d-flex mt-3">
                <Card.Title className="me-3">
                  {profile.name} {profile.surname}
                </Card.Title>
                <Badge className="bg-transparent text-primary border border-primary">Aggiungi badge di verifica</Badge>
                <div className="d-flex ms-auto align-items-center justify-content-center">
                  <App />
                  <p className="m-0">{profile.title}</p>
                </div>
              </div>
              <Card.Text>
                <p>{profile.bio}</p>
                <p>{profile.area}</p>
                <p>Collegamenti (amicizie)</p>
              </Card.Text>
              <Button className="me-3 rounded-pill" variant="primary" onClick={handleShowEditModal}>
                Modifica profilo
              </Button>

              <Button
                className="me-3 bg-transparent text-primary border border-primary rounded-pill"
                onClick={() => {
                  setEditExp(null);
                  setModalShow(true);
                }}
              >
                Aggiungi esperienze
              </Button>
              <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill">
                Visualizza attività
              </Button>
              <Button className="me-3 bg-transparent text-secondary border border-secondary-subtle rounded-pill">
                Altro
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col className="border rounded-2 bg-white  mt-3">
          <h3>Consigliato per te</h3>
          <div className="d-flex align-items-center">
            <EyeFill /> <p className="m-0">Solo per te</p>
          </div>
          <div className="border border-secondary-subtle border-1 bg-transparent rounded-3 p-3 mb-3">
            <div className="d-flex">
              <Image src="https://static.licdn.com/aero-v1/sc/h/db05fgvyq7n2ng4fiexgf4hcq" />
              <strong>
                Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa
              </strong>
            </div>
            <p>Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.</p>
            <Button className="bg-transparent text-secondary border border-secondary-subtle rounded-pill">
              Aggiungi un riepilogo
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProfileSection;
