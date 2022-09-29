import api from "./api";

export const getAllUsers = async () => {
    const response = await api.get("/movies");
    return response.data;
}

export const getMovieById = async (id) => {
    const response = await api.get(`/movies/${id}`);
    return response.data;
}

export const registerMovie = async (res) => {
    const response = await api.post("/registerMovie", { res });
    return response.data;
}

export const deleteMovie = async (id) => {
    const response = await api.delete(`/deleteMovie/${id}`);
    return response.data;
}

export const setMovieWatched = async (id, watched) => {
    const response = await api.put(`/setMovieWatched/${id}`, { watched });
    return response.data;
}

export const changeMoviePlatform = async (id, platform, link) => {
    const response = await api.put(`/changeMoviePlatform/${id}`, { platform, link });
    return response.data;
}

export const getMoviesWithFilters = async (id, watched, platform) => {
    const response = await api.get(`/getMoviesWithFilters/${id}`, { params: { watched, platform } });
    return response.data;
}