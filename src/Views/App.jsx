import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import Inicio from './Inicio'
import DefaultLayout from './Default'
import Factorial from './Factorial'
import Fibonacci from './Fibonacci'
import Triangulo from './Triangulo'
import Circulo from './Circulo'
import Rectangulo from './Rectangulo'
//Aplicacion principal
export default class App extends Component {
    render() {
        return (

            <div>
                <Router>
                    <Switch>
                        <DefaultLayout path='/' exact component={Inicio}/>
                        <DefaultLayout path='/Factorial' exact component={Factorial}/>
                        <DefaultLayout path='/Fibonacci' exact component={Fibonacci}/>
                        <DefaultLayout path='/Triangulo' exact component={Triangulo}/>
                        <DefaultLayout path='/Circulo' exact component={Circulo}/>
                        <DefaultLayout path='/Rectangulo' exact component={Rectangulo}/>
                    </Switch>
                </Router>
            </div>

        )
    }
}
