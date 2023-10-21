const arr = [1,2,3,4,5];
const newL = [];

const doub = arr.forEach((num)=>{
    console.log(num)

    newL.push(num*2);
})

console.log(newL,"newL")


const array = arr.map(a=> a * 2)


const filtered = arr.filter(a=> a>2)


const reduced = arr.reduce((accumulator,a)=> accumulator + a,0)