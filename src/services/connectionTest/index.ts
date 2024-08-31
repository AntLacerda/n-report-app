const connectionTest = async () => {
    try {
        const endpoint = "http://172.23.160.1:3000/api/v1/hello-world";

        const response = await fetch(endpoint);
        const result = await response.json();

        console.log(result);
    } catch(error:any){
        console.log("Erro ao testar a conexão: ", error);
    }
}

export { connectionTest };
