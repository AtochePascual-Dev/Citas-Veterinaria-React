import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="w-11/12 mx-auto pt-12 mb-10">
      <Header />

      <div className="grid gap-16 md:grid-cols-2">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
        />

        <p>Listado Pacientes</p>
      </div>
    </div>
  )
}

export default App
