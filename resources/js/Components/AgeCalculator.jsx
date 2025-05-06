import React from "react";
import { calculateAge } from "../Utils/profileUtils";

const AgeCalculator = ({ dob }) => <span>{calculateAge(dob)} yrs</span>;
export default AgeCalculator;
