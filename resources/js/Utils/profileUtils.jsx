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

export const getManglikStatusText = (status) => {
    switch (status) {
        case 0:
            return "Yes";
        case 1:
            return "No";
        default:
            return "Not Specified";
    }
};

export const getHaveSpecsText = (status) => {
    switch (status) {
        case 0:
            return "Yes";
        case 1:
            return "No";
        default:
            return "Not Specified";
    }
};


export const getGenderText = (status) => {
    switch (status) {
        case 0:
            return "Male";
        case 1:
            return "Female";
        default:
            return "Not Specified";
    }
};
