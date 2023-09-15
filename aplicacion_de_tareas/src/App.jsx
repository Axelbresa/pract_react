import './App.css';
import freecodecamp_logo from "./img/honda.png";
import Tarea from './componentes/tarea';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
         src={freecodecamp_logo}
          className='freecodecamp-logo' />
      </div>
      <div className='lista-principal'>
        <h1>Mis tares</h1>
        <Tarea texto="aprender react"/>
      </div>
    </div>
  );
}

export default App;
