import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { CameraFill, Trash3Fill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { updateProfilePicture } from "../../redux/action/profileAction";
import { setProfile } from "../../redux/reducers/profileSlice";

const ProfilePicModal = ({ onUploadSuccess, ...props }) => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    console.log(file);
    if (!file) return;

    try {
      // Crea il FormData per includere l'immagine

      /* const formData = new FormData();
      formData.set("profile", file);
      console.log({ file, formData }); */

      // Usa updateProfile per aggiornare il profilo con l'immagine
      const updatedProfile = await updateProfilePicture(/* formData */);

      if (!updatedProfile || !updatedProfile.image) {
        throw new Error("Il server non ha restituito un profilo valido.");
      }

      console.log("Immagine aggiornata: ", updatedProfile);

      // Aggiorna il profilo nel Redux state
      dispatch(setProfile(updatedProfile));

      // Notifica al componente padre che l'upload è avvenuto con successo
      if (onUploadSuccess) {
        onUploadSuccess(updatedProfile);
      }

      // Chiudi il modal
      props.onHide();
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error);
      /*  alert("Si è verificato un errore durante il caricamento dell'immagine."); */
    }
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton className="bg-dark">
        <Modal.Title id="contained-modal-title-vcenter" className="text-light">
          Foto Profilo
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark">
        {imagePreview && (
          <div className="d-flex justify-content-center">
            <img src={imagePreview} alt="Anteprima immagine" style={{ maxWidth: "100%", maxHeight: "300px" }} />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer className="bg-dark d-flex justify-content-between">
        <Form onSubmit={handleUpload} enctype="multipart/form-data">
          <Form.Group className="d-flex align-items-center">
            {!file ? (
              <Form.Label htmlFor="file-upload" className="custom-file-upload" style={{ cursor: "pointer" }}>
                <div className="d-flex flex-column align-items-center px-5">
                  <CameraFill className="text-light fs-4" />
                  <p className="text-light">Aggiungi foto</p>
                </div>
              </Form.Label>
            ) : (
              <div>
                <button className="btn btn-primary bg-transparent border-secondary" type="submit">
                  Carica immagine
                </button>
              </div>
            )}
            <Form.Control
              type="file"
              id="file-upload"
              name="profile"
              className="bg-transparent text-none border-0"
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
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
