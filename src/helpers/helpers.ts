const generateRandomNumber = (min: number, max: number) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export { generateRandomNumber, sleep };
