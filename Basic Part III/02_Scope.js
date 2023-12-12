
var c = 300
d = 400
a = 500

if(true){
    let a = 10
    const b = 20
    var c = 30
    d = 40
    // console.log("Inner: ",a)
}

// console.log("Outer: ", a)
// //console.log(b)
// console.log(c)
// console.log(d)

function one(){
    const username = "Jitendra"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

// one()


