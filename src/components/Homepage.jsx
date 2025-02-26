import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container>
      <h1>Homepage</h1>
      <Link to="/main-content" className="btn btn-info m-5 text-light d-block">
        Go to Profile
      </Link>
    </Container>
  );
};

export default Homepage;
