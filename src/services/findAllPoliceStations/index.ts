import api from "../../api/api"

const findAllPoliceStations = async () => {
    try {
        const policeStations = await api.get(`/api/v1/policeStation/`)
        .then((response)=>{
            return response.data;
        })

        return policeStations;
    } catch (error) {
        console.log("Error on try find all police stations!", error);
    }
}

export { findAllPoliceStations };