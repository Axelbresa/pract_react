import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import freecodecamplogo from './img/honda-logo.jpg';
import { useState } from 'react';

function App() {

  const [numclics, setNumClics]=useState(0);


  const manejarClic=()=>{
    setNumClics (numclics + 1); 
  }
  const reinciarContador=()=>{
    setNumClics(0);
  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo' 
        src={freecodecamplogo}
         alt='logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numclics}/>
        <Boton
        texto="clic"
        botonDeClic={true}
        manejarClic={manejarClic}/>
        <Boton 
        texto="reinciar"
        botonDeClic={false}
        manejarClic={reinciarContador}/>
        
      </div>
    </div>
  );
}

export default App;
