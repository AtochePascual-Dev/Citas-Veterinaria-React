import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPacientes, setPaciente }) => {
  return (
    <div>

      <h2 className="text-3xl font-black text-center">{pacientes.length ? 'Listado Pacientes' : 'No hay pacientes'}</h2>

      {
        pacientes.length
          ? <p className="mb-10 font-bold text-center" >Administra tus pacientes y <span className="text-indigo-600">citas</span></p>
          : <p className="mb-10 font-bold text-center" >Empieza añadiento un <span className="text-indigo-600">paciente</span></p>
      }

      <div className="md:h-screen md:overflow-y-scroll scroll-modificado">
        {
          pacientes.map((paciente) =>
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              pacientes={pacientes}
              setPacientes={setPacientes}
            />)
        }
      </div>
    </div>
  )
}

export default ListadoPacientes