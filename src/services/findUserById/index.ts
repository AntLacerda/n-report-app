import api from "../../api/api";

const findUserById = async (userId: string, token: string) => {
    try {
        const user = await api.get(`/api/v1/users/profile`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            return response.data;
        });

        return user.name;
    } catch (error) {
        console.log("Error on try find user by id!", error);
    }
}



export { findUserById };