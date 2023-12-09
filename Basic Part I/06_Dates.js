// Dates

let myDates = new Date()
console.log(myDates)
console.log(myDates.toString())
console.log(myDates.toDateString())
console.log(myDates.toLocaleString())
console.log(myDates.toJSON())

console.log(typeof(myDates))

let myTimeStamp = Date.now()
console.log(myTimeStamp)

let myCreatedDate = new Date("01-01-2023")//mm dd yyyy
console.log(myCreatedDate.getTime())

console.log(myTimeStamp- myCreatedDate)
console.log(`${Math.round((((myTimeStamp - myCreatedDate)/60000)/60)/24)}${" Days"}`)