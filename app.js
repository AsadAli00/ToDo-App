var list = document.getElementById("list");



function addTodo(){
    var todo_item = document.getElementById("todo_item");
    
    //create li tag with text node 
    var li = document.createElement("li");
    var span = document.createElement("span");
    var spanText = document.createTextNode(todo_item.value);
    span.appendChild(spanText)
    span.setAttribute("class","spanText")
    span.setAttribute("id","span_Text")
    li.appendChild(span)

    //cretae del btn 
    var delbtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delbtn.setAttribute("class", "btn")
    delbtn.setAttribute("onclick","delItem(this)")
    delbtn.appendChild(delText)



    //create edit btn
    var editbtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editbtn.appendChild(editText)
    editbtn.setAttribute("class", "btn")
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delbtn)
    var list = document.getElementById("list")
    list.appendChild(li)
    todo_item.value = ""
}


function delItem(e){
    e.parentNode.remove();
}

function delAll(){
    list.innerHTML = ""
}
function editItem(e){
    var val = e.previousSibling.childNodes[0].nodeValue  
    var editValue = prompt("Enter Edit Value",val)
    e.previousSibling.childNodes[0].nodeValue = editValue;

}





