import axios from "axios";

const api = axios.create({
    baseURL: "https://vast-harbor-55409.herokuapp.com/"
});

export const getUnits = () => {
    return api.get(`/units`);
}

export const postUnit = (postData) => {
    return api.post(`/units`, postData);
}

export const bookDate = (date, id) => {
    return api.patch(`units/book/${id}`, date);
}