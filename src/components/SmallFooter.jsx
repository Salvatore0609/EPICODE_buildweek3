import { useState } from "react";
import { Dropdown, Image } from "react-bootstrap";

const SmallFooter = () => {
  const [clickedLink, setClickedLink] = useState(null);

  const handleLinkClick = (e) => {
    setClickedLink(e.target.href);
  };
  return (
    <>
      <div className="mt-4">
        <ul className="d-flex flex-wrap align-items-center justify-content-center">
          <li className="me-4 no-dots">
            <a
              tabIndex="0"
              target="_blank"
              href="https://about.linkedin.com/it-it"
              className={`global-footer__link  ${
                clickedLink === "https://about.linkedin.com/it-it" ? "clicked-link" : ""
              }`}
              onClick={handleLinkClick}
            >
              Informazioni
            </a>
          </li>
          <li className="me-4 no-dots">
            <a
              tabIndex="0"
              target="_blank"
              href="https://www.linkedin.com/accessibility"
              className={`global-footer__link  ${
                clickedLink === "https://www.linkedin.com/accessibility" ? "clicked-link" : ""
              }`}
              onClick={handleLinkClick}
            >
              Accessibilità
            </a>
          </li>
          <li className="me-4 no-dots">
            <a
              target="_blank"
              href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
              className={`global-footer__link  ${
                clickedLink === "https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
                  ? "clicked-link"
                  : ""
              }`}
              aria-label="Domande? Visita il nostro Centro assistenza."
              onClick={handleLinkClick}
            >
              Centro assistenza
            </a>
          </li>
          <li className="me-4 no-dots">
            <Dropdown>
              <Dropdown.Toggle variant="link" className="global-footer__link  p-0">
                Privacy e condizioni
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="https://www.linkedin.com/legal/privacy-policy" onClick={handleLinkClick}>
                  Informativa sulla Privacy
                </Dropdown.Item>
                <Dropdown.Item href="https://www.linkedin.com/legal/user-agreement" onClick={handleLinkClick}>
                  Contratto di licenza
                </Dropdown.Item>
                <Dropdown.Item href="https://it.linkedin.com/legal/l/linkedin-pages-terms?" onClick={handleLinkClick}>
                  Termini e condizioni delle pagine
                </Dropdown.Item>
                <Dropdown.Item href="https://it.linkedin.com/legal/cookie-policy?" onClick={handleLinkClick}>
                  Informativa sui cookie
                </Dropdown.Item>
                <Dropdown.Item href="https://it.linkedin.com/legal/copyright-policy?" onClick={handleLinkClick}>
                  Informativa sul copyright
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://it.linkedin.com/legal/california-privacy-disclosure?"
                  onClick={handleLinkClick}
                >
                  Opzioni relative all Informativa sulla privacy (Stato della California)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="me-4 no-dots">
            <a
              tabIndex="0"
              target="_blank"
              href="https://www.linkedin.com/help/linkedin/answer/62931?lang=it"
              className={`global-footer__link  ${
                clickedLink === "https://www.linkedin.com/help/linkedin/answer/62931?lang=it" ? "clicked-link" : ""
              }`}
              onClick={handleLinkClick}
            >
              Opzioni per gli annunci pubblicitari
            </a>
          </li>
          <li className="me-4 no-dots">
            <a
              target="_blank"
              href="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart/"
              className={`global-footer__link  ${
                clickedLink ===
                "https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart/"
                  ? "clicked-link"
                  : ""
              }`}
              aria-label="Gestisci il tuo account e la tua privacy Vai alle impostazioni"
              onClick={handleLinkClick}
            >
              Pubblicità
            </a>
          </li>
          <li className="me-4 no-dots">
            <Dropdown>
              <Dropdown.Toggle variant="link" className="global-footer__link  p-0">
                Servizi alle aziende
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="https://www.linkedin.com/legal/privacy-policy" onClick={handleLinkClick}>
                  Informativa sulla Privacy
                </Dropdown.Item>
                <Dropdown.Item href="https://www.linkedin.com/legal/user-agreement" onClick={handleLinkClick}>
                  Contratto di licenza
                </Dropdown.Item>
                <Dropdown.Item href="https://it.linkedin.com/legal/l/linkedin-pages-terms?" onClick={handleLinkClick}>
                  Termini e condizioni delle pagine
                </Dropdown.Item>
                <Dropdown.Item href="https://it.linkedin.com/legal/cookie-policy?" onClick={handleLinkClick}>
                  Informativa sui cookie
                </Dropdown.Item>
                <Dropdown.Item href="https://it.linkedin.com/legal/copyright-policy?" onClick={handleLinkClick}>
                  Informativa sul copyright
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://it.linkedin.com/legal/california-privacy-disclosure?"
                  onClick={handleLinkClick}
                >
                  Opzioni relative all Informativa sulla privacy (Stato della California)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="me-4 no-dots">
            <a
              target="_blank"
              href="#"
              className={`global-footer__link  ${clickedLink === "#" ? "clicked-link" : ""}`}
              aria-label="Gestisci il tuo account e la tua privacy Vai alle impostazioni"
              onClick={handleLinkClick}
            >
              Scarica l&#38;app LinkedIn
            </a>
          </li>
          <li className="me-4 no-dots">
            <a
              target="_blank"
              href="#"
              className={`global-footer__link  ${clickedLink === "#" ? "clicked-link" : ""}`}
              aria-label="Gestisci il tuo account e la tua privacy Vai alle impostazioni"
              onClick={handleLinkClick}
            >
              Altro
            </a>
          </li>
        </ul>
        <div className="d-flex justify-content-center">
          <Image src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="logo LinkedIn" />
          <p className="mb-0 ms-1">LinkedIn Corporation © 2025</p>
        </div>
      </div>
    </>
  );
};

export default SmallFooter;
