import axios from "axios";

export const getCityName = async (id) => {
    let result = "";
    if (id) {
        await axios
            .get(`/api/getCityById/${id}`)
            .then((response) => {
                result = response.data.data;
            })
            .catch((error) => {
                console.error("Error fetching user data", error);
            });
    }
    return result;
};

export const getStateName = async (id) => {
    let result = "";
    await axios
        .get(`/api/getStateById/${id}`)
        .then((response) => {
            result = response.data.data;
        })
        .catch((error) => {
            console.error("Error fetching user data", error);
        });
    return result;
};

export const getCountryName = async (id) => {
    let result = "";
    await axios
        .get(`/api/getCountryById/${id}`)
        .then((response) => {
            result = response.data.data;
        })
        .catch((error) => {
            console.error("Error fetching user data", error);
        });
    return result;
};
