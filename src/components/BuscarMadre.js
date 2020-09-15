import React from 'react';
import "../style/BuscarMadre.css";
import {Button} from 'react-bootstrap'

export const BuscarMadre = () => {
  return (
    <div className="BuscarMadre">
      <h1 className="TituloBuscar"> 
      <img className="img" src="../img/FlechaA.png" alt="" /> 
      Buscar Madre</h1>
      
      <div className="BuscarM">
        <h1 className="CorreoE"> Correo Electrónico: </h1>
      </div>
      
      <div className="BuscarM">
        <label for="inputBuscar" className="BusMa"> </label>
        <input type="madre" id="inputBuscar" className="maform-control" placeholder="Vilma" required="" autofocus="" />
      
        <Button className="iconoUsuario">
          <img className="icono" src="../img/Usuario.png" alt="" /> 
        </Button>{' '}
      </div>

    </div>
  )
}