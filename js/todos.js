function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}

function displayTodos(todos) {
    // get the container.
    const todoContainer = document.getElementById('todo-container');
    for (const todo of todos) {
        // create the child element;
        const todoDiv = document.createElement('div');
        // set inner text or innerHTML
        todoDiv.innerHTML = `
            <h3>title: ${todo.title}</h3>
            <p>User: ${todo.userId} </p>
            <p> Is completed: ${todo.completed ? 'Complete' : 'Not Complete'}

        `
        // appendChild
        todoContainer.appendChild(todoDiv)
    }
}

loadTodos();