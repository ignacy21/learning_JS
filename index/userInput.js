
let likingPizza = true
while (true) {
    let read_input = window.prompt("Do you like pizza: YES or NO")
    if (read_input === "YES") {
        likingPizza = true
        break
    } else if (read_input === "NO") {
        likingPizza = false
        break
    }
}

document.getElementById("p1").innerHTML = "Did he/she like pizza?";
if (likingPizza) {
    document.getElementById("p2").innerHTML = "yes :)";
} else {
    document.getElementById("p2").innerHTML = "no :(";
}


let username;
document.getElementById("myButton").onclick = function () {
    username = document.getElementById("myText").value
    document.getElementById("p3").innerHTML = "Hello " + username

}

