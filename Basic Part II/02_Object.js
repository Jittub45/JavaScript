
const myObj = {
    name : "Jitendra",
    age : 20, 
    email : "jitendra@google.com",
    isLoggedIn : false,
    "bookReading" : "lord_of_the_rings",
    daysOfLogin : ["monday, tuesday"]
}

console.log(myObj.age)
console.log(myObj["email"])
console.log(myObj["bookReading"])

myObj.email = "jitendra@yahoo.com"
console.log(myObj["email"])

// Object.freeze(myObj) //////////////////////////////////
myObj.email = "jitendra@apple.com"
console.log(myObj["email"])
console.log(myObj)

myObj.greeting = function(){
    console.log("Hello Js User");
}

myObj.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(myObj.greeting());
console.log(myObj.greetingTwo());