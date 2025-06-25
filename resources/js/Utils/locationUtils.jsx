// utils/locationUtils.js

import axios from "axios";

export const getNameById = (list, id, key = "name") => {
    // const item = list.find((i) => i.id === id);
    console.log(item);
    return item?.[key] || "";
};

export const getCityName = async (id) => {
    let returnCity = "" 
    const res = await axios
        .get(`/api/getCityById/${id}`)
        .then((response) => {
            console.log(response); 
        })
        .catch((error) => {
            console.error("Error fetching user data", error);
        });
    return res?.data?.data[0]?.city_name;
};

export const getStateName = async (id) => {
    const res = await axios.get(`/api/getStateById/${id}`);
    console.log(res.data.data[0].state_name);
    const state_name = res?.data?.data[0]?.state_name;
    return state_name;
};

export const getCountryName = async (id) => {
    const res = await axios.get(`/api/getCountryById/${id}`);
    console.log(res.data.data[0].country_name);
    const country_name = res?.data?.data[0]?.country_name;
    return country_name;
};

export const getSelectOptions = (list, labelKey = "name") => {
    return list.map((item) => ({
        value: item.id,
        label: item[labelKey] || "Unknown",
    }));
};
