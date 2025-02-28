import { useEffect } from "react";
import { Button, Form, Image, Modal } from "react-bootstrap";
import { Images } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../redux/action/profileAction";
import { setProfile } from "../../redux/reducers/profileSlice";
const CreatePostModal = (props) => {
  const { show, onHide, onSave, post } = props;

  const [postData, setPostData] = useState({
    text: post ? post.text : "",
  });

  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const profileData = await fetchProfile("me");
        dispatch(setProfile(profileData));
      } catch (error) {
        console.error("Errore durante il caricamento del profilo:", error);
      }
    };
    getProfile();
  }, [dispatch]);

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
        <div className="d-flex ms-2">
          <Image
            alt="Profilo"
            width="60px"
            height="60px"
            className=" border border-light border-2 ms-2"
            style={{ objectFit: "cover", borderRadius: "60px" }}
            src={profile.image}
          />
          <div className="ms-3">
            <h6 className="fs-4">
              {profile.name} {profile.surname}
            </h6>
            <p>{profile.title}</p>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="p-2 mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={25}
              className="border border-0"
              placeholder="Di cosa vorresti parlare?"
              required
            />
          </Form.Group>
          <div
            className="my-3 py-3 d-flex justify-content-center align-items-center"
            style={{ borderBottom: "1px solid grey" }}
          >
            <Images className="fs-4" />
            <Form.Control
              as="textarea"
              rows={1}
              className="border border-0"
              placeholder="inserisci url immagine"
            />{" "}
          </div>
          <div className="d-flex align-items-end">
            <Button variant="primary rounded-pill" type="submit" className="ms-auto">
              Pubblica
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreatePostModal;
