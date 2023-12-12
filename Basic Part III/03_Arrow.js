const user = {
    username: "Jitendra",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Kumar"
// user.welcomeMessage()
// console.log(this) // empty {} nothig is present in this scope

const chai = () => {
    let username = "Jitendra"
    console.log(username);
}
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

// console.log(addTwo(8, 4))

const addThree = (num1, num2) => ({username: "Jitendra"})
console.log(addThree(1,2))