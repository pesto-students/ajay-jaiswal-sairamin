let child1 = {
    firstName: "Ridit",
    lastName: "Jaiswal",
    age: 5,
}

let printDetails = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " " + state);
}



let child2 = {
    firstName: "Raag",
    lastName: "Aman",
    age: 7,
}
//call method
printDetails.call(child1, "Mumbai", "Maharashtra");
printDetails.call(child2, "Bhopal", "Madhya Pradesh");

//apply method
printDetails.apply(child1, ["Mumbai", "Maharashtra"]);
printDetails.apply(child2, ["Bhopal", "Madhya Pradesh"]);

//bind method

let printBio = printDetails.bind(child1, "Mumbai", "Maharashtra");
console.log(printBio());
printBio();

