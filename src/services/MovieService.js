import api from "./api";

export const getAllUsers = async () => {
    const response = await api.get("/movies");
    return response.data;
}

export const getMovieById = async (id) => {
    const response = await api.get(`/movies/${id}`);
    return response.data;
}

export const registerMovie = async (title, cover, link, platform, watched, user_id) => {
    const response = await api.post("/registerMovie", { title, cover, link, platform, watched, user_id });
    return response.data;
}

export const deleteMovie = async (id) => {
    const response = await api.delete(`/deleteMovie/${id}`);
    return response.data;
}
