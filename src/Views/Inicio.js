import React, { Component } from 'react'
import Formulario from '../Componentes/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from "react-bootstrap";
import Select from 'react-select'



class Registro extends React.Component {
    
    constructor(props){
    super(props);
    this.state = {
      funcion: "Factorial",
    };

    this.handleChange = this.handleChange.bind(this);
    }

    
 handleChange(e) {
    this.setState({ funcion: e.target.value });
  }
    render() {
        return (
            <div >
                <div className='App-header'>
                    <h1>Funciones</h1>
                    <Select id ="funcion" onChange={this.handleChange}>
                      <option value="/Factorial" selected>Factorial</option>
                      <option value="/Fibonacci">Fibonacci</option>
                      <option value="/Triangulo">Area y Perimetro Triangulo</option>
                      <option value="/Circulo">Area y Perimetro Circulo</option>
                      <option value="/Rectangulo">Area y Perimetro Rectangulo</option>
                    </Select>
                    <br/>
                    <button >{this.state.funcion}</button>
                    

                </div>
            </div>
        )
    }
}


export default Registro
