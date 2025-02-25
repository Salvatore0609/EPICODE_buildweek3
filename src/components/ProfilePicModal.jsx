import { Form, Modal } from "react-bootstrap";
import { CameraFill, Trash3Fill } from "react-bootstrap-icons";

const ProfilePicModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton className="bg-dark">
        <Modal.Title id="contained-modal-title-vcenter" className="text-light">
          Foto Profilo
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark"></Modal.Body>
      <Modal.Footer className="bg-dark d-flex justify-content-between ">
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label htmlFor="file-upload" className="custom-file-upload" style={{ cursor: "pointer" }}>
              <div className="d-flex flex-column align-items-center px-5">
                <CameraFill className="text-light fs-4" />
                <p className="text-light">Aggiungi foto</p>
              </div>
            </Form.Label>
            <Form.Control type="file" id="file-upload" name="file" className="bg-transparent text-none border-0" />
          </Form.Group>
        </Form>

        <div className="d-flex flex-column align-items-center px-5">
          <Trash3Fill className="text-light fs-4" />
          <p className="text-light">Elimina</p>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfilePicModal;
