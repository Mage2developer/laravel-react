export const calculateAge = (dob) => {
    if (!dob) return "-";
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const getMaritalStatusText = (status) => {
    switch (status) {
        case 0:
            return "Single";
        case 1:
            return "Married";
        case 2:
            return "Divorced";
        default:
            return "Not Specified";
    }
};
