function Header(){

    return(
    <>

        <h1 className="font-black text-5xl text-center mx-auto md:w-1/2">
            Seguimiento Pacientes{' '}
        </h1>
        <h1>
            <span className="text-red-600 flex items-center font-black text-5xl text-center mx-auto md:w-1/5">
                Veterinaria
                <img className="h-10 ml-4 rounded-lg shadow-lg" src="https://img.freepik.com/vector-premium/vector-mascota-vaca-linda-kawaii_871993-125.jpg?w=740" alt="Vaca" />
            </span>
        </h1>
    </>
        
    )
}

export default Header;