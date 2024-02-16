import Header from "./components/Header";
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"



function App() {

  return (
    
    <>
      <div className="conteiner mx-auto mt-16">
        <Header />
        <Formulario />
        <ListadoPaciente/>
      </div>
      
    </>
  )
}

export default App
