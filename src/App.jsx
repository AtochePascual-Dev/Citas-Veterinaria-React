import Formulario from "./components/Formulario"
import Header from "./components/Header"

function App() {

  return (
    <div className="w-11/12 mx-auto pt-12 mb-10">
      <Header />

      <div className="grid gap-16 md:grid-cols-2">
        <Formulario />
        <p>Listado Pacientes</p>
      </div>
    </div>
  )
}

export default App
