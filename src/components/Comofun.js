import React from 'react';
import {Button} from 'react-bootstrap'
import "../style/Comofun.css";

export const Comofun = () => {
  return (
    <div className="Comofun">
      <h1 className="Usuario">
      <img className="img" src="../img/FlechaA.png" alt="" /> 
      ¿Cómo funciona?</h1>
       
       <div className="Espacio">
        <Button className="Calenda btn btn-light">
           <img className="Calendario1"
             src="./img/Calendario.png"
             alt="Calendario"/>
             Calendario  
        </Button>{' '}
      </div>
      
      <div className="Espacio1">
        <Button className="Calenda btn btn-light">  
          <img className="Peso1"
             src="./img/Peso.png"
             alt="Pesito"/>
             Peso
        </Button>{' '}
      </div>

    </div>
 )
};