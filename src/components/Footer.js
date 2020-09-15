import React from "react";
import "../style/Footer.css";

export const Footer = () => {
  return (
    <div className="Footer">
      <footer className="container">
        <div className="row">
          <div className="col-12 col-md">
            <img className="Gerentes" src="./img/Geren.jpg" alt="Gerentes" />
            <small className="d-block mb-3 text-muted">&copy;2020</small>
          </div>
          <div className="col-6 col-md">
            <h4>Integrantes:</h4>
            <ul className="list-unstyled text-danger">
              <li>
                <h6 className="text">Anderson Diaz Aguirre</h6>
              </li>
              <li>
                <h6 className="text">Deisy Diaz Zapata</h6>
              </li>
              <li>
                <h6 className="text">Michael Martinez Jaramillo</h6>
              </li>
              <li>
                <h6 className="text">Sara Yulieth Soto Mesa</h6>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h4>Redes sociales:</h4>
            <ul className="list-unstyled text-small">
              <img className="Logo3" src="../img/Facebook.png" alt="Facebook" />{" "}
              <li>
                <a className="text-light" href="https://www.facebook.com/">
                  Facebook: Nine-Months
                </a>
              </li>
              <img className="Logo3" src="../img/Instagram.webp" alt="Instagram" />{" "}
              <li>
                <a className="text-light" href="https://www.instagram.com/">
                  Instagram: Nine-Months
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
