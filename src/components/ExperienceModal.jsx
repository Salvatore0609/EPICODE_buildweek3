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
                sulla{" "}
                <a
                  href="https://www.linkedin.com/help/linkedin/answer/a529062/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_add_position%3BF0GRgfBiTMG9MjkwifelQQ%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  condivisione delle modifiche del profilo
                </a>
                .
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
            <Form.Control size="sm" type="text" placeholder="Esempio: Retail Sales Manager" required />
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
            <Form.Control size="sm" type="text" placeholder="Esempio: Microsoft" required />
          </Form.Group>
          <Form.Check // prettier-ignore
            type="checkbox"
            id="default-checkbox"
            label="Attualmente ricopro questo ruolo"
          />

          <Form.Label>Data di inizio*</Form.Label>
          <InputGroup className="mb-3">
            <Form.Select aria-label="Default select example" size="sm" className="me-1" required>
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
            <Form.Select aria-label="Default select example" size="sm" className="ms-1" required>
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
            <Form.Select aria-label="Default select example" size="sm" className="me-1" required>
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
            <Form.Select aria-label="Default select example" size="sm" className="ms-1" required>
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
            <Form.Control size="sm" type="text" placeholder="Esempio: Milano, Italia" required />
          </Form.Group>
          <Form.Label>Tipo di località</Form.Label>
          <Form.Select aria-label="Default select example" size="sm">
            <option>Seleziona</option>
            <option value="1">In sede</option>
            <option value="2">Ibrida</option>
            <option value="3">Da remoto</option>
          </Form.Select>
          <Form.Label>Scegli un tipo di località &#40;es. da remoto&#41;</Form.Label>
          <Form.Group className="mb-3" controlId="DescriptionTextarea1">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Sommario del profilo</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Esempio: Retail Sales Manager" />
            <Form.Label>Compare sotto il tuo nome nella parte superiore del profilo</Form.Label>
          </Form.Group>
          <Form.Label>Dove hai trovato questa offerta di lavoro?</Form.Label>
          <Form.Select aria-label="Default select example" size="sm">
            <option>Seleziona</option>
            <option value="1">Linkedln</option>
            <option value="2">Sito web dell &apos;azienda</option>
            <option value="3">Indeed</option>
            <option value="4">Altri sitin di offerte di lavoro</option>
            <option value="5">Segnalazione</option>
            <option value="6">Contattati da recruiter</option>
            <option value="7">Agenzia di selezione del personale</option>
            <option value="8">Altro</option>
          </Form.Select>
          <Form.Label>Queste informazioni verranno usate per migliorare la ricerca di lavoro su LinkedIn.</Form.Label>
          <Form.Check // prettier-ignore
            type="checkbox"
            id="default-checkbox"
            label="Mostra “ mi ha aiutato a ottenere questo lavoro” accanto a questa posizione "
          />
          <div>
            <h5>Competenze</h5>
            <p>
              Ti consigliamo di aggiungere le 5 competenze più utilizzate in questo ruolo. Appariranno anche nella
              sezione Competenze.
            </p>
            <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill ">
              + Aggiungi competenza
            </Button>
            <h5>Media</h5>
            <p>
              Aggiungi contenuti multimediali come immagini, documenti, siti o presentazioni. Scopri di più sui{" "}
              <a
                href="https://www.linkedin.com/help/linkedin/answer/a1516731?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_add_position%3BF0GRgfBiTMG9MjkwifelQQ%3D%3D"
                target="_blank"
                className="text-primary"
              >
                tipi di file multimediali supportati
              </a>
              .
            </p>
            <Button className="me-3 bg-transparent text-primary border border-primary rounded-pill ">
              + Aggiungi media
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary rounded-pill" onClick={props.onHide}>
            Salva
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ExperienceModal;
