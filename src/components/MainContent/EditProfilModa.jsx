import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const EditProfileModal = ({ show, handleClose, profile }) => {
  const [formData, setFormData] = useState({
    name: profile.name,
    surname: profile.surname,
    summary: profile.bio,
    currentPosition: profile.title,
    industry: profile.industry,
    education: profile.education,
    location: profile.area,
    contactInfo: profile.contactInfo,
    website: profile.website,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dati aggiornati:", formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Modifica presentazione</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Migliora il tuo profilo con Premium. Sposta in alto le sezioni del profilo che vuoi mettere in evidenza, aggiungi un pulsante
          personalizzato, sfrutta l’assistente di scrittura con IA e tanto altro.
        </p>
        <p>
          <strong>Manuel e milioni di altri utenti usano Premium</strong>
        </p>
        <Button variant="outline-primary" className="w-100 mb-3">
          Prova di nuovo Premium per 0 EUR
        </Button>
        <p className="text-muted small">
          Prova gratuita di 1 mese. Annulli in qualsiasi momento. Ti invieremo un promemoria 7 giorni prima della fine del periodo di prova.
        </p>

        <Form onSubmit={handleSubmit}>
          {/* Nome e Cognome */}
          <Form.Group className="mb-3">
            <Form.Label>Nome *</Form.Label>
            <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cognome *</Form.Label>
            <Form.Control type="text" name="surname" value={formData.surname} onChange={handleChange} required />
          </Form.Group>

          {/* Nome aggiuntivo e Pronuncia del nome */}
          <Form.Group className="mb-3">
            <Form.Label>Nome aggiuntivo</Form.Label>
            <Form.Control type="text" name="additionalName" value={formData.additionalName} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Pronuncia del nome</Form.Label>
            <Form />
            <Form.Text className="text-muted">Può essere aggiunta solo usando la nostra app per dispositivi mobili</Form.Text>
          </Form.Group>

          {/* Pronomi personalizzati */}
          <Form.Group className="mb-3">
            <Form.Label>Inserisci pronomi personalizzati</Form.Label>
            <Form.Control type="text" name="pronouns" value={formData.pronouns} onChange={handleChange} />
            <Form.Text className="text-muted">
              Indica i pronomi di genere che vuoi che gli altri usino per riferirsi a te. <a href="#">Scopri di più sui pronomi di genere.</a>
            </Form.Text>
          </Form.Group>

          {/* Sommario */}
          <Form.Group className="mb-3">
            <Form.Label>Sommario</Form.Label>
            <Form.Control as="textarea" rows={1} name="summary" value={formData.summary} placeholder="..." onChange={handleChange} />
          </Form.Group>

          {/* Posizione attuale */}
          <Form.Group className="mb-3">
            <Form.Label>Posizione attuale</Form.Label>
            <Form.Control type="text" name="currentPosition" value={formData.currentPosition} onChange={handleChange} />
          </Form.Group>

          {/* Settore */}
          <Form.Group className="mb-3">
            <Form.Label>Settore</Form.Label>
            <Form.Control type="text" name="industry" value={formData.industry} onChange={handleChange} />
            <Form.Text className="text-muted">
              Architettura e design accessibili.{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Scopri di più sulle opzioni relative al settore.
              </a>
            </Form.Text>
          </Form.Group>

          {/* Formazione */}
          <Form.Group className="mb-3">
            <Form.Label>Scuola o università *</Form.Label>
            <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} required />
          </Form.Group>

          {/* Località */}
          <Form.Group className="mb-3">
            <Form.Label>Località</Form.Label>
            <Form.Control type="text" name="location" value={formData.location} onChange={handleChange} />
          </Form.Group>

          {/* Informazioni di contatto */}
          <Form.Group className="mb-3">
            <Form.Label>Informazioni di contatto</Form.Label>
            <Form.Control type="text" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
            <Form.Text className="text-muted">
              Aggiungi o modifica il tuo profilo URL, indirizzo email e altro.{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Modifica le informazioni di contatto.
              </a>
            </Form.Text>
          </Form.Group>

          {/* Sito Web */}
          <Form.Group className="mb-3">
            <Form.Label>Sito Web</Form.Label>
            <Form.Control type="text" name="website" value={formData.website} onChange={handleChange} />
            <Form.Text className="text-muted">Aggiungi un link che apparirà nella parte superiore del tuo profilo.</Form.Text>
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
