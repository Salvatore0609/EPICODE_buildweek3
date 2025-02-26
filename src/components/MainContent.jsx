import { Col, Container, Row } from "react-bootstrap";

import ProfileSection from "./MainContent/ProfileSection";
import ExperienceSection from "./MainContent/ExperienceSection";
import EducationSection from "./MainContent/EducationSection";
import SkillSection from "./MainContent/SkillsSection";
import InterestSection from "./MainContent/InterestsSection";
import ActivitySection from "./MainContent/ActivitySection";
import ProfileSettings from "./MainContentSide/ProfileSettings";
import MaybeYouKnow from "./MainContentSide/MaybeYouKnow";
import Interestings from "./MainContentSide/Interestings";

const MainContent = () => {
  return (
    <Container>
      <Row className="gap-4 d-flex flex-nowrap justify-content-center border-0 ">
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
        <Col md={4}>
          {/* SETTINGS PROFILO */}
          <ProfileSettings />
          {/* ALTRE VISUALIZZAZIONI */}
          <MaybeYouKnow />
          {/* POTREBBE INTERESSARTI */}
          <Interestings />
        </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
