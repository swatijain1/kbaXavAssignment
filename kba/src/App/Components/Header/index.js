import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

import './style.scss'

const Header = (props) => {
    const { totalItems = 0 } = props
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">KBA Exercise</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem>
              <Link to="/promises">Promises</Link>
            </NavItem>
            <NavItem>
              <Link to="/product-list">Product-list</Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
              <Link to="/cart">{`Cart ${totalItems}`}</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header