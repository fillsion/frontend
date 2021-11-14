import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Fibonacci (){
    function fetchValues(){
        //fetch("http://localhost:3001/Fibonacci?Numero="+number)
        fetch("https://final-implementacion.herokuapp.com/Fibonacci?Numero="+number)
        .then(res => res.json())
        .then(data=> setResponse(data))

    }
    const [number,setNumber] = useState(0);
    const [response,setResponse] = useState(null);;
        return (
            <div >
                <div className='App-header'>
                    <h1>Ingresa el numero</h1>
                    <h5>numero</h5>
                    <input type="number" pattern="^[0-9]" title='Only Number' min="1" step="1" value = {number} onChange = {(e)=>setNumber(e.target.value)}/>
                    <br/>
                    <button onClick = {fetchValues}>Calcular</button>
                    <h1>{response && response}</h1>

                </div>
            </div>
        )
    
}


export default Fibonacci
