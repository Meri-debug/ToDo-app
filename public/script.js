const toDoUl = document.getElementById("todoul");

let titleInput = document.getElementById("titleinput");
let statusInput = document.getElementById("status");
let addButton = document.getElementById("addbutton");
let radioInput = document.querySelector('input[name="radiobtn"]')
// let radioInput = document.querySelector('input[name="radiobtn"]:checked').value;

// postTodo function on click
addButton.addEventListener("click", postTodo);

// GET all the todo items from the server
function getTodos() {
    $('#todoul').empty();
    fetch('/api/list') // demodata
        .then(response => response.json())
        .then(function (json) {

            let idCounter = 1;

            json.forEach((todo) => {
                const title = todo.title;
                const deadline = todo.deadline;
                const status = todo.completed; 
                const todoId = todo.id;
                const priority = todo.priority;

                var node = document.createElement("LI");
                node.classList.add("list-group-item");

                node.innerHTML =
                `
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="check${idCounter}">
                    <label class="custom-control-label" for="check${idCounter}">${title}</label>
                    <p>Deadline: ${deadline}</p>
                    <p>Priority: ${priority}</p>
                    <div class="text-right">
                        <span class="col-sm-1">
                                <button type="button" class="btn btn-outline-dark btn-sm" id="mod${todoId}"
                                    value="2" onClick="putTodo(this.id)">Modify</button>
                        </span>
                            <span class="col-sm-offset-10 col-sm-1">
                                <!-- This is the delete button -->
                                <button type="button" class="btn btn-outline-danger btn-sm" id="del${todoId}"
                                    value="1" onClick="delTodo(this.id)">Delete</button>
                        </span>
                    </div>
                </div>
                `
                toDoUl.appendChild(node);

                document.getElementById('mod' + todoId).addEventListener('click', putTodo);

                document.getElementById('del' + todoId).addEventListener('click', delTodo);

                idCounter += 1;
            });
        });
}

// POST a new todo to server
function postTodo() {
    let dateInput = document.getElementById("dateinput");

    // let radioInput = document.querySelector('input[name="radiobtn"]:checked')

    let title = titleInput.value;
    let deadLine = dateInput.value;
    let radio = document.querySelector('input[name="radiobtn"]:checked').value;

    let newToDo = {
        title: title,
        deadline: deadLine,
        completed: false,
        priority: radio
    };

    fetch('/api/list', {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'application/json' }),
        body: JSON.stringify(newToDo)
    }).then(function (res) {
        res.json();
        getTodos();
    })
        //.then((data) => console.log(data))
        .catch((err) => console.log(err));
    
    dateInput.value = "";
    titleInput.value = "";
    radioInput.value = false;
}

// DELETE a todo



function putTodo(clicked_id) {
    const click = clicked_id;
    const id = clicked_id.toString().substring(3);
    console.log(id)

    fetch('http://localhost:3000/api/list/', modTodo)
        .then((res) => res.json())
        .then(data => data.map(post => {
            
        }))
        .catch((err) => console.log(err))
}

// GET all todos on page load
getTodos();

function delTodo(clicked_id) {
    console.log(clicked_id);
}














