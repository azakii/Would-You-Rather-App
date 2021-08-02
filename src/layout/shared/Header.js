import React, { Component } from "react";
import Authorizeduser from './Authorizeduser';
import Logo from "../../assets/img/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/"><img src={Logo} className="logo" alt="Would you rather?" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavLink className="nav-link" activeClassName="active" to="/add">New Question</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/leaderboard">leaderboard</NavLink>
              </Nav>
              <Nav>
                <Navbar.Text>
                    <Authorizeduser />
                </Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </React.Fragment>
    );
  }
}