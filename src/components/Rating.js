function Rating(){
    
    function myEvent(){
        console.log('Avaliado')
    }
    return(
        <div>
            <p>Avalie
                 nosso serviço</p>
            <button onClick={myEvent}>Avaliar</button>
        </div>
    )
}

export default Rating