// var button = document.getElementsByTagName("button")[0];
// console.log(button,"button")

// button.addEventListener("mouseenter",function(){
//     console.log("clicked")
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function () {
  if (input.value.length > 0) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
  }
});
