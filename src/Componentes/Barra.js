import React, { Component } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Barra.css'

// barra de navegacion
class Barra extends Component {
    render() {
        return (
            <Navbar className='App-Barra' bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="./logo.svg" alt="" />
                        Final Implementación
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/Factorial' className='Link' >
                                Factorial
                            </Link>
                            <Link to='/Fibonacci' className='Link' >
                                Fibonacci
                            </Link>
                            <Link to='/Triangulo' className='Link' >
                                Area_Perimetro_Triangulo
                            </Link>
                            <Link to='/Circulo' className='Link' >
                                Area_Perimetro_Circulo
                            </Link>
                            <Link to='/Rectangulo' className='Link' >
                                Area_Perimetro_Rectangulo
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}


export default Barra
