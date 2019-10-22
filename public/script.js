const toDoArea = document.getElementById("testdiv"); // need correct ID name from HTML file

let titleInput = document.getElementById("titleinput");
let dateInput = document.getElementById("dateinput");
let statusInput = document.getElementById("status");
let addButton = document.getElementById("addbutton");

addButton.addEventListener("click", postTodo);

function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos') // demodata
    .then(response => response.json())
    .then(function(json) {
        let todoItem = '';

        json.forEach((todo) => {
            const title = todo.title; // need correct API values
            // const deadLine = todo.time; // need correct API values
            const status = todo.completed; // need correct API values
            const todoId = todo.id;

            todoItem +=
                `<div class="toDoCard" id="${todoId}">
                    <p><strong>Task:</strong> ${title}</p> ` +
                    // <p><strong>Deadline:</strong> ${deadLine}</p>
                    `<p><strong>In progress?</strong> ${status}</p>
                </div>`

            toDoArea.innerHTML = todoItem;
        });
    });
}

function postTodo() {

    let title = titleInput.value;
    let deadLine = dateInput.value;
    let status = statusInput.value;

    //console.log(status);

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

    getTodos();
}

getTodos();
















