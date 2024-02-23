function Paciente({paciente}){
    return(
        
        <div className="bg-white  shadow-md px-5 py-5 mt-5 ml-8 rounded-lg mb-10 ">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:{"  "}
                <span className="font-normal normal-case">
                    {paciente.nombreMascota}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:{"  "}
                <span className="font-normal normal-case">
                    {paciente.nombreDelPropietario}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:{"  "}
                <span className="font-normal normal-case">
                    {paciente.emailDelPropietario}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de ingreso:{"  "}
                <span className="font-normal normal-case">
                    {paciente.fechaDeIngreso}
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Sintomas:{"  "}
                <span className="font-normal normal-case">
                    {paciente.sintomas}
                </span>
            </p>
        </div>
    )
}

export default Paciente;



