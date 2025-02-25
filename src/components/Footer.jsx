import { Col, Container, Row, Dropdown, Form } from "react-bootstrap";
import { GearFill, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";
import { useState } from "react";

const Footer = () => {
  const [key, setKey] = useState("it_IT");

  return (
    <Container
      style={{
        fontFamily: "var(--artdeco-reset-typography-font-family-sans)",
        marginTop: "1.6rem",
        backgroundColor: "transparent",
      }}
    >
      <Row>
        <Col>
          <p>
            <a
              tabIndex="0"
              target="_blank"
              href="https://about.linkedin.com/it-it"
              className="global-footer__link global-footer__link--static t-12 t-bold"
            >
              Informazioni
            </a>
          </p>
          <p className="global-footer__link-container grid__col  ">
            <Dropdown>
              <Dropdown.Toggle variant="link" className="global-footer__link global-footer__link--static t-12 t-bold p-0">
                Privacy e condizioni
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="https://www.linkedin.com/legal/privacy-policy">Privacy Policy</Dropdown.Item>
                <Dropdown.Item href="https://www.linkedin.com/legal/user-agreement">User Agreement</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </p>
          <p>
            <a
              tabIndex="0"
              target="_blank"
              href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer"
              className="global-footer__link global-footer__link--static t-12 t-bold"
            >
              Sales Solutions
            </a>
          </p>
          <p>
            <a
              tabIndex="0"
              target="_blank"
              href="https://safety.linkedin.com"
              className="global-footer__link global-footer__link--static t-12 t-bold"
            >
              Centro sicurezza
            </a>
          </p>
        </Col>
        <Col>
          <p>
            <a
              tabIndex="0"
              target="_blank"
              href="https://www.linkedin.com/accessibility"
              className="global-footer__link global-footer__link--static t-12 t-bold"
            >
              Accessibilità
            </a>
          </p>
          <p>
            <a
              tabIndex="0"
              target="_blank"
              href="https://careers.linkedin.com/"
              className="global-footer__link global-footer__link--static t-12 t-bold"
            >
              Carriera
            </a>
          </p>
          <p>
            <a
              tabIndex="0"
              target="_blank"
              href="https://www.linkedin.com/help/linkedin/answer/62931?lang=it"
              className="global-footer__link global-footer__link--static t-12 t-bold"
            >
              Opzioni per gli annunci pubblicitari
            </a>
          </p>
          <p>
            <a
              tabIndex="0"
              target="_blank"
              href="https://mobile.linkedin.com/it-it"
              className="global-footer__link global-footer__link--static t-12 t-bold"
            >
              Mobile
            </a>
          </p>
        </Col>
        <Col>
          <p>
            <span className="d-flex align-items-start">
              <QuestionCircleFill className="mt-1" size={25} />
              <div className="ms-1">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base"
                  className="global-footer__link global-footer__link--static  t-bold"
                  aria-label="Domande? Visita il nostro Centro assistenza."
                >
                  Domande?
                </a>

                <p className="global-footer__label t-12">Visita il nostro Centro assistenza.</p>
              </div>
            </span>
          </p>
          <p className="display-flex list-style-none mb4"></p>
          <p className="display-flex list-style-none mb4">
            <span className="d-flex">
              <GearFill className="mt-1" size={25} />
              <div className="ms-1">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/psettings/"
                  className="global-footer__link global-footer__link--static  t-bold"
                  aria-label="Gestisci il tuo account e la tua privacy Vai alle impostazioni"
                >
                  Gestisci il tuo account e la tua privacy
                </a>
                <p className="global-footer__label t-12">Vai alle impostazioni</p>
              </div>
            </span>
          </p>
          <p className="display-flex list-style-none mb4">
            <span className="d-flex">
              <ShieldShaded className="mt-1" size={25} />
              <div className="ms-1">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/help/linkedin/answer/a1339724"
                  className="global-footer__link global-footer__link--static  t-bold"
                  aria-label="Trasparenza sui contenuti consigliati Scopri di più sui contenuti consigliati."
                >
                  Trasparenza sui contenuti consigliati
                </a>
                <p className="global-footer__label t-12">Scopri di più sui contenuti consigliati.</p>
              </div>
            </span>
          </p>
        </Col>
        <Col>
          <Form.Select
            id="globalfooter-select_language"
            className="global-footer__language-selection-dropdown  t-black--light t-bold"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <option value="ar_AE" lang="ar-ae">
              العربية (Arabo)
            </option>
            <option value="bn_IN" lang="bn-in">
              বাংলা (Bengali)
            </option>
            <option value="cs_CZ" lang="cs-cz">
              Čeština (Ceco)
            </option>
            <option value="da_DK" lang="da-dk">
              Dansk (Danese)
            </option>
            <option value="de_DE" lang="de-de">
              Deutsch (Tedesco)
            </option>
            <option value="el_GR" lang="el-gr">
              Ελληνικά (Greco)
            </option>
            <option value="en_US" lang="en-us">
              English (Inglese)
            </option>
            <option value="es_ES" lang="es-es">
              Español (Spagnolo)
            </option>
            <option value="fa_IR" lang="fa-ir">
              فارسی (Persiano)
            </option>
            <option value="fi_FI" lang="fi-fi">
              Suomi (Finlandese)
            </option>
            <option value="fr_FR" lang="fr-fr">
              Français (Francese)
            </option>
            <option value="hi_IN" lang="hi-in">
              हिंदी (Hindi)
            </option>
            <option value="hu_HU" lang="hu-hu">
              Magyar (Ungherese)
            </option>
            <option value="in_ID" lang="in-id">
              Bahasa Indonesia (Indonesiano)
            </option>
            <option value="it_IT" lang="it-it" selected>
              Italiano (Italiano)
            </option>
            <option value="iw_IL" lang="iw-il">
              עברית (Ebraico)
            </option>
            <option value="ja_JP" lang="ja-jp">
              日本語 (Giapponese)
            </option>
            <option value="ko_KR" lang="ko-kr">
              한국어 (Coreano)
            </option>
            <option value="mr_IN" lang="mr-in">
              मराठी (Marathi)
            </option>
            <option value="ms_MY" lang="ms-my">
              Bahasa Malaysia (Malese)
            </option>
            <option value="nl_NL" lang="nl-nl">
              Nederlands (Olandese)
            </option>
            <option value="no_NO" lang="no-no">
              Norsk (Norvegese)
            </option>
            <option value="pa_IN" lang="pa-in">
              ਪੰਜਾਬੀ (Punjabi)
            </option>
            <option value="pl_PL" lang="pl-pl">
              Polski (Polacco)
            </option>
            <option value="pt_BR" lang="pt-br">
              Português (Portoghese)
            </option>
            <option value="ro_RO" lang="ro-ro">
              Română (Rumeno)
            </option>
            <option value="ru_RU" lang="ru-ru">
              Русский (Russo)
            </option>
            <option value="sv_SE" lang="sv-se">
              Svenska (Svedese)
            </option>
            <option value="te_IN" lang="te-in">
              తెలుగు (Telugu)
            </option>
            <option value="th_TH" lang="th-th">
              ภาษาไทย (Tailandese)
            </option>
            <option value="tl_PH" lang="tl-ph">
              Tagalog (Tagalog)
            </option>
            <option value="tr_TR" lang="tr-tr">
              Türkçe (Turco)
            </option>
            <option value="uk_UA" lang="uk-ua">
              Українська (Ucraino)
            </option>
            <option value="vi_VN" lang="vi-vn">
              Tiếng Việt (Vietnamita)
            </option>
            <option value="zh_CN" lang="zh-cn">
              简体中文 (Cinese (Semplificato))
            </option>
            <option value="zh_TW" lang="zh-tw">
              正體中文 (Cinese (Tradizionale))
            </option>
          </Form.Select>
        </Col>
      </Row>
      <p className="t-12 t-black--light t-normal text-align-left clear-both">LinkedIn Corporation © 2025</p>
    </Container>
  );
};

export default Footer;
