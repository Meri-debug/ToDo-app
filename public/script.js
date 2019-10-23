const toDoUl = document.getElementById("todoul");

let titleInput = document.getElementById("titleinput");
let dateInput = document.getElementById("dateinput");
let statusInput = document.getElementById("status");
let addButton = document.getElementById("addbutton");
let radioInput = document.querySelector('input[name="radiobtn"]:checked');

let id = [];

// postTodo function on click
addButton.addEventListener("click", postTodo);

// GET all the todo items from the server
function getTodos() {
    fetch('/api/list') // demodata
        .then(response => response.json())
        .then(function (json) {

            let idCounter = 1;



            json.forEach((todo) => {
                const title = todo.title; // need correct API values
                // const deadLine = todo.time; // need correct API values
                const status = todo.completed; // need correct API values
                const todoId = todo.id;
                id.push(todoId);
                console.log(id);
                
                var node = document.createElement("LI");
                node.classList.add("list-group-item");

                node.innerHTML =
                    `
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check${idCounter}">
                    <label class="custom-control-label" for="check${idCounter}">${title}</label>
                    <div class="text-right">
                        <span class="col-sm-1">
                                <button type="button" class="btn btn-outline-dark btn-sm" id="mod${idCounter}"
                                    value="2">Modify</button>
                        </span>
                            <span class="col-sm-offset-10 col-sm-1">
                                <!-- This is the delete button -->
                                <button type="button" class="btn btn-outline-danger btn-sm" id="del${idCounter}"
                                    value="1">Delete</button>
                        </span>
                    </div>
                </div>
            `
                toDoUl.appendChild(node);

                document.getElementById('mod' + idCounter).addEventListener('click', putTodo);

                document.getElementById('del' + idCounter).addEventListener('click', delTodo);

                idCounter += 1;
            });
        });
}

// POST a new todo to server
function postTodo() {

    let title = titleInput.value;
    let deadLine = dateInput.value;
    let radio = radioInput.value;

    let newToDo = {
        title: title,
        deadline: deadLine,
        completed: false,
        priority: radio
    };

    console.log(newToDo)

    /*
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(newToDo)
    }).then(function (res) {
        res.json()
    })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    */
}

// DELETE a todo



function putTodo() {
    console.log(id);
    console.log('Toimi pls')
}

// GET all todos on page load
getTodos();

function delTodo() {
    console.log(id);

}

// This is scroll top button

$(document).ready(function(){
    $(window).scroll(function () {
           if ($(this).scrollTop() > 50) {
               $('#back-to-top').fadeIn();
           } else {
               $('#back-to-top').fadeOut();
           }
       });
       // scroll body to 0px on click
       $('#back-to-top').click(function () {
           $('#back-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
       
       $('#back-to-top').tooltip('show');

});












