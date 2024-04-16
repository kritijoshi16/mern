console.log("Hello World from basics.js!")
console.log("Kriti Joshi")
console.log("This is my first JS code")

console.log("-------------------------")

// Types of variables
// 1. var
// 2. let
// 3. const

var name ="Kriti"
console.log(name)

let age = 20
console.log(age)

// difference between let and const
let city = "Vikas Nagar"
console.log(city)

city = "Lucknow"
console.log(city)

let state = "Uttar Pradesh"
console.log(state)

const country = "India"
console.log(country)

// const country = "USA"
// console.log(country)

console.log("-------------------------")

// difference btw var and let
var a = 10
// Redeclaration is possible
var a = 20
console.log(a)
// Reassigning is also possible
a=30
console.log(a)

let b=10
// Redeclaration is not posssible
// let b=20

// Reassigning is possible
b=30
console.log(b)

// String Concatenation
let firstname = "Kriti"
let lastname = "Joshi"
let fullname = firstname + "" + lastname
console.log(fullname)

let bs = 50000;
let hra = (bs * 10) / 100;
let da = ( bs * 5) / 100;
var gs = bs + hra + da ;
console.log(bs)
console.log(hra)
console.log(da)
console.log(gs)


