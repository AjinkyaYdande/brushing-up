// Currying 
// It Transfers  function of 
// multiple arguments into several
//  functions of a single argument in sequence


function calculateReactangle(length){
    return function(breadth){
        return function (height){
            return length * breadth * height
        }
    }
}
console.log(calculateReactangle(5)(5)(5));