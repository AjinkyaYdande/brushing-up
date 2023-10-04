// var button = document.getElementsByTagName("button")[0];
// console.log(button,"button")

// button.addEventListener("mouseenter",function(){
//     console.log("clicked")
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtns = document.getElementsByClassName("delete");
var items = ul.getElementsByTagName("li");

for(var i = 0;i<items.length;i++){
  deleteBtns[i].addEventListener("click",removeParent,false)
}
function removeParent(e){
  e.target.removeEventListener("click",removeParent,false);
  e.target.parentNode.remove();
}

function inputLength() {
  return input.value.length;
}
function createElementList() {
  var btn = document.createElement("button");
  btn.innerHTML= "Delete";
  btn.onclick= removeParent;

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  // ul.appendChild(li);
  // input.value = "";
  li.innerHTML = li.innerHTML + "";
  li.appendChild(btn);
  ul.appendChild(li);
  input.value - "";
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
