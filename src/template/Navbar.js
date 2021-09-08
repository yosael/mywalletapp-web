import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarTemplate = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="dashboard">
          Wallet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="dashboard">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="accounts">
              Accounts
            </Nav.Link>
            <Nav.Link as={Link} to="incomes">
              Transactions
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarTemplate;
