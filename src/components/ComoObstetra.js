import React from 'react';
import "../style/ComoObstetra.css";
import {Button} from 'react-bootstrap'

export const ComoObstetra = () => {
  return (
    <div className="ComoObstetra">
      <h1 className="Titulo"> 
      <img className="img" src="../img/FlechaA.png" alt="" /> 
      Ingresaste como Obstetra</h1>

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