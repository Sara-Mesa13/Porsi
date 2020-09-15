import React from "react";
import {button} from 'react-bootstrap'
import "../style/Peso.css";

export const Peso = () => {
 return (
    <div className="Peso3">
      <form className="form-signin">
        
        <h1 className="TituloPeso">
        <img className="img" src="../img/FlechaA.png" alt="" /> 
         MI PESO <img className="Logp" src="../img/Peso.png" alt="" />  </h1>
          

          
        <div className="Casillas">
        <p className=""> Mes 1: </p>
          
          
            <label for="inputMes1" className="sr-only"> </label>
            
          <input type="Mes1" id="inputMes4" className="form-control" placeholder="Ej: 50 kg" required="" autofocus="" />
          
        </div>

        <div className="Casillas">
          <p className=""> Mes 2: </p>
            <label for="inputMes2" className="sr-only"> </label>
          <input type="Mes2" id="inputMes2" className="form-control" placeholder="Ej: 52kg" required="" /> 
          
        </div>

        <div className="Casillas">
          <p className=""> Mes 3: </p>
            <label for="inputMes3" className="sr-only"> </label>
          <input type="Mes3" id="inputMes3" className="form-control" placeholder="Ej: 53kg" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Mes 4: </p>
            <label for="inputMes4" className="sr-only"> </label>
            <input type="Mes4" id="inputMes4" className="form-control" placeholder="Ej: 54kg" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Mes 5: </p>
            <label for="inputMes5" className="sr-only"> </label>
          <input type="Mes5" id="inputMes5" className="form-control" placeholder="Ej: 55kg" required="" autofocus="" />
        </div>

        
      </form>
   
    </div>
  );
};