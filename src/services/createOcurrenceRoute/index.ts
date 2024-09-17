import api from "../../api/api"

const createOcurrenceRoute = async (data) => {
    try {
        const newOcurrence = await api.post("/api/v1/ocurrences/save", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(response=>{
            return response.data;
        })

        alert("Ocorrência criada com sucesso!");

        
        return newOcurrence;
    } catch (error) {
        if (error.response) {
            // O servidor retornou uma resposta com um status de erro
            console.error("Error response data:", error.response.data);
            console.error("Error response status:", error.response.status);
            console.error("Error response headers:", error.response.headers);
        } else if (error.request) {
            // A requisição foi feita, mas nenhuma resposta foi recebida
            console.error("Error request:", error.request);
        } else {
            // Alguma coisa ocorreu ao configurar a requisição que disparou o erro
            console.error("Error message:", error.message);
        }
    }
}

export {createOcurrenceRoute};