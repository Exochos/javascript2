let dogs = [
    {
        name: "Freddie",
        breed: "goldendoodle",
        age: "3",
        height: "3ft",
        weight: "30lbs",
    },
    {
        name: "Charlie",
        breed: "cocker spaniel",
        age: "13",
        height: "2ft",
        weight: "25lbs",
    },
    {
        name: "June",
        breed: "belgian malinois",
        age: "4",
        height: "3ft",
        weight: "50lbs",
    },
    {
        name: "Teddie",
        breed: "golden retriever",
        age: "2",
        height: "3ft",
        weight: "50lbs",
    },
    {
        name: "Cap",
        breed: "Lab",
        age: "5",
        height: "3ft",
        weight: "55lbs",
    }
];

const getAll = () => {
    return dogs;
};

const getItem = (name) => {
    var doggo = dogs.find(o => o.name === name);
    return doggo;
};
export { getAll, getItem }


//console.log(getItem("Freddie"));
//console.log(dogs);