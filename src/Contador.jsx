import { useState } from 'react'

function Contador() {
    // Declaración de un estado llamado "count" con un valor inicial de 0
    const [count, setCount] = useState(0);

    // Función para incrementar el contador
    const incrementar = () => {
        setCount(count + 1);
    };

    // Función para decrementar el contador
    const decrementar = () => {
        setCount(count - 1);
    };

    return (
        <div className="flex flex-col items-center mt-12">
            <h1 className="mb-6 text-2xl font-bold text-gray-700">
                Contador ⏳: {count}
            </h1>
            <div className="space-x-4">
                <button
                    onClick={incrementar}
                    className="px-6 py-2 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                    Incrementar
                </button>
                <button
                    onClick={decrementar}
                    className="px-6 py-2 text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                >
                    Decrementar
                </button>
            </div>
        </div>
    );
}

export default Contador;
