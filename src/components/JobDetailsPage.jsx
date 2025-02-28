// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchJobs } from "../redux/action/jobsAction";
// import { Col, Container, Row } from "react-bootstrap";

// const JobOffersPage = () => {
//   const dispatch = useDispatch();
//   const workOffers = useSelector((state) => state.jobs.jobs);

//   useEffect(() => {
//     dispatch(fetchJobs("query"));
//   }, [dispatch]);

//   return (
//     <Container className="mt-4">
//       <Row className="g-0">
//         <Col md={6}>
//           <div className="bg-white border border-secondary-subtle mb-2 py-3 rounded-3 my-2">
//             <p>Ciao</p>
//           </div>
//         </Col>
//         <div className="bg-white border border-secondary-subtle mb-2 py-3 rounded-3 my-2">
//           <p>Ciao</p>
//         </div>
//         <Col md={6}></Col>
//       </Row>
//     </Container>
//   );
// };

// export default JobOffersPage;
