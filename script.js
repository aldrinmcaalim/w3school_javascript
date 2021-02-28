function myFunction() {
    document.getElementById("animal_noise").innerHTML = "I'm in a seperate JavaScript File!";
}

function remove_item() {
    document.getElementById("animal_noise").style.display = 'none';
}

function return_item() {
    document.getElementById("animal_noise").style.display = 'block';
}

function ten_plus_ten() {
    document.getElementById("answer").innerHTML = `Answer: ${10 + 10}`;
}

function change_entire_html() {
    document.write(1 + 1);
}

function window_alert() {
    window.alert("This is a Window Alert!")
}

function console_log() {
    console.log("I am a console.log()!")
}

x = 10;
y = 2;
z = x + y;

function variables() {
    document.getElementById("variables").innerHTML = `Z is equal to: ${z}`
}

function priceTotal() {
    let price1 = 10;
    let price2 = 20;

    document.getElementById("price").innerHTML = `$${price1 + price2}.00`;
}
// Block scoping with price1 within the function, which is a form of functional scoping
// Global scoping with price1 that is outside the function, and is accessible to everything in the global scope
// In short, block scoping is only available for use within a functions block scope, while global scope is accessible outside a function and inside a function

let price1 = 100;

document.getElementById("thePrice").innerHTML = `${price1}`;

function heightInInches(feet) {
    return feet * 12;
};

document.getElementById("try").innerHTML = `You are ${heightInInches(5)} inches tall.`;

let person = {
    firstName: "Michael",
    lastName: "Scott",
    city: "Scranton",
    state: "Pennsylvania",
    age: 44,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    location: function () {
        return `${this.city}, ${this.state}`;
    },
};

document.getElementById("try1").innerHTML = `${person.fullName()} is from ${person.location()}.`
let car = {
    year: 2020,
    brand: 'Toyota',
    model: 'Prius',
    fullTitle: function () {
        return `${this.year} ${this.brand} ${this.model}`;
    },
};

document.getElementById("try2").innerHTML = `Would you like to see our ${car.fullTitle()}?`

function ticketPrice() {
    let age = Number(prompt(`What is your age?`));

    if (age < 3 || age >= 65) {
        cost = 0;
    } else if (age >= 3 && age < 13) {
        cost = 5;
    } else if (age >= 13 && age < 65) {
        cost = 10;
    }

    document.getElementById("cost").innerHTML = `You are ${age} years old. Your ticket will cost $${cost}.00.`
}


