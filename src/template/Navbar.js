import React, { useContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Alert, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../context/auth-context";

const NavbarTemplate = () => {

  const authCtx = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      console.log(authCtx);
      setError('');
      await authCtx.logout();

      useHistory.push('/login');
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Wallet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="accounts">
              Accounts
            </Nav.Link>
            <Nav.Link as={Link} to="transactions">
              Transactions
            </Nav.Link>
          </Nav>
          <Nav>
              <NavDropdown title={authCtx.currentUser.email}>
                <NavDropdown.Item onClick={handleLogout} >Logout</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {error && <Alert variant="danger">{error}</Alert>}
    </Navbar>
    
  );
};

export default NavbarTemplate;
