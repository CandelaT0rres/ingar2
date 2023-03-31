import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

export const NavBar = () => {
  return (
    <div>
          <Navbar bg="dark" variant={"dark"} expand="lg" className= "navBarPadre" title="Dropdown" id="basic-nav-dropdown" >
            <Navbar.Brand href="#">INGAR</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

              <Nav
                className="mr-auto my-2 my-lg-0 nav-bar"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavLink to='/home'>Inicio</NavLink>
                <NavLink to='/about'>Quiénes Somos</NavLink>
                <NavLink to='/services'>Servicios</NavLink>
                <NavLink to='/contact'>Contacto</NavLink>
                <Button variant="outline-info" class='button'>Buscar</Button>{' '}

              </Nav>

            </Navbar.Collapse>
          </Navbar>
    </div>

  )
}
