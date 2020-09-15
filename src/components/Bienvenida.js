import React from "react";
import { Button } from "react-bootstrap";
import "../style/Bienvenida.css";

export const Bienvenida = () => {
  return (
    <div className="Bienvenida">
   
      <h1 className="Bienve"> Bienvenidad a </h1>
      <h2 className="Nine"> NINE MONTHS </h2>
      <h2 className="Nine"> OF LOVE </h2>
      <img className="Logito" src="../img/LogoPrincipal.png" alt="LogoPrincipal" />
      <Button className="Siguiente">Siguiente</Button>{" "}

    </div>
   );
};
