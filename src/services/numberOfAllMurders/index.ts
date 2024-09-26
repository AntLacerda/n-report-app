import { findAllOcurrences } from "../findAllOcurrences";

const numberOfAllMurders = async () => {
    try {
        const response = await findAllOcurrences();
        
        const filtro = response.filter(ocurrence => ocurrence.type == "Homicidio");

        return filtro.length;

    } catch (error) {
        console.log("Error on individual Ocurrences", error);
    }


}

export { numberOfAllMurders };