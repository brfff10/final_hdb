import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';

const MenuStyle = styled.div`
    width: 200px;
    position: fixed;
    height: 100%;
`;
 
class MenuBar extends Component{
    handleSelect(selectedKey) {
        
    }
    render(){
        return(
            <MenuStyle>
                <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
                <NavItem eventKey={1} href="/patients">
                List Patients
                </NavItem>
                <NavItem eventKey={2} title="Item">
                Search Patient
                </NavItem>
                </Nav>
            </MenuStyle>
        )
    }
};

export default MenuBar;

/*
    Search
    Patient Detail
    Graphs
*/