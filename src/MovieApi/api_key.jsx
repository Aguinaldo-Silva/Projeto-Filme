export const BASE_URL = import.meta.env.VITE_BASE_URL;
export const API_KEY = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
};