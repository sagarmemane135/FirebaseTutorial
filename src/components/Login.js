
import { React, useState } from 'react'
import { Form, Alert } from "react-bootstrap"
import { Button } from "react-bootstrap"
import GoogleButton from 'react-google-button'
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from '../context/UserAuthContext'



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home")
    } catch (err) {
      setError(err.message);
    }

  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  }



  return (
    <>
      <div className="window">

        <div className="p-4 box">
          <h2 className="mb-3">Firebase Auth Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <Form.Label >
                <Link to="/reset">Forgot Password ?</Link>
              </Form.Label>
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit">
                Log In
              </Button>
            </div>
          </Form>
          <hr />
          <div>
            <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn}
            />
          </div>
        <div className="p-4 box mt-3 text-center">
          Don't have an account?
          <Link to="/signup">Sign up</Link>
        </div>
        </div>
      </div>
    </>
  )
}

export default Login