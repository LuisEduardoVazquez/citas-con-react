import Paciente from "./Paciente";

function ListadoPaciente(){
    return(

        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h1 className="font-black text-3xl text-center ">Listado Paciente</h1>

            <p className="text-lg mt-5 text-center">
                Administra tus {" "}

                <span className="text-red-500 font-black ">
                    Pacientes y citas
                </span>
            </p>

            <Paciente/>
            <Paciente/>
            <Paciente/>
        </div>

    )
}

export default ListadoPaciente;