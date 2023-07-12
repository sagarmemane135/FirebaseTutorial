import './App.css';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute"
import Login from './components/Login';
import Signup from './components/Signup'
import Home from './components/Home';
import { Container,Row,Col } from 'react-bootstrap';
import { UserAuthContextProvider } from './context/UserAuthContext';
import PasswordReset from './components/PasswordReset';
import Feedback from './components/Feedback';
function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/feedback" element={<ProtectedRoute><Feedback /></ProtectedRoute>} />
              <Route path="/reset" element={<PasswordReset />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
