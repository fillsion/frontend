import ServicesConstants from "../Resources/ServicesConstants";
const SERVICE_DOMAIN =  "https://final-implementacion.herokuapp.com";
const MathService = {
    async fetchFactorial(number){        
        const response = await fetch(
        `${SERVICE_DOMAIN}/Factorial?Numero=${number}`
        );
        const data = response.ok ? await response.json() : ServicesConstants.DEFAULT_ERROR_OBJECT;
        return data;
    },

    async fetchRectangulo(lado1, lado2){        
        const response = await fetch(
        `${SERVICE_DOMAIN}/Rectangulo?Lado1=${lado1}&Lado2=${lado2}`
        );  
        const data = response.ok ? await response.json() : ServicesConstants.DEFAULT_ERROR_OBJECT;
        return data;
    },

    async fetchFibonacci(number){        
        const response = await fetch(
        `${SERVICE_DOMAIN}/Fibonacci?Numero=${number}`
        );
        const data = response.ok ? await response.json() : ServicesConstants.DEFAULT_ERROR_OBJECT;
        return data;
    },

    async fetchCirculo(number){        
        const response = await fetch(
        `${SERVICE_DOMAIN}/Circulo?Numero=${number}`
        );
        const data = response.ok ? await response.json() : ServicesConstants.DEFAULT_ERROR_OBJECT;
        return data;
    },

    async fetchTriangulo(lado1,lado2,lado3){        
        const response = await fetch(
        `${SERVICE_DOMAIN}/Triangulo?Lado1=${lado1}&Lado2=${lado2}&Lado3=${lado3}`
        );
        const data = response.ok ? await response.json() : ServicesConstants.DEFAULT_ERROR_OBJECT;
        return data;
    },


}

export default MathService;