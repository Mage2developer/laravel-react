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

export const getYesNoOptions = () => {
    return [
        { value: 1, label: 'Yes' },
        { value: 0, label: 'No' }
    ];
};

export const getMaritalStatusOptions = () => {
    return [
        { value: 0, label: 'Single' },
        { value: 1, label: 'Married' },
        { value: 2, label: 'Divorced' },
        { value: 3, label: 'Not Specified' }
    ];
};

export const getGenderOptions = () => {
    return [
        { value: 0, label: 'Male' },
        { value: 1, label: 'Female' }
    ];
};
