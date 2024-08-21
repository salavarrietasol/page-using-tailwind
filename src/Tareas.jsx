import { useState } from "react";

function Tareas() {
    // Estado para almacenar la lista de tareas
    const [tareas, setTareas] = useState([]);
    // Estado para el valor del input de la nueva tarea
    const [nuevaTarea, setNuevaTarea] = useState('');

    // Función para manejar el cambio en el campo de entrada
    const manejarCambio = (evento) => {
        setNuevaTarea(evento.target.value);
    };

    // Función para agregar una nueva tarea a la lista
    const agregarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea('');
        }
    };

    // Función para eliminar una tarea
    const eliminarTarea = (indice) => {
        setTareas(tareas.filter((_, i) => i !== indice));
    };

    return (
        <div className="flex flex-col items-center mt-12">
            <h1 className="mb-6 text-2xl font-bold text-gray-700">Lista de Tareas ✅</h1>
            <input
                type="text"
                placeholder="Nueva tarea"
                value={nuevaTarea}
                onChange={manejarCambio}
                className="w-64 p-3 mb-4 text-lg bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
            />
            <button
                onClick={agregarTarea}
                className="px-6 py-2 mb-6 text-white transition-colors duration-300 bg-purple-500 rounded-lg hover:bg-purple-600"
            >
                Agregar a la Lista
            </button>
            <ul className="w-64 p-0 list-none">
                {tareas.map((tarea, indice) => (
                    <li key={indice} className="flex items-center justify-between p-3 mb-3 bg-gray-100 rounded-lg shadow-md">
                        <span className="text-gray-700">{tarea}</span>
                        <button
                            onClick={() => eliminarTarea(indice)}
                            className="px-2 py-1 text-white transition-colors duration-300 bg-red-500 rounded-lg hover:bg-red-600"
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tareas;
