let input = document.querySelector(".input_box");
let ul = document.querySelector(".task-list");

input.addEventListener("keydown",function(e){
    //user pressed the key

    // e object -> description -> event

    console.log("Event Object",e);

    if(e.key == "Enter"){
        // user wants to enter the task
        let task = input.value;
        
        // console.log(task);

        let li = document.createElement("li");
        li.innerText = task;
        li.addEventListener("dblclick",function(e){
            console.log("e " , e);
            li.remove();
        })
        
        li.setAttribute("class","task");
        ul.appendChild(li);
        input.value = "";
        // ul.removeChild(li);
    }
})