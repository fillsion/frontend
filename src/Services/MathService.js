import ServicesConstants from "../Resources/ServicesConstants";
const SERVICE_DOMAIN =  "https://final-implementacion.herokuapp.com";
const MathService = {
    async fetchFactorial(number){        
        const response = await fetch(
        `${SERVICE_DOMAIN}/Factorial?Numero=${number}`
        );
        const data = response.ok ? await response.json() : ServicesConstants.DEFAULT_ERROR_OBJECT;
        return data;
    }
}

export default MathService;