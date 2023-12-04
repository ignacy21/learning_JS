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


