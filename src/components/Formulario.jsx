const Formulario = () => {


  return (
    <div>
      <h2 className="text-3xl font-black text-center">Seguimiento Pacientes</h2>
      <p className="mb-10 font-bold text-center">Añade Pacientes y <span className="text-indigo-600">Administralos</span></p>

      <form className="px-5 py-10 rounded-lg bg-white shadow-lg" >
        <div className="mb-5">
          <label htmlFor="mascota" className="mb-1 block font-bold text-gray-700 uppercase">Mascota</label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="w-full p-3 border outline-none rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="mb-1 block font-bold text-gray-700 uppercase">propietario</label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="w-full p-3 border outline-none rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="mb-1 block font-bold text-gray-700 uppercase">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Correo@correo.com"
            className="w-full p-3 border outline-none rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="mb-1 block font-bold text-gray-700 uppercase">Fecha</label>
          <input
            id="fecha"
            type="date"
            className="w-full p-3 border outline-none rounded-md" />
        </div>

        <div className="mb-5">
          <label htmlFor="sintoma" className="mb-1 block font-bold text-gray-700 uppercase">Sintomas</label>
          <textarea
            id="sintoma"
            rows="3"
            className="w-full p-3 border outline-none rounded-md">
          </textarea>
        </div>

        <input
          type="submit"
          value="agregar papciente"
          className="w-full p-3 font-bold uppercase cursor-pointer transition-colors duration-300 text-white bg-indigo-600 hover:bg-indigo-700" />
      </form>
    </div>
  )
}

export default Formulario