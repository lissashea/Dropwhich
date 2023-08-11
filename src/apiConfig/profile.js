import api from "./api.js"

export const getUser = async (id) => {
    try {
        const response = await api.get(`/users/${id}`)
        return response.data;
    } catch (error) {
        console.error(`Failed to get posts - error: ${error}`);
    }
};