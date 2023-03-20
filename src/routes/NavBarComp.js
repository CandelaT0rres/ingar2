import React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { About } from "../components/pages/About";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";
import { Services } from "../components/pages/Services";


export const NavbarComp = () => {
  return (
    <>
      <BrowserRouter>
        {/* Header */}

          <Header />

        {/* Nav */}
          <Nav />


        {/* Sidebar */}
          <Sidebar />

        {/* Contenido */}
          <div>
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>

        {/* Footer */}
          <Footer />
      </BrowserRouter>
    </>
  )
};
