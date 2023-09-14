import React from "react";
import "../hojas_stilos/testimonios.css"

function Testimonio(props){
  return (
 <div div className="contenedor-testimonio">
  <img 
  className="imagen-testimonio"
  src={require(`../img/testimonio-${props.imagen}.jpg`)}
  alt="foto de emma"
  />
    <div className="contenedor-texto-testimono">
      <p className="nombre-testimonio">
        <strong>{props.nombre}</strong>  en {props.pais}
      </p>
      <p className="cargo-testimonio">
        {props.cargo} en <strong>{props.empresa}</strong>
         </p>
      <p className="texto-testimonio">{props.testimonio}</p>
    </div>
  </div>
    );
}

export default Testimonio;