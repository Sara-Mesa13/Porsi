import React from 'react';
import "../style/Ppicontainer.css";


import { ComoMujer } from "../components/ComoMujer"
import { ComoObstetra } from '../components/ComoObstetra';
import { TipoUsuario } from '../components/TipoUsuario';
import { Bienvenida } from '../components/Bienvenida';
import { RegistroMujer } from '../components/RegistroMujer';
import { RegistroObstetra } from '../components/RegistroObstetra';
import { InicioMujer } from '../components/InicioMujer';
import { InicioObstetra } from '../components/InicioObstetra';
import { InicioPrincipal } from '../components/InicioPrincipal';
import { Comofun } from '../components/Comofun';
import { Funcale } from '../components/Funcale';
import { Funpeso } from '../components/Funpeso';
import { Peso } from '../components/Peso';
import { BuscarMadre } from '../components/BuscarMadre';
import { Sugerencias } from '../components/Sugerencias';




export default function Ppicontainer (){
  return(
    <div className="Ppicontainer">
      <Bienvenida />
      <TipoUsuario />
      <ComoMujer />
      <ComoObstetra />
      <RegistroMujer />
      <RegistroObstetra />
      <InicioMujer />
      <InicioObstetra />
      <InicioPrincipal />
      <Comofun />
      <Funcale />
      <Funpeso />
      <Peso />
      <BuscarMadre />
      <Sugerencias />
 
    </div>
  );
}