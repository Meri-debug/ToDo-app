const toDoUl = document.getElementById("todoul");

let titleInput = document.getElementById("titleinput");
let dateInput = document.getElementById("dateinput");
let statusInput = document.getElementById("status");
let addButton = document.getElementById("addbutton");
let radioInput = document.querySelector('input[name="radiobtn"]:checked');

// postTodo function on click
addButton.addEventListener("click", postTodo);

// GET all the todo items from the server
function getTodos() {
    fetch('/api/list') // demodata
    .then(response => response.json())
    .then(function(json) {

        let idCounter = 1;

        json.forEach((todo) => {
            const title = todo.title; // need correct API values
            // const deadLine = todo.time; // need correct API values
            const status = todo.completed; // need correct API values
            const todoId = todo.id;

            var node = document.createElement("LI");
            node.classList.add("list-group-item");
            node.innerHTML = 
            `
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check${idCounter}">
                    <label class="custom-control-label" for="check${idCounter}">${title}</label>
                </div>
            `

            toDoUl.appendChild(node);

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



// GET all todos on page load
getTodos();
















