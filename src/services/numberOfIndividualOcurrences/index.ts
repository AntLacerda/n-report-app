import { findAllOcurrences } from "../findAllOcurrences";

const numberOfindividualOcurrences = async (userName) => {
    try {
        const response = await findAllOcurrences();
        
        const filtro = response.filter(ocurrence => ocurrence.User.name == userName);

        return filtro.length;

    } catch (error) {
        console.log("Error on individual Ocurrences", error);
    }


}

export { numberOfindividualOcurrences };