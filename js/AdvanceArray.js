const arr = [1,2,3,4,5];
const newL = [];

const doub = arr.forEach((num)=>{
    console.log(num)

    newL.push(num*2);
})

console.log(newL,"newL")


const array = arr.map((a)=>{
    return a * 2;
})