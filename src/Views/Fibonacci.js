import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MathService from "../Services/MathService";
import { Spinner } from "react-bootstrap";
function Fibonacci (){
    async function fetchValues() {
    setLoading(true);
    const data = await MathService.fetchFibonacci(number);
    console.log(data)
    setResponse(data);
    setLoading(false);
  }
    const [number,setNumber] = useState(0);
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
      return <h1>{response && response}</h1>;
    }
  }
        return (
            <div >
                <div className='App-header'>
                    <h1>Ingresa el numero</h1>
                    <h5>numero</h5>
                    <input type="number" pattern="^[0-9]" title='Only Number' min="1" step="1" value = {number} onChange = {(e)=>setNumber(e.target.value)}/>
                    <br/>
                    <button onClick = {fetchValues}>Calcular</button>
                    <h1>{response && response.join(", ")}</h1>

                </div>
            </div>
        )
    
}


export default Fibonacci
