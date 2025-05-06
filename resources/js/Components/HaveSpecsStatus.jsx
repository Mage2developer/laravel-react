import React from "react";
import { getHaveSpecsText } from "../Utils/profileUtils";

const HaveSpecsStatus = ({ status }) => (
    <>
        <span>{getHaveSpecsText(status)}</span>
    </>
);
export default HaveSpecsStatus;
