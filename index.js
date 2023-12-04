// window.alert("WARNING!!! \nYOU HAVE BEEN ALERT")

let age = 21;
let name = "Ignacy";
let surname = "I_(II)_I";
let liking_pizza = true;

console.log(age);
console.log(name + " " + surname);
if (liking_pizza) {
    liking_pizza = "You are liking pizza right now. \nIt is really good";
}

document.getElementById("p1").innerHTML = "Hello " + name;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = liking_pizza;

let number1 = 10;
number1 = 22;
number1 -= 2;

console.log("number1:", number1);
console.log("number1 / 2:", number1 / 2);
console.log("number1 * 0.5:", number1 * 0.5);
console.log("number1 % 3:", number1 % 3);

