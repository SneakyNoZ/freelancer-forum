const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    // Grabe the "root" element
    const rootElement = document.getElementById("root");

    // Create an h1 element
    const h1Element = document.createElement("h1");
    h1Element.textContent = "FREELANCERS";

    // Append the h1 element to the root element
    rootElement.appendChild(h1Element);

    // Create the unordered list element
    const ulElement = document.createElement("ul");

    // Loop thorugh the users array and create li elements
    users.forEach(user => {
        const liElement = document.createElement("li");
        liElement.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
        ulElement.appendChild(liElement);
    });

    // Append the unordered list element to the root element
    rootElement.appendChild(ulElement);
}

// Call the main function
main();