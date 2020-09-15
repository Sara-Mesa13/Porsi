import React from "react";
import "../style/RegistroMujer.css";

export const RegistroMujer = () => {
  return (
    <div className="RegistroMujer">
      <form className="form-signin">
        
        <h1 className="TituloMujer">
        <img className="img" src="../img/FlechaA.png" alt="" /> 
         Registro </h1>

        <div className="Casillas">
          <p className=""> Nombres: </p>
            <label for="inputNombre" className="sr-only"> </label>
          <input type="Nombre" id="inputNombre" className="form-control" placeholder="Isabella" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Apellidos: </p>
            <label for="inputApellido" className="sr-only"> </label>
          <input type="Apellidos" id="inputApellido" className="form-control" placeholder="Álvarez Muñoz" required="" />
        </div>

        <div className="Casillas">
          <p className=""> Correo Electrónico: </p>
            <label for="inputEmail" className="sr-only"> </label>
          <input type="email" id="inputEmail" className="form-control" placeholder="isabella@gmail.com" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Contraseña: </p>
            <label for="inputPassword" className="sr-only"> </label>
            <input type="Contraseña" id="inputPassword" className="form-control" placeholder="canelita08" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Inicio de Embarazo: </p>
            <label for="inputInicio" className="sr-only"> </label>
          <input type="Inicio" id="inputInicio" className="form-control" placeholder="15/Abril/2020" required="" autofocus="" />
        </div>

        <button className="Boton btn-lg btn-primary btn-block" type="submit">
          Registrar
        </button>
      </form>
    
    </div>
  );
};
