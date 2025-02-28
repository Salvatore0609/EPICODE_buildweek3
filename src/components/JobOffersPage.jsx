import { Button, Card, CloseButton, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { ArrowRight, BookmarkFill, ListUl, PencilSquare, SlashSquareFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import SmallFooter from "./SmallFooter";
import { useEffect, useState } from "react";
import { fetchJobs, selectJobAction } from "../redux/action/jobsAction";
import { Link } from "react-router-dom";

const JobOffersPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const profile = useSelector((state) => state.profile);
  const workOffers = useSelector((state) => state.jobs.jobs);

  const [expand, setExpand] = useState(false);

  useEffect(() => {
    dispatch(fetchJobs("query"));
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <Row>
        <Col md={3}>
          <Card>
            <div className="position-relative">
              <Card.Img
                className="background-image"
                variant="top"
                src="https://media.licdn.com/dms/image/v2/C5616AQFyq0OEeeELiA/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1618202768321?e=1746057600&v=beta&t=orOlXEWuHIHD_jLQQq9usupmfqP6369kcOvCVO0HRyo"
                style={{ height: 80 }}
              />

              <div className="profile-image-container position-absolute top-100 start-0 translate-middle ps-5">
                <Image
                  src={profile.image}
                  alt="Profilo"
                  className="rounded-circle border border-light border-2 ms-5"
                  width="70px"
                  height="70px"
                />
              </div>
            </div>

            <Card.Body className="mt-3">
              <Card.Title className="me-3">
                {profile.name} {profile.surname}
              </Card.Title>

              <p className="m-0">{profile.title}</p>

              <Card.Text>
                <p>{profile.bio}</p>
                <p>{profile.area}</p>
                <div className="d-flex">
                  <Image src="" alt="logo azienda" width="30px" height="30px"></Image>
                  <p className="ms-2">EPICODE</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <div className="bg-white border border-secondary-subtle mb-2 py-3 rounded-3 my-2">
            <p className="mb-0 fw-semibold py-2 px-3">
              <ListUl className="fs-3 pb-1 me-1" />
              Preferenze
            </p>
            <a href="https://www.linkedin.com/my-items/saved-jobs/" target="_blank" rel="noopener noreferrer">
              <p className="mb-0 fw-semibold py-2 text-dark px-3">
                <BookmarkFill className="fs-4 pb-1 me-2" />
                Le mie offerte di lavoro
              </p>
            </a>
            <hr />
            <a
              href="https://www.linkedin.com/job-posting/?trk=flagship3_job_home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mb-0 fw-semibold py-2 text-primary px-3">
                <PencilSquare className="fs-4 pb-1 me-2" />
                Pubblica offerta gratuita
              </p>
            </a>
          </div>
          <SmallFooter />
        </Col>
        <Col md={9}>
          {expand === false ? (
            <div className="bg-white border border-secondary-subtle mb-2 pt-4 rounded-3">
              <h5 className="mb-0 px-4">Le principali offerte di lavoro per te</h5>
              <p className="text-secondary mb-0 px-4 pb-2">
                In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi
              </p>
              <ListGroup variant="flush" className={`px-4 d-block`}>
                {workOffers.slice(0, 2).map((job) => (
                  <ListGroup.Item key={job._id} className="px-0 d-flex justify-content-between">
                    <Link to={"/job-details/" + job._id} onClick={() => dispatch(selectJobAction(job))}>
                      <div className="d-flex">
                        <div className="ms-2">
                          <h6 className="mb-0 text-primary">{job.title}</h6>
                          <p className="mb-0">
                            {job.company_name} &#8226; {job.candidate_required_location} ({job.job_type})
                          </p>
                          <p className="mb-0 text-secondary">{job.publication_date}</p>
                        </div>
                      </div>
                    </Link>
                    <CloseButton />
                  </ListGroup.Item>
                ))}
              </ListGroup>
              <div className="border-top border-secondary-subtle text-center py-2">
                <Button
                  variant="transparent"
                  className="mb-0 fw-semibold"
                  onClick={() => {
                    setExpand(true);
                    // dispatch(fetchJobs("query"));
                    console.log("EXPAND" + expand);
                  }}
                >
                  Mostra tutto
                  <ArrowRight className="fs-5" />
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-secondary-subtle mb-2 pt-4 rounded-3">
              <h5 className="mb-0 px-4">Le principali offerte di lavoro per te</h5>
              <p className="text-secondary mb-0 px-4 pb-2">
                In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi
              </p>
              <ListGroup variant="flush" className={`px-4 d-block`}>
                {workOffers.map((job) => (
                  <ListGroup.Item key={job._id} className="px-0 d-flex justify-content-between">
                    <Link to={"/job-details/" + job._id}>
                      <div className="d-flex">
                        <div className="ms-2">
                          <h6 className="mb-0 text-primary">{job.title}</h6>
                          <p className="mb-0">
                            {job.company_name} &#8226; {job.candidate_required_location} ({job.job_type})
                          </p>
                          <p className="mb-0 text-secondary">{job.publication_date}</p>
                        </div>
                      </div>
                    </Link>
                    <CloseButton />
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          )}

          <div className="border-top border-warning mx-1 border-4 rounded"></div>
          <div className="bg-white border border-top-0 border-secondary-subtle mb-2 pt-4 rounded-3">
            <p className="mb-0 px-4 text-secondary">
              <SlashSquareFill className="text-warning pb-1" /> PREMIUM
            </p>
            <h5 className="mb-0 px-4">Offerte di lavoro per cui hai più chance di ricevere un riscontro</h5>
            <p className="text-secondary mb-0 px-4 pb-2">n base alle tue probabilità di ricevere una risposta</p>
            <ListGroup variant="flush" className="px-4">
              <ListGroup.Item className="px-0 d-flex justify-content-between">
                <div className="d-flex">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D0BAQGaITqsnWVZ7A/company-logo_100_100/company-logo_100_100/0/1691141093813/lidl_italia_srl_logo?e=1748476800&v=beta&t=_XnBjFWm6LCiGUoKMJmb4lweD0MWwiR70ig2hVEUZnc"
                    alt="job logo"
                    width="60px"
                    height="60px"
                  />
                  <div className="ms-2">
                    <h6 className="mb-0 text-primary">Addetto Vendite part-time 8 ore domenicali (f/m)</h6>
                    <p className="mb-0">Lidl Italia &#8226; Lissone, Lombardia, Italia (in sede)</p>
                    <p className="mb-0 text-secondary">5 giorni fa</p>
                  </div>
                </div>
                <CloseButton />
              </ListGroup.Item>
              <ListGroup.Item className="px-0 d-flex justify-content-between">
                <div className="d-flex">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D0BAQGaITqsnWVZ7A/company-logo_100_100/company-logo_100_100/0/1691141093813/lidl_italia_srl_logo?e=1748476800&v=beta&t=_XnBjFWm6LCiGUoKMJmb4lweD0MWwiR70ig2hVEUZnc"
                    alt="job logo"
                    width="60px"
                    height="60px"
                  />
                  <div className="ms-2">
                    <h6 className="mb-0 text-primary">Addetto Vendite part-time 8 ore domenicali (f/m)</h6>
                    <p className="mb-0">Lidl Italia &#8226; Lissone, Lombardia, Italia (in sede)</p>
                    <p className="mb-0 text-secondary">5 giorni fa</p>
                  </div>
                </div>
                <CloseButton />
              </ListGroup.Item>
            </ListGroup>
            <div className="border-top border-secondary-subtle text-center py-2">
              <p className="mb-0 fw-semibold">
                Mostra tutto <ArrowRight className="fs-5" />
              </p>
            </div>
          </div>

          <div className="bg-white border border-secondary-subtle mb-2 pt-4 rounded-3">
            <h5 className="mb-0 px-4">Altre offerte di lavoro per te</h5>
            <p className="text-secondary mb-0 px-4 pb-2">
              In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi
            </p>
            <ListGroup variant="flush" className="px-4">
              <ListGroup.Item className="px-0 d-flex justify-content-between">
                <div className="d-flex">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D0BAQGaITqsnWVZ7A/company-logo_100_100/company-logo_100_100/0/1691141093813/lidl_italia_srl_logo?e=1748476800&v=beta&t=_XnBjFWm6LCiGUoKMJmb4lweD0MWwiR70ig2hVEUZnc"
                    alt="job logo"
                    width="60px"
                    height="60px"
                  />
                  <div className="ms-2">
                    <h6 className="mb-0 text-primary">Addetto Vendite part-time 8 ore domenicali (f/m)</h6>
                    <p className="mb-0">Lidl Italia &#8226; Lissone, Lombardia, Italia (in sede)</p>
                    <p className="mb-0 text-secondary">5 giorni fa</p>
                  </div>
                </div>
                <CloseButton />
              </ListGroup.Item>
              <ListGroup.Item className="px-0 d-flex justify-content-between">
                <div className="d-flex">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D0BAQGaITqsnWVZ7A/company-logo_100_100/company-logo_100_100/0/1691141093813/lidl_italia_srl_logo?e=1748476800&v=beta&t=_XnBjFWm6LCiGUoKMJmb4lweD0MWwiR70ig2hVEUZnc"
                    alt="job logo"
                    width="60px"
                    height="60px"
                  />
                  <div className="ms-2">
                    <h6 className="mb-0 text-primary">Addetto Vendite part-time 8 ore domenicali (f/m)</h6>
                    <p className="mb-0">Lidl Italia &#8226; Lissone, Lombardia, Italia (publication_date)</p>
                    <p className="mb-0 text-secondary">5 giorni fa</p>
                  </div>
                </div>
                <CloseButton />
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JobOffersPage;
