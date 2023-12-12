function sayMyName(){
    console.log("My name is Jitendra")
}

// sayMyName()

// function addTwoNum(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNum(number1, number2){
    let result= number1 + number2
    return result
    console.log("Jitendra")
}

const result = addTwoNum(3,4)
// console.log("Result:", result);

function loginUserMessage (username){
    if(username === undefined){
        console.log("Please enter a username..")
        return
    }
    return console.log(`${username} just logged in!`)
}

// loginUserMessage()

function calCartPrice(val1, val2, ...num1){  // ... is rest as well as spread operator
    return num1
}

// console.log(calCartPrice(200,300,400,500,600))

const user = {
    username: "Jitendra",
    price: 0
}

let details = {
    firstName: "Jitendra",
    lastName: "kumar",
    contact:6304948909
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

// handleObject(user)

function myDetails(objects){
    let det = `My name is ${objects.firstName} ${objects.lastName}. My contact number is ${objects.contact}.`;
    return det;
}

console.log(myDetails(details))