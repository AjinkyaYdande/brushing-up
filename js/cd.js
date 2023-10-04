var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBtn = document.getElementsByClassName("delete");

button.addEventListener("click",addTech);

for(var i = 0;i<deleteBtn.length;i++){
    deleteBtn[i].addEventListener("click",removeTech);

}
function addTech(){
    var bt = document.createElement("button");
    bt.innerHTML = "X";
    bt.onclick = removeTech;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(bt)
    ul.appendChild(li);
    input.value = "";
}

function removeTech(e){
    e.target.removeEventListener("click",removeTech);
    e.target.parentNode.remove();
}
