const toDoArea = document.getElementById("testdiv"); // need correct ID name from HTML file

fetch('https://jsonplaceholder.typicode.com/todos/') // demodata
    .then(response => response.json())
    .then(function(json) {
        let todoItem = '';

        json.forEach((todo) => {
            const title = todo.title; // need correct API values
            // const deadLine = todo.time; // need correct API values
            const status = todo.completed; // need correct API values

            todoItem +=
                `<div class="toDoCard">
                    <p><strong>Task:</strong> ${title}</p> ` +
                    // <p><strong>Deadline:</strong> ${deadLine}</p>
                    `<p><strong>In progress?</strong> ${status}</p>
                </div>`

            toDoArea.innerHTML = todoItem;
        });
    });
















