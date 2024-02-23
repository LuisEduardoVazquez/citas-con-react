import { useState } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"




function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <>

      <div className="conteiner mx-auto mt-10">
        
        <Header />

        <div className="mt-12 md:flex">
          <Formulario 
            pacientes = {pacientes}
            setPacientes = {setPacientes}
          />
          <ListadoPaciente
            pacientes = {pacientes}
          />
        </div>
        
      </div>
      
    </>
  )
}

export default App
