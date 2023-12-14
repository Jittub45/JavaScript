
// Immedetely invoked function expression

(function chai(){
    // Named iife
    console.log("DB connctes")
})();


( (name) =>{
    console.log(`DB connected to ${name}.`)
})('google');

