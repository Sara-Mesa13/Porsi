import React from 'react';
import "../style/Sugerencias.css";


export const Sugerencias = () => {
  return (
    <div className="Sugerencias">
      <h1 className="TituloSuge"> 
      <img className="img" src="../img/FlechaA.png" alt="" /> 
      Sugerencias</h1>
      
      <div className="Prin">
        <h1 className="Elte"> Deja tu sugerencia o comentario aquí </h1>
        <img className="Flechis" src="../img/Flechis.png" alt="" /> 
      </div>
      
      
      <div className="Come">
        <label for="inputSuge" className=" Comen"> </label>
        <input type="Suco" id="inputSuge" className="form-control2" placeholder="Ej:la aplicación me gusta. " required="" autofocus="" />
 
                                                                                  

      </div>


</div>
);
}