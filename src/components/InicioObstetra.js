import React from "react";
import "../style/InicioObstetra.css";

export const InicioObstetra = () => {
  return (
    <div className="InicioObstetra">
      <form className="form-signin">

        <h1 className="Titulo"> 
        <img className="img" src="../img/FlechaA.png" alt="" /> 
        Inicio de Sesión </h1>
        <img className="LogoPrincipal" src="../img/LogoPrincipal.png" alt="Logo" /> 

        <div className="Casillas">
          <p className=""> Correo Electrónico: </p>
            <label for="inputEmail" className="sr-only"> </label>
          <input type="Email" id="inputEmail" className="form-control" placeholder="zapataA.12@gmail.com" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Contraseña: </p>
            <label for="inputPassword" className="sr-only"> </label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Alber.12zapata" required="" />
        </div>

        <button className="Boton btn-lg btn-primary btn-block" type="submit">
          Iniciar Sesión
        </button>
        <p class="mt-5 mb-3 text-muted">© 2020-PPI</p>
      </form>
    
    </div>
  );
};
