import React, { useState } from 'react';

const Encuesta = () => {
  // Estado para la opción seleccionada
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

  // Opciones de respuesta
  const opciones = ['Game of Thrones', 'The Last of Us', 'Modern Family   '];

  return (
    <div className="max-w-lg p-6 mx-auto bg-gray-100 border border-gray-200 rounded-lg shadow-lg">
      <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Encuesta 📊</h2>
      <form>
        <div className="flex flex-col items-center">
        <h2 className="mb-6 font-bold text-center text-gray-800">¿Cuál es tu serie favorita?</h2>
          {opciones.map((opcion) => (
            <div key={opcion} className="flex items-center mb-4">
              <input
                type="radio"
                name="encuesta"
                value={opcion}
                checked={opcionSeleccionada === opcion}
                onChange={() => setOpcionSeleccionada(opcion)}
                className="w-5 h-5 text-blue-500 border-gray-300 form-radio focus:ring-blue-500"
              />
              <label className="ml-3 text-lg text-gray-700 cursor-pointer">
                {opcion}
              </label>
            </div>
          ))}
        </div>
      </form>
      <div className="p-4 mt-6 bg-white border-t border-gray-200 rounded-lg shadow-sm items center">
        <center><p className="text-lg font-semibold text-gray-800">Opción seleccionada:</p></center>
        <center>{opcionSeleccionada} {opcionSeleccionada ? '⭐' : ''}</center>
      </div>
    </div>
  );
};

export default Encuesta;


