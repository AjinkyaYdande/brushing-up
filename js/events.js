// var button = document.getElementsByTagName("button")[0];
// console.log(button,"button")

// button.addEventListener("mouseenter",function(){
//     console.log("clicked")
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createElementList() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addAfterClick() {
  if (inputLength() > 0) {
    createElementList();
  }
}

function addAfterKeypress(event){
    if (inputLength() > 0 && event.keyCode === 13) {
        createElementList();
      }
}

button.addEventListener("click", addAfterClick);

input.addEventListener("keypress",addAfterKeypress);
