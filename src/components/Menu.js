import React from "react";
import "../style/Menu.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export const Menu = () => {
  return (
    <div className="Menu">
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>
          {" "}
          <img className="Logo" src="../img/LogoPrincipal.png" alt="Logo" />
          Menú NMOL
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#pricing">Bienvenida</Nav.Link>
            <NavDropdown title="Opciones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Tipo Usario
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Registro Obstetra
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Registro Mujer Gestante{" "}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Iniciar Sesion
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
