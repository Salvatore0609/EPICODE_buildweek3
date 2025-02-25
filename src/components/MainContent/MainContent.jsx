import { Col, Container, Row } from "react-bootstrap";

import ProfileSection from "./ProfileSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillSection from "./SkillsSection";
import InterestSection from "./InterestsSection";
import ActivitySection from "./ActivitySection";

const MainContent = () => {
  return (
    <Container>
      <Row className="gap-4 d-flex justify-content-center border-0 ">
        <Col md={8}>
          {/* PANNELLO PRINCIPALE */}
          <ProfileSection />
          {/* ANALISI */}
          <ActivitySection />
          {/* ESPERIENZE */}
          <ExperienceSection />
          {/* FORMAZIONE */}
          <EducationSection />

          {/* COMPETENZE */}
          <SkillSection />
          {/* INTERESSI */}
          <InterestSection />
        </Col>
        {/* ----------- */}
        <Col md={2} className=" ">
          <Row>
            <Col className="border border-2 border-secondary-subtle  mt-4">
              <p>Lingua del Profilo</p>
              <p>Profilo pubblico e Url</p>
            </Col>
          </Row>

          <Row>
            <Col className="border border-2 border-secondary-subtle  mt-3">
              <p>Altre visualizzazioni</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-secondary-subtle   mt-3">
              <p>persone che potresti conoscere</p>
            </Col>
          </Row>
          <Row>
            <Col className="border border-2 border-secondary-subtle  mt-3">
              <p>potrebbe interessarti</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
