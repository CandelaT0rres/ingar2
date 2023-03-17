import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Services from "../components/pages/Services";
import Contact from "../components/pages/Contact";
import { Nav } from "../components/layout/Nav";

export const NavbarComp = () => {
  return (
    <BrowserRouter>
      {/* Header */}

      {/* Nav */}
      
        <Nav />

      {/* Sidebar */}

      {/* Contenido */}
        <div>
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>

      {/* Footer */}
    </BrowserRouter>
  );
};
