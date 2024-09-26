import api from "../../api/api";

const findUserById = async () => {
    try {
        const user = await api.get(`/api/v1/users/profile`)
        .then(response => {
            return response.data;
        });

        return user;
    } catch (error) {
        console.log("Error on try find user by id!", error);
    }
}



export { findUserById };