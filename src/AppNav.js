import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';



// Put any other imports below so that CSS from your
// components takes precedence over default styles.


class AppNav  extends Component {
    state = {  }
    render() { 
        return (
    
          <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Ex.tracker application</NavbarBrand>
            <NavbarToggler />
            <Collapse navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                &nbsp;
                &nbsp;
                &nbsp;
                &emsp;
                &emsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                </NavItem>
                <NavItem>
                  <NavLink></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Home/">Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/categories">Categories</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/users">Users</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/expenses">Expenses</NavLink>
                </NavItem>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                  <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bell-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                  </svg>   Notification
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      N 1
                    </DropdownItem>
                    <DropdownItem>
                      N 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      N 3
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
             
            </Collapse>
          </Navbar>
        </div>
          );
    }
}
 
export default AppNav;