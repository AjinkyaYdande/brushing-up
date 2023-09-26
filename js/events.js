// var button = document.getElementsByTagName("button")[0];
// console.log(button,"button")

// button.addEventListener("mouseenter",function(){
//     console.log("clicked")
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click",function(){
    var li = document.createElement("li");
    console.log(input.value)
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
})