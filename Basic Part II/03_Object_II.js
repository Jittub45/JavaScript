// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);


const regularUser = {
    email: "user@google.com",
    fullname: {
        userfullname:{
            firstname: "Jitendra",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
// console.log(obj3); 

// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))


/***********************Destructure*******************************/
const course = {
    coursename: "Basic of JavaScript",
    courseprice: 0,
    courseInstructor: "Jitendra"
};

const {courseInstructor: instr} = course
console.log(instr);

