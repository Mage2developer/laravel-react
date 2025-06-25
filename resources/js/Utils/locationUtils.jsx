// utils/locationUtils.js

import axios from "axios";

export const getNameById = (list, id, key = "name") => {
    console.log(item);
    return item?.[key] || "";
};

export const getCityName = async (id) => {
    let result = "";
    await axios
        .get(`/api/getCityById/${id}`)
        .then((response) => {
            result = response.data.data;
        })
        .catch((error) => {
            console.error("Error fetching user data", error);
        });
    // console.log(result);
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
    // console.log(result);
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
    // console.log(result);
    return result;
};

export const getSelectOptions = (list, labelKey = "name") => {
    return list.map((item) => ({
        value: item.id,
        label: item[labelKey] || "Unknown",
    }));
};
