// utils/locationUtils.js

import axios from "axios";

// Cache to avoid repeated API calls
let cityList = [];
let stateList = [];
let countryList = [];

export const fetchCities = async () => {
    if (cityList.length) return cityList;
    const res = await axios.get("/api/getCity");
    cityList = res.data?.message || res.data;
    return cityList;
};

export const fetchStates = async () => {
    if (stateList.length) return stateList;
    const res = await axios.get("/api/getState");
    stateList = res.data?.message || res.data;
    return stateList;
};

export const fetchCountries = async () => {
    if (countryList.length) return countryList;
    const res = await axios.get("/api/getCountry");
    countryList = res.data?.message || res.data;
    return countryList;
};

export const getNameById = (list, id, key = "name") => {
    const item = list.find((i) => i.id === id);
    return item?.[key] || "";
};

export const getCityName = (id) => getNameById(cityList, id, "city_name");
export const getStateName = (id) => getNameById(stateList, id, "state_name");
export const getCountryName = (id) =>
    getNameById(countryList, id, "country_name");

export const getSelectOptions = (list, labelKey = "name") => {
    return list.map((item) => ({
        value: item.id,
        label: item[labelKey] || "Unknown",
    }));
};
