function Error({mensaje}){

    return(
    <>
        
        <div className='text-white bg-red-800 text-center p-3 uppercase m-3 rounded-lg '>
            <p>
                {mensaje}
            </p>
        </div>
                    
    </>
        
    )
}

export default Error;