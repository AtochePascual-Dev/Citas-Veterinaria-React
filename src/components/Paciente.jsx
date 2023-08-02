const Paciente = ({ paciente, setPaciente, pacientes, setPacientes }) => {
  const { nombre, propietario, email, fecha, sintoma, id } = paciente;

  const eliminarPaciente = () => {
    const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id);
    setPacientes(pacientesActualizados)
  };


  return (
    <div className="mb-5 px-5 py-10 rounded-lg shadow-lg bg-white">
      <p className="mb-1 font-bold uppercase text-gray-900">Nombre: <span className="font-normal normal-case">{nombre}</span></p>
      <p className="mb-1 font-bold uppercase text-gray-900">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
      <p className="mb-1 font-bold uppercase text-gray-900">Email: <span className="font-normal normal-case">{email}</span></p>
      <p className="mb-1 font-bold uppercase text-gray-900">Fecha: <span className="font-normal normal-case">{fecha}</span></p>
      <p className="mb-5 font-bold uppercase text-gray-900">Sintomas: <span className="font-normal normal-case"> {sintoma}</span></p>

      <div className="flex justify-between">
        <button
          className="px-10 py-3 font-bold uppercase rounded-md text-white bg-indigo-600 transition-colors duration-300 hover:bg-indigo-700"
          onClick={() => setPaciente(paciente)}>
          Editar
        </button>
        <button
          className="px-10 py-3 font-bold uppercase rounded-md text-white bg-red-600 transition-colors duration-300 hover:bg-red-700"
          onClick={eliminarPaciente}>
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente