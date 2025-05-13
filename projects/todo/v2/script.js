let todos = JSON.parse(localStorage.getItem('todos')) || [];
let form = document.querySelector('form');

console.log('Loaded from localStorage:', localStorage.getItem('todos'));
console.log('Parsed todos:', todos);

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
    let myList = document.querySelector('.list');
    myList.innerHTML = '';

    todos.forEach((todo, index) => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.innerText = todo;

        let delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';

        let editBtn = document.createElement('button');
        editBtn.innerText = 'Edit';

        let actionWrapper = document.createElement('div');
        actionWrapper.style.display = 'flex';
        actionWrapper.style.gap = '10px';
        actionWrapper.appendChild(delBtn);
        actionWrapper.appendChild(editBtn);

        li.appendChild(p);
        li.appendChild(actionWrapper);

        delBtn.onclick = () => {
            todos.splice(index, 1);
            saveTodos();
            renderTodos();
        };

        editBtn.onclick = () => {
            let edited = prompt('Edit todo', todo);
            if (edited && edited.trim() !== '') {
                todos[index] = edited;
                saveTodos();
                renderTodos();
            }
        };

        myList.appendChild(li);
    });
}

form.onsubmit = function (e) {
    e.preventDefault();
    let input = document.querySelector('form input');
    let value = input.value.trim();
    if (!value) return;
    todos.push(value);
    saveTodos();
    renderTodos();
    input.value = '';
};

renderTodos();
