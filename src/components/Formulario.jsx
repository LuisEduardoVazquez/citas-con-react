import { useState, useEffect} from 'react';
import Error from './Error';

function Formulario({ pacientes, setPacientes, paciente, setPaciente}){
    const [nombreMascota, setNombreMascota] = useState('');
    const [nombreDelPropietario, setNombreDelPropietario] = useState('');
    const [emailDelPropietario, setEmailDelPropietario] = useState('');
    const [fechaDeIngreso, setFechaDeIngreso] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState('');

    useEffect(() => {
        if(Object.keys(paciente).length > 0)
        {
            setNombreMascota(paciente.nombreMascota);
            setNombreDelPropietario(paciente.nombreDelPropietario);
            setEmailDelPropietario(paciente.emailDelPropietario);
            setFechaDeIngreso(paciente.fechaDeIngreso);
            setSintomas(paciente.sintomas);
        }
        
        
    },[paciente])

    

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }

    const handleSubmit = (e) => {
            e.preventDefault();

            if( [nombreMascota, nombreDelPropietario, emailDelPropietario, fechaDeIngreso, sintomas].includes('') ){
                console.log("Formulario incompleto");
                setError(true);
                return;
            }

            setError(false);

            //Creacion del objeto del paciente 
            const objetoPaciente = {
                nombreMascota, 
                nombreDelPropietario, 
                emailDelPropietario, 
                fechaDeIngreso, 
                sintomas
                
            }

            if(paciente.id){

                objetoPaciente.id = paciente.id
                const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
                paciente.id ? objetoPaciente : pacienteState) 
                setPacientes(pacientesActualizados)

                setPaciente({})

            }
            else{
                
                objetoPaciente.id = generarId();
                setPacientes([...pacientes, objetoPaciente]);
            }
            

            setNombreMascota("");
            setNombreDelPropietario("");
            setEmailDelPropietario("");
            setFechaDeIngreso("");
            setSintomas("");
            
        
    }

    return(
        

        <div className="md:w-1/2 lg:w-2/5"> 
            <h1 className="font-black text-3xl text-center">
                Seguimiento Pacientes
            </h1>

            <p className="text-lg mt-5 text-center">
                Añadir Pacientes y {" "}

                <span className="text-red-500 font-black ">
                    Administrar
                </span>
            </p>

            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-5 px-5 mt-5 ml-8 mb-20"
            >
                { error &&  <Error mensaje = "Todos los campos son obligatorios" /> }
                    
                <div>
                    <label htmlFor="nombreMascota" className="block text-gray-700 uppercase font-bold ">
                        Nombre de la mascota
                    
                    </label>

                    <input 
                        id="nombreMascota"
                        className=" border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
                        type="text"
                        placeholder="Nombre de la mascota" 
                        value={nombreMascota}
                        onChange = {
                            function(e)
                            {
                                setNombreMascota(e.target.value)
                            }
                        }
                        //onChange = {(e) => setNombreMascota(e.target.value)}

                    />
                </div>

                <div>
                    <label htmlFor="nombrePropietario" className="block text-gray-700 uppercase font-bold  mt-5">
                        Nombre del Propietario
                    
                    </label>

                    <input 
                        id="nombrePropietario"
                        className=" border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
                        type="text"
                        placeholder="Nombre del Propietario" 
                        value={nombreDelPropietario}
                        onChange = {(e) => setNombreDelPropietario(e.target.value)}

                    />
                </div>

                <div>
                    <label htmlFor="emailPropietario" className="block text-gray-700 uppercase font-bold  mt-5">
                        Email del propietario
                    
                    </label>

                    <input 
                        id="emailPropietario"
                        className=" border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
                        type="email"
                        placeholder="Email del propietario" 
                        value={emailDelPropietario}
                        onChange = {(e) => setEmailDelPropietario(e.target.value)}

                    />
                </div>

                <div>
                    <label htmlFor="fechaDeIndreso" className="block text-gray-700 uppercase font-bold  mt-5">
                        Fecha de ingreso
                    
                    </label>

                    <input 
                        id="fechaDeIndreso"
                        className=" border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
                        type="date"
                        value={fechaDeIngreso}
                        onChange = {(e) => setFechaDeIngreso(e.target.value)}

                    />
                </div>

                <div>
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold  mt-5">
                        Sintomas
                    </label>

                    <textarea 
                        id= "sintomas" 
                        className=" border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
                        placeholder="Descripcion de sintomas" 
                        value={sintomas}
                        onChange = {(e) => setSintomas(e.target.value)}
                    >

                    </textarea>

                </div>

                <input 
                    type="submit"

                    className="bg-red-500 w-full p-3 text-black rounded-md font-bold uppercase hover:bg-red-700"
                    value= { paciente.id ? "Editar paciente": "Agregar paciente"}
                    

                />

                
                
            </form>


        </div>
        
    )
}

export default Formulario;