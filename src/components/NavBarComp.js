
import React from 'react'
import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import Home from './Home';
import About from './About';
import Mission from './Mission';
import Vision from './Vision';
import Values from './Values';
import Services from './Services';
import Contact from './Contact';

export const NavbarComp = () => {
  return (
    <BrowserRouter>
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
                <NavLink to='/mission'>Misión</NavLink>
                <NavLink to='/vision'>Visión</NavLink>
                <NavLink to='/values'>Valores</NavLink>
                <NavLink to='/services'>Servicios</NavLink>
                <NavLink to='/contact'>Contacto</NavLink>
                <Button variant="outline-info" class='button'>Buscar</Button>{' '}

              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>

          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/mission" element={<Mission />}></Route>
            <Route path="/vision" element={<Vision />}></Route>
            <Route path="/values" element={<Values />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>

        </div>
    </BrowserRouter>
  )
}
