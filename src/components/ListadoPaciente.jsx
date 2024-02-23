import Paciente from "./Paciente";

function ListadoPaciente({pacientes}){
    return(

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h1 className="font-black text-3xl text-center ">Listado Paciente</h1>

                    <p className="text-lg mt-5 text-center">
                        Administra tus {" "}

                        <span className="text-red-500 font-black ">
                            Pacientes y citas
                        </span>
                    </p>

                    {pacientes.map( (paciente) => {
                        return(
                            <Paciente 
                                key = {paciente.id}
                                paciente = {paciente}
                            
                            />
                        )
                    })}
                </>
            ) : (
                <>
                    <h1 className="font-black text-3xl text-center ">No hay pacientes</h1>

                    <p className="text-lg mt-5 text-center">
                        Comienza agregando pacientes {" "}

                        <span className="text-red-500 font-black ">
                            y podras administrarlos
                        </span>
                    </p>
                </>
            )}
            

            
        </div>
    )
}

export default ListadoPaciente;