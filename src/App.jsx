import Header from "./components/Header";
import Formulario from "./components/Formulario"
import ListadoPaciente from "./components/ListadoPaciente"



function App() {

  return (
    
    <>
      <div className="conteiner mx-auto mt-10">
        
        <Header />

        <div className="mt-12 md:flex">
          <Formulario />
          <ListadoPaciente/>
        </div>
        
      </div>
      
    </>
  )
}

export default App
