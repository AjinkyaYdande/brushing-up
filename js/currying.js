const multiply = (a,b)=> a * b;
const curriedMultiply = (a) =>(b)=>a*b;
const multiply5 = curriedMultiply(5)