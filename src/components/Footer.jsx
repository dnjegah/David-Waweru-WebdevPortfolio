import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="py-4 ">
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <p>David Waweru 2024</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
