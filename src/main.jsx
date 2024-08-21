import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MeGusta from './MeGusta.jsx'
import Saludo from "./Saludo.jsx";
import HolaMundo from './HolaMundo.jsx';
import Contador from './contador.jsx';
import Formulario from './Formulario.jsx';
import Tareas from './Tareas.jsx';
import Reloj from './Reloj.jsx';
import Encuesta from './Encuesta.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="flex flex-col items-center">
      {/* Reloj en la parte superior */}
      <div className="flex justify-center w-full mb-6">
        <Reloj />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <Saludo />
        </div>
        <div>
          <Contador />
        </div>
        <div>
          <Formulario />
        </div>
        <div>
          <Tareas />
        </div>
      </div>
    </div>
    
    <div className="w-1/2 col-span-2 mx-auto">
       <Encuesta />
      </div>

  </StrictMode>,
)
