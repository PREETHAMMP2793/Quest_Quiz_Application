import { useState } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Candidate.css"; // Import custom styles to match design

function Candidate() {
  const [email, setEmail] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Example job roles
  const jobRoles = [
    "Software Engineer",
    "Data Analyst",
    "Product Manager",
    "UI/UX Designer",
    "DevOps Engineer",
  ];

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page reload
    setError("");
    setLoading(true);

    // Basic validation
    if (!email || !jobRole) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    // Simulated API call for candidate login (replace with actual API call)
    setTimeout(() => {
      alert(`Login successful for ${email}. Job applied for: ${jobRole}`);
      setLoading(false);
      // Redirect or perform other actions
    }, 1000);
  };

  return (
    <div id="welcome">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="login-form-container">
            <h2 className="text-center mb-4">Candidate Login</h2>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleLogin} className="custom-form">
              {/* Email Field */}
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-input"
                />
                <div className="line"></div>
              </Form.Group>

              {/* Job Role Dropdown */}
              <Form.Group className="mb-3" controlId="formJobRole">
                <Form.Label>Job Applied For</Form.Label>
                <Form.Select
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className="custom-select"
                >
                  <option value="">Select a job role</option>
                  {jobRoles.map((role, index) => (
                    <option key={index} value={role}>
                      {role}
                    </option>
                  ))}
                </Form.Select>
                <div className="line"></div>
              </Form.Group>

              {/* Submit Button */}
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                className="w-100 custom-button"
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </Form>

            {/* Registration Link */}
            <div className="mt-3 text-center">
              <p>
                Not registered? <Link to="/register">Register here</Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* SVG Animation */}
      <svg
        className="background-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 400"
      >
        {/* Replace with your SVG animation design */}
        <circle cx="50" cy="50" r="40" fill="lightblue" />
      </svg>
    </div>
  );
}

export default Candidate;
