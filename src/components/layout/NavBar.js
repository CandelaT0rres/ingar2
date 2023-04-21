import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';


export const NavBar = () => {
  return (
    <div  className='navBar'>
          <Navbar bg="ligth" variant={"ligth"} expand="lg" className= "navBarPadre"  title="Dropdown" id="basic-nav-dropdown" >
            <Navbar.Brand href="#" className='ms-5'>INGAR</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className= 'd-flex justify-content-center'>

              <Nav 
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavLink className='ms-4 boton nav-link fw-bold fs-5' to='/home'>Inicio</NavLink>
                <NavLink className='ms-4 boton nav-link fw-bold fs-5' to='/about'>Quiénes Somos</NavLink>
                <NavLink className='ms-4 boton nav-link fw-bold fs-5' to='/services'>Servicios</NavLink>
                <NavLink className='ms-4 boton nav-link fw-bold fs-5' to='/contact'>Contacto</NavLink>

                
              
              </Nav>

            </Navbar.Collapse>
          </Navbar>
    </div>

  )
}
