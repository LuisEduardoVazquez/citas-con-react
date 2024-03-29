import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"




function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) =>{
    const pacienteActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacienteActualizados)

  }

  useEffect(() => {
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[])

  useEffect(() => {

    localStorage.setItem('pacientes', JSON.stringify(pacientes));

  },[pacientes])

  

  return (
    <>

      <div className="conteiner mx-auto mt-10">
        
        <Header />

        <div className="mt-12 md:flex">
          <Formulario 
            pacientes = {pacientes}
            setPacientes = {setPacientes}
            paciente = {paciente}
            setPaciente = {setPaciente}
          />
          <ListadoPaciente
            pacientes = {pacientes}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
          />
        </div>
        
      </div>
      
    </>
  )
}

export default App
