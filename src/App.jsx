import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) || []);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]);


  return (
    <div className="w-11/12 mx-auto pt-12 mb-10">
      <Header />

      <div className="grid gap-16 md:grid-cols-2">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />

        <ListadoPacientes
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
      </div>
    </div>
  )
}

export default App
