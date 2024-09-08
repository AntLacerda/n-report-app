import { findAllOcurrences } from "../findAllOcurrences";

const numberOfAllTheft = async () => {
    try {
        const response = await findAllOcurrences();
        
        const filtro = response.filter(ocurrence => ocurrence.type == "Furto");

        return filtro.length;

    } catch (error) {
        console.log("Error on individual Ocurrences", error);
    }


}

export { numberOfAllTheft };