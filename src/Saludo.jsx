import { useState } from 'react';

function Saludo() {
    // Declaración del estado "nombre" con un valor inicial de cadena vacía
    const [nombre, setNombre] = useState('');

    // Función que se llama cada vez que cambia el valor del input
    const manejarCambio = (evento) => {
        setNombre(evento.target.value);
    };

    return (
        <div className="flex flex-col items-center mt-12">
            <h1 className="mb-4 text-2xl font-bold text-gray-700">
                {nombre ? `¡Hola, ${nombre}! 👋` : 'Escribe tu nombre...'}
            </h1>
            <input
                type="text"
                placeholder="Escribe tu nombre"
                value={nombre}
                onChange={manejarCambio}
                className="w-64 p-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
        </div>
    );
}

export default Saludo;
