import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ServicesConstants from '../Resources/ServicesConstants'
function Triangulo (){
    async function fetchValues(){        
        const response = await fetch(`${ServicesConstants.SERVICE_DOMAIN}/Triangulo?Lado1=${lado1}&Lado2=${lado2}&Lado3=${lado3}`);
        const data = response.ok ? await response.json() : ServicesConstants.DEFAULT_ERROR_OBJECT;
        setResponse(data);
    }
    
    const [lado1,setLado1] = useState(0);
    const [lado2,setLado2] = useState(0);
    const [lado3,setLado3] = useState(0);
    const [response,setResponse] = useState(null);;
        return (
            <div >
                <div className='App-header'>
                    <h1>Ingresa los lados</h1>
                    <h5>Lado 1</h5>
                    <input type="number" pattern="^[0-9]" title='Only Number' min="1" step="1" value = {lado1} onChange = {(e)=>setLado1(e.target.value)}/>
                    <br/>
                    <h5>Lado 2</h5>
                    <input type="number" pattern="^[0-9]" title='Only Number' min="1" step="1" value = {lado2} onChange = {(e)=>setLado2(e.target.value)}/>
                    <br/>
                    <h5>Lado 3</h5>
                    <input type="number" pattern="^[0-9]" title='Only Number' min="1" step="1" value = {lado3} onChange = {(e)=>setLado3(e.target.value)}/>
                    
                    <button onClick = {fetchValues}>Calcular</button>
                    <h1>{response && "Area: " + response.number.area }</h1>
                    <h1>{response && "Perimetro: " + response.number.perimetro }</h1>
                </div>
            </div>
        )
    
}


export default Triangulo
