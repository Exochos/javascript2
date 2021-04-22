let dogs = [
    {
        name: "Freddie",
        breed: "goldendoodle",
        age: "3",
        height: "3ft",
        weight: "30lbs",
        img: "freddie.jpg"
    },
    {
        name: "Charlie",
        breed: "cocker spaniel",
        age: "13",
        height: "2ft",
        weight: "25lbs",
        img: "charlie.jpg"
    },
    {
        name: "June",
        breed: "belgian malinois",
        age: "4",
        height: "3ft",
        weight: "50lbs",
        img: "june.jpg"
    },
    {
        name: "Teddie",
        breed: "Labrador Retriever",
        age: ".8",
        height: "3ft",
        weight: "50lbs",
        img: "teddie.jpg"
    },
    {
        name: "Cap",
        breed: "Lab",
        age: "5",
        height: "3ft",
        weight: "55lbs",
        img: "cap.jpg"
    }
];

module.exports.getAll = () => {
    return dogs;
};

module.exports.getItem = (name) => {
    return dogs.find(o => o.name === name);
};