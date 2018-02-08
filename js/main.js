const todoList = document.querySelector('.topics .todo-list');
const form = document.querySelector('.book');

const taskList = document.querySelector('.tasks-list');
const task = document.querySelector('.task');

form.addEventListener('submit', addForm, false);
task.addEventListener('submit', addTask, false);

function addForm(event) {
    event.preventDefault();

    const value = form.querySelector('input[type="text"]').value;
    const li = document.createElement('li');

    li.textContent = value;
    todoList.appendChild(li);
}

function addTask(event) {
    event.preventDefault();

    const value = task.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const span = document.createElement('span');
    const checkbox = document.createElement('input');

    checkbox.type = 'checkbox';
    checkbox.classList = 'regular-checkbox';

    li.classList = 'item';
    span.textContent = value;
    li.appendChild(checkbox);
    li.appendChild(span);

    taskList.insertBefore(li, taskList.firstElementChild);
}
