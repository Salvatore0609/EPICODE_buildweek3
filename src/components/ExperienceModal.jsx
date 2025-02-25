import { Form, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ExperienceModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Aggiungi esperienza</Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <div>
              <h6>Informa la rete</h6>
              <p>
                Attiva l’opzione per informare la tua rete delle principali modifiche al profilo (ad esempio un nuovo
                lavoro) e degli anniversari lavorativi. Gli aggiornamenti possono richiedere fino a 2 ore. Scopri di più
                sulla condivisione delle modifiche del profilo.
              </p>
            </div>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              label="sì"
              className="fs-3"
            />
          </div>
          <p className="">* Indica che è obbligatorio</p>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Qualifica*</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Esempio: Retail Sales Manager" />
          </Form.Group>
          <Form.Label>Tipo di impiego</Form.Label>
          <Form.Select aria-label="Default select example" size="sm">
            <option>Seleziona</option>
            <option value="1">A tempo pieno</option>
            <option value="2">Part-time</option>
            <option value="3">Autonomo</option>
            <option value="4">Freelance</option>
            <option value="5">A contratto</option>
            <option value="6">Stage</option>
            <option value="7">Apprendistato</option>
            <option value="8">Stagionale</option>
          </Form.Select>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Azienda o organizzazione*</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Esempio: Microsoft" />
          </Form.Group>
          <Form.Check // prettier-ignore
            type="checkbox"
            id="default-checkbox"
            label="Attualmente ricopro questo ruolo"
          />

          <Form.Label>Data di inizio*</Form.Label>
          <InputGroup className="mb-3">
            <Form.Select aria-label="Default select example" size="sm" className="me-1">
              <option>Mese</option>
              <option value="1">Gennaio</option>
              <option value="2">Febbraio</option>
              <option value="3">Marzo</option>
              <option value="4">Aprile</option>
              <option value="5">Maggio</option>
              <option value="6">Giugno</option>
              <option value="7">Luglio</option>
              <option value="8">Agosto</option>
              <option value="9">Settembre</option>
              <option value="10">Ottobre</option>
              <option value="11">Novembre</option>
              <option value="12">Dicembre</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" size="sm" className="ms-1">
              <option>Anno</option>
              <option value="1">2025</option>
              <option value="2">2024</option>
              <option value="3">2023</option>
              <option value="4">2022</option>
              <option value="5">2021</option>
              <option value="6">2020</option>
              <option value="7">2019</option>
              <option value="8">2018</option>
            </Form.Select>
          </InputGroup>
          <Form.Label>Data di fine*</Form.Label>
          <InputGroup className="mb-3">
            <Form.Select aria-label="Default select example" size="sm" className="me-1">
              <option>Mese</option>
              <option value="1">Gennaio</option>
              <option value="2">Febbraio</option>
              <option value="3">Marzo</option>
              <option value="4">Aprile</option>
              <option value="5">Maggio</option>
              <option value="6">Giugno</option>
              <option value="7">Luglio</option>
              <option value="8">Agosto</option>
              <option value="9">Settembre</option>
              <option value="10">Ottobre</option>
              <option value="11">Novembre</option>
              <option value="12">Dicembre</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" size="sm" className="ms-1">
              <option>Anno</option>
              <option value="1">2025</option>
              <option value="2">2024</option>
              <option value="3">2023</option>
              <option value="4">2022</option>
              <option value="5">2021</option>
              <option value="6">2020</option>
              <option value="7">2019</option>
              <option value="8">2018</option>
            </Form.Select>
          </InputGroup>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Località*</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Esempio: Milano, Italia" />
          </Form.Group>
          <Form.Label>Tipo di località</Form.Label>
          <Form.Select aria-label="Default select example" size="sm">
            <option>Seleziona</option>
            <option value="1">In sede</option>
            <option value="2">Ibrida</option>
            <option value="3">Da remoto</option>
          </Form.Select>
          <Form.Label>Scegli un tipo di località &#40;es. da remoto&#41;</Form.Label>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ExperienceModal;
