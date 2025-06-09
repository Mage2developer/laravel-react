import React from "react";
import { calculateAge } from "../Utils/profileUtils";

const AgeCalculator = ({ dob }) => <span>{calculateAge(dob)} years</span>;
export default AgeCalculator;
