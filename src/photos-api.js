import axios from "axios";

const API_KEY = '6jkUySb4hk37NqrGHs3ZdYb5XHJkSSY8DvtuotnSELo';

axios.defaults.baseURL = 'https://api.unsplash.com';
axios.defaults.params = {
    client_id: API_KEY,
    per_page: 20,
    orientation: 'landscape',
};

export const fetchPhotos = async (params = {}) => {
const { data } = await axios.get('/search/photos', {
    params,
});
return data;
}

