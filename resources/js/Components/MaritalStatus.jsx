import React from "react";
import { getMaritalStatusText } from "../Utils/profileUtils";

const MaritalStatus = ({ status }) => (
    <>
        <span>{getMaritalStatusText(status)}</span>
    </>
);
export default MaritalStatus;
