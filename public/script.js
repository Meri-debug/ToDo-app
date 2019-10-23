const toDoUl = document.getElementById("todoul");

let titleInput = document.getElementById("titleinput");
let dateInput = document.getElementById("dateinput");
let statusInput = document.getElementById("status");
let addButton = document.getElementById("addbutton");

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
    let status = statusInput.value;

    let newToDo = {
        title: title,
        status: status
    };

    console.log(newToDo)

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify(newToDo)
    }).then(function (res) {
        res.json()
    })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}

// GET all todos on page load
getTodos();

function delTodo() {
    console.log(id);

}

function putTodo() {
    console.log(id);
    console.log('Toimi pls')
}














