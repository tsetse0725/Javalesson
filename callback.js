console.log("callback functions");

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const mendchileh = (name) => {
    console.log(`Hello ${name}`);
}

mendchileh("Saraa");

const mendchilgee = (callback) => {
    callback("Naraa");
};

mendchilgee(mendchileh);

