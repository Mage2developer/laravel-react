import React from "react";
import { getGenderText } from "../Utils/profileUtils";

const GetGenderText = ({ status }) => (
    <>
        <span>{getGenderText(status)}</span>
    </>
);
export default GetGenderText;
