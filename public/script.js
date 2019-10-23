const toDoUl = document.getElementById("todoul");

let titleInput = document.getElementById("titleinput");
let dateInput = document.getElementById("dateinput");
let statusInput = document.getElementById("status");
let addButton = document.getElementById("addbutton");


// postTodo function on click
addButton.addEventListener("click", postTodo);

// GET all the todo items from the server
function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos') // demodata
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

            /*

            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="check1" checked>
                <label class="custom-control-label" for="check1">Example todo item</label>
            </div>
            todoItem +=
                `<div class="toDoCard" id="${todoId}">
                    <p><strong>Task:</strong> ${title}</p> ` +
                    // <p><strong>Deadline:</strong> ${deadLine}</p>
                    `<p><strong>In progress?</strong> ${status}</p>
                </div>`

                var node = document.createElement("LI");                 // Create a <li> node
                var textnode = document.createTextNode("Water");         // Create a text node
                node.appendChild(textnode);                              // Append the text to <li>
                document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

                <li class="list-group-item">
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="check1" checked>
                        <label class="custom-control-label" for="check1">To do item 01</label>
                    </div>
                </li>

            toDoArea.innerHTML = todoItem;
            */
        });
    });
}

// POST a new todo to server
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
}

// GET all todos on page load
getTodos();
















