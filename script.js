var todo = document.querySelector("input");
var button = document.querySelector("button");
var list = document.getElementsByClassName("work");
var delBtn = document.getElementsByClassName("deletebutton");



button.addEventListener('click', add);

function add(){
    for (let index = 0; index < 10; index++) {
        if(list[index].innerHTML == ""){
            list[index].style.display = "block";
            list[index].innerHTML = todo.value;
            delBtn[index].style.visibility = "visible";
            
            break;
        }
    }

}

for (let index = 0; index < 10; index++) {
    delBtn[index].addEventListener('click', () => {
        list[index].innerHTML = "";
        delBtn[index].style.visibility = "hidden";
        list[index].style.display = "none";
    });
}
