name = "  Ignacy   "

console.log(name.length)
console.log(name.charAt(5))
console.log(name.indexOf("y"))
console.log(name.toLowerCase())
console.log(name.trim().toUpperCase())

name = name.replace("cy", "ś")
console.log(name)

phoneNumber ="Bitcoin BTC"
let sliceNum = phoneNumber.indexOf(" ");
let s1 = phoneNumber.slice(sliceNum + 1);
let s2 = phoneNumber.slice(0, sliceNum);
console.log(s1)
console.log(s2)


