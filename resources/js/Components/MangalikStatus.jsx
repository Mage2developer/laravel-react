import React from "react";
import { getManglikStatusText } from "../Utils/profileUtils";

const MangalikStatus = ({ status }) => (
    <>
        <span>{getManglikStatusText(status)}</span>
    </>
);
export default MangalikStatus;
