import React from "react";
import {Button} from 'react-bootstrap'
import "../style/InicioPrincipal.css";

export const InicioPrincipal = () => {
  return (
    <div className="InicioPrincipal">
       <h1 className="Titulo"> 
          <img className="img" src="../img/FlechaA.png" alt="" /> 
          <img className="Logo" src="../img/LogoPrincipal.png" alt="" />
          INICIO 
       </h1>

       <div className="Espacio">
        <Button className="ComoFunciona btn btn-light">  
             <h3>¿Cómo</h3> 
             <h3>Funciona?</h3>
        </Button>{' '}
      </div>

      <div className="Espacio2">
        <Button className="Calendario btn btn-light">  
             <h3>Calendario</h3>
        </Button>{' '}

        <Button className="Peso btn btn-light">  
             <h3>Peso</h3>
        </Button>{' '}
      </div>

      <div className="Espacio">
        <Button className="Sugerencias1 btn btn-light">  
             <h3>Sugerencias</h3>
        </Button>{' '}
      </div>

    </div>
  );
};
