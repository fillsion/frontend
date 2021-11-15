import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MathService from "../Services/MathService";
import { Spinner } from "react-bootstrap";
function Triangulo (){
    async function fetchValues() {
    setLoading(true);
    const data = await MathService.fetchCirculo(lado1, lado2, lado3);
    setResponse(data);
    setLoading(false);
  }
    
    const [lado1,setLado1] = useState(0);
    const [lado2,setLado2] = useState(0);
    const [lado3,setLado3] = useState(0);
    const [response,setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    function renderData() {
    if (loading) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    } else {
      return <h1>{response && response.number}</h1>;
    }
  }
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
