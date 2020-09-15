import React from 'react';
import "../style/ComoMujer.css";
import { Button } from 'react-bootstrap'

export const ComoMujer = () => {
  return (
    <div className="ComoMujer">
      
      <h1 className="Titulo"> 
      <img className="img" src="../img/FlechaA.png" alt="" /> 
      Ingresaste como Mujer Gestante </h1>

      <img className="LogoPrincipal" src="../img/LogoPrincipal.png" alt="LogoPrincipal"/>
      
      <div className="Espacio2">
        <Button className="Registro">
           REGISTRARSE
        </Button>{' '}
      </div>

      <div className="Espacio3">
        <Button className="InicioSesión">
           INICIAR SESIÓN
        </Button>{' '}
      </div>

    </div>
  )
}