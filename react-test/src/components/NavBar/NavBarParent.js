import React, { Component } from 'react';
import logo from '../../medical (1).svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
 
class NavbarParent extends Component {
  render() {
      return <div className="App">
          <Navbar>
              <Navbar.Header>
              <Navbar.Brand>
                  <a href="/"> Medical Database </a>
              </Navbar.Brand>
              </Navbar.Header>
              <Nav>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1} href="profile"> My Profile </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.2} href="patients"> My Patients </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3} href="/requests"> Requests </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4}> Separate Link </MenuItem>
              </NavDropdown>
              <NavItem eventKey={4} href="/about"> About </NavItem>
              </Nav>
          </Navbar>
      </div>;
  }
}

export default NavbarParent;