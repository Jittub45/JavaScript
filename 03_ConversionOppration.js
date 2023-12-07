let score = "38asdf"

console.log(typeof(score))
console.log(typeof score)

let valueInNumber = Number(score)
console.log(valueInNumber); 
console.log(typeof valueInNumber)


// null = 0
// undefined = NaN

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//"" => false 
//"xyz" => true 

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//************************ OPERATIONS *************************************************

let value = 3
let negValue = -value
console.log(negValue)
console.log(5+2)
console.log(5-2)
console.log(5*2)
console.log(5**2)
console.log(5/2)
console.log(5%2)


//**
console.log("2" + 5)
console.log(2 + "5")
console.log("2" + 5 + 8)
console.log(2 + "5" + 8)
console.log(2 + 5 + "8")