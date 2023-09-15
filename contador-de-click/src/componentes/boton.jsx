import React from "react";
import "../Hojas_estilos/boton.css"

function Boton({ texto, botonDeClic, manejarClic }) {
    return (
        <button
            className={botonDeClic ? "botonDeClic" : "boton-reiniciar"}
            onClick={manejarClic}>
            {texto}
        </button>
    )
}
export default Boton;