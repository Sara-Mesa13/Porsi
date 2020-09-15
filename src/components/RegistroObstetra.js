import React from "react";
import "../style/RegistroObstetra.css";

export const RegistroObstetra = () => {
  return (
    <div className="RegistroObstetra">
      <form className="form-signin">
  
          
          <h1 className="Titulo"> 
          <img className="img" src="../img/FlechaA.png" alt="" /> 
          Registro </h1>
     

        <div className="Casillas">
          <p className=""> Nombres: </p>
            <label for="inputEmail" className="sr-only"> </label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Albeiro" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Apellidos: </p>
            <label for="inputPassword" className="sr-only"> </label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Suarez Zapata" required="" />
        </div>

        <div className="Casillas">
          <p className=""> Correo Electrónico: </p>
            <label for="inputEmail" className="sr-only"> </label>
          <input type="email" id="inputEmail" className="form-control" placeholder="zapataA.12@gmail.com" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Contraseña: </p>
            <label for="inputEmail" className="sr-only"> </label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Alber.12zapata" required="" autofocus="" />
        </div>

        <button className="BotonR btn-lg btn-primary btn-block" type="submit">
          Registrar
        </button>
      </form>

    </div>
  );
};