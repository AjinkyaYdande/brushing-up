const first = ()=>{
    const greet = "Hi";
    const second = () =>{
        const name = 'Zinc';
        alert(greet)
    }
    return second;
}

const newF = first();
newF();