// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchJobs } from "../redux/action/jobsAction";
import { useEffect } from "react";
import { CloseButton, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchJobs, selectJobAction } from "../redux/action/jobsAction";

const JobDetailsPage = () => {
  const dispatch = useDispatch();
  const workOffers = useSelector((state) => state.jobs.jobs);
  const jobDetails = useSelector((state) => state.jobs.job);

  useEffect(() => {
    dispatch(fetchJobs("query"));
  }, [dispatch]);

  return (
    <Container className="mt-0">
      <Row className="g-0">
        <Col md={6}>
          <div className="bg-white border border-secondary-subtle mb-2 py-3 rounded-3-start px-2">
            <h6>Le principali offerte di lavoro per te</h6>
            <p className="text-secondary">
              In base al tuo profilo, alle tue preferenze e ad attività come candidature, ricerche e salvataggi
            </p>
            <div className="my=3">
              <ListGroup variant="flush" className={`px-4 d-block`}>
                {workOffers.map((job) => (
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
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="bg-white border border-secondary-subtle mb-2 py-3 rounded-3-endpx-2 px-2">
            <h5>{jobDetails.title}</h5>
            <p>{jobDetails.description}</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetailsPage;
