import React, { useState } from 'react'
import { Form, Alert } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'
import {Link}  from 'react-router-dom'


const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { passwordReset } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await passwordReset(email);
      navigate("/");
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <>
      <div className="window">

        <div className="p-4 box">
          <h2 className="mb-3">Firebase Auth Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" type="Submit" >
                Send Email
              </Button>
            </div>
          </Form>
        <div className="p-4 box mt-3 text-center">
        Already have an account? 
        <Link to="/">Log In</Link>
      </div> 
        </div>
      </div>
    </>
  )
}

export default PasswordReset