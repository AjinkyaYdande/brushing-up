var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

color1.addEventListener('input',function(){
    console.log(color1,'color1');
})

color2.addEventListener('input',function(){
    console.log(color2,'color2')
})

console.log(css,'css');
