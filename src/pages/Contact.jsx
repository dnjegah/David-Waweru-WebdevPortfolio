import { Col, Form, FormGroup, Row, Button } from "react-bootstrap";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    } else {
      const mailtoLink = `mailto:flemhousetech@gmail.com?subject=Contact from ${
        formData.name
      }&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setSuccessMessage("Your message has been prepared in your email client!");

      console.log(formData);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div>
      <h2>Contact</h2>

      <p>Contact me!</p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Row className="mb-3">
            <Col md="8" lg="6" xl="4">
              <Form.Control
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md="8" lg="6" xl="4">
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md="8" lg="6" xl="4">
              <Form.Control
                as="textarea"
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.name}
                style={{ height: "140px" }}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Col>
          </Row>
        </FormGroup>

        <Button type="submit" className="submit-btn mb-3">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
