const persons = [
    {
        name: "Alice", personal: {
            hobbies: ["Walking"],
            pet: "Cat",
            age: 25
        }
    },
    {
        name: "Bob", personal: {
            hobbies: ["Walking"],
            pet: "Cat",
            age: 17
        }
    },
    {
        name: "Peter", personal: {
            hobbies: ["Walking"],
            pet: "Cat",
            age: 25
        }
    },

];

const adults = persons.filter(isAdult)
console.log("🚀 ~ adults:", adults)
function isAdult(p) {
    return p.personal.age >= 18;
}
