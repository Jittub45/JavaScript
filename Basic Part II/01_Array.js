
// const myArr = [8,3,5,7,5,13, 56, 65, 89, 234, 645, 756]
// const strArr = ["IronMan, SuperMan, AntMan"]

// const newArr = new Array(1,2,3,4,5,6)

// console.log(myArr[2])


/*************************Array Methods********************/
// myArr.push(11) // add element at last 
// console.log(myArr)

// myArr.pop() // removes element from last
// console.log(myArr)

// myArr.unshift(1) // add element at begining 
// console.log(myArr)

// myArr.shift() // removes element from beging
// myArr.shift() 
// console.log(myArr)



/********************** Slice and splice *************************/
// console.log(myArr.slice(1,4)) //take the certain part of the array to display and does not changes the original array
// console.log(myArr)


// console.log(myArr.splice(1,4)) // removes the specified part of original array and displays it.
// console.log(myArr)

/******************************************************/

const marvel_heroes = ["Thor, Hulk, Spiderman"]
const dc_heores = ["Batman, Flash , WonderWoman"]

// marvel_heroes.push(dc_heores)
// console.log(marvel_heroes)  //array in array
// console.log(marvel_heroes[1])


// const allHeroes = marvel_heroes.concat(dc_heores)
// console.log(allHeroes)


// const all_new_heores = [...marvel_heroes, ...dc_heores]
// console.log("-------------------------------------")
// console.log(all_new_heores)


// const arrOne = [4, 5, 2, [3, 8, 0, [2, 4, 2,5], 8, 2]]
// const newArrOne = arrOne.flat(8  /*Infinity */)
// console.log(newArrOne)

console.log(Array.isArray("Jitendra"))
console.log(Array.from("Jitendra"))

console.log(Array.from({name: "Jitendra"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))