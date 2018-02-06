const todoList = document.querySelector('.topics .todo-list');

const form = document.querySelector('.book');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const value = form.querySelector('input[type="text"]').value;
    const li = document.createElement('li');

    li.textContent = value;
    todoList.appendChild(li);
});
