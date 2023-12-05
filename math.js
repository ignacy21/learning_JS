let n1
let n2
document.getElementById("add").onclick = function () {
    n1 = Number(document.getElementById("number1").value)
    n2 = Number(document.getElementById("number2").value)
    document.getElementById("result1").innerHTML = "result: " + n1 + n2

}
document.getElementById("divide").onclick = function () {
    n1 = Number(document.getElementById("number3").value)
    n2 = Number(document.getElementById("number4").value)
    document.getElementById("result2").innerHTML = "result: " + n1 / n2

}
document.getElementById("pow").onclick = function () {
    n1 = Number(document.getElementById("number5").value)
    n2 = Number(document.getElementById("number6").value)
    document.getElementById("result3").innerHTML = "result: " + Math.pow(n1, n2)

}
document.getElementById("sqrt").onclick = function () {
    n1 = Number(document.getElementById("number7").value)
    n2 = Number(document.getElementById("number8").value)
    document.getElementById("result4").innerHTML = "result: " + Math.pow(n1, 1 / n2)

}
document.getElementById("calcHypotenuse").onclick = function () {
    n1 = Number(document.getElementById("sideA").value)
    n2 = Number(document.getElementById("sideB").value)
    console.log("Math.pow(n1): ", Math.pow(n1, 2))
    console.log("Math.pow(n2): ", Math.pow(n2, 2))
    document.getElementById("hypotenuseResult")
        .innerHTML = "side C: " + Math.sqrt(Math.pow(n1, 2) + Math.pow(n2, 2))

}


let x = 9.49
let y = -10.92
let z = 51.09
// x = Math.round(x)
// x = Math.floor(x)
// x = Math.ceil(x)
// x = Math.pow(x, 2)
// x = Math.sqrt(x)
// x = Math.abs(x)
// x = Math.max(x, y, z)
// x = Math.min(x, y, z)
x = Math.PI

console.log("x:", x)
