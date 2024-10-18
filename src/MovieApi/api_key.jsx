export  const API_KEY ={
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`
    }
};
export const BASE_URL = process.env.BASE_URL || 'https://api.themoviedb.org/3';

