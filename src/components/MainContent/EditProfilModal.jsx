import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditProfileModal = ({ show, handleClose, profile, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    bio: "",
    title: "",
    industry: "",
    education: "",
    area: "",
    contactInfo: "",
    website: "",
  });

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || "",
        surname: profile.surname || "",
        bio: profile.bio || "",
        title: profile.title || "",
        industry: profile.industry || "",
        education: profile.education || "",
        area: profile.area || "",
        contactInfo: profile.contactInfo || "",
        website: profile.website || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Modifica presentazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nome *</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Cognome *</Form.Label>
            <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" name="bio" value={formData.bio} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Posizione attuale</Form.Label>
            <Form.Control type="text" name="title" value={formData.title} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Settore</Form.Label>
            <Form.Control type="text" name="industry" value={formData.industry} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Scuola o università *</Form.Label>
            <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Località</Form.Label>
            <Form.Control type="text" name="area" value={formData.area} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Informazioni di contatto</Form.Label>
            <Form.Control type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sito Web</Form.Label>
            <Form.Control type="text" name="website" value={formData.website} onChange={handleChange} />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Salva modifiche
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfileModal;
