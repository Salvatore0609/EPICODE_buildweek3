import { Form, Modal } from "react-bootstrap";

const ProfileBgModal = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Aggiungi foto di sfondo</Modal.Title>
      </Modal.Header>

      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label htmlFor="file-upload" className="custom-file-upload" style={{ cursor: "pointer" }}>
              <p className="btn btn-primary btn-sm fw-semibold rounded-pill">Modifica lo sfondo del profilo</p>
            </Form.Label>
            <Form.Control type="file" id="file-upload" name="file" className="bg-transparent text-none border-0" />
          </Form.Group>
        </Form>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileBgModal;
