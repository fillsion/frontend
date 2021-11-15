import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MathService from "../Services/MathService";
import { Spinner } from "react-bootstrap";
function Circulo (){
    async function fetchValues() {
    setLoading(true);
    const data = await MathService.fetchCirculo(radius);
    setResponse(data);
    setLoading(false);
  }
    const [radius,setRadius] = useState(0);
    const [response,setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
        return (
            <div >
                <div className='App-header'>
                    <h1>Ingresa el radio</h1>
                    <h5>radio</h5>
                    <input type="number" pattern="^[0-9]" title='Only Number' min="1" step="1" value = {radius} onChange = {(e)=>setRadius(e.target.value)}/>
                    <br/>
                    <button onClick = {fetchValues}>Calcular</button>
                    <h1>{response && "Area: " + response.number.area }</h1>
                    <h1>{response && "Perimetro: " + response.number.perimetro }</h1>
                </div>
            </div>
        )
    
}


export default Circulo
