document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const addTodoButton = document.getElementById('add-btn');
    const newTodoInput = document.getElementById('new-todo');

    addTodoButton.addEventListener('click', function () {
      const todoText = newTodoInput.value.trim();
      if (todoText !== '') {
        addTodoItem(todoText);
        newTodoInput.value = '';
      }
    });

    function addTodoItem(text) {
      const todoItem = document.createElement('div');
      todoItem.className = 'todo-item';

      const todoText = document.createElement('div');
      todoText.className = 'todo-text';
      todoText.innerText = text;

      const deleteButton = document.createElement('button');
      deleteButton.className = 'delete-btn';
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function () {
        todoItem.remove();
      });

      todoItem.appendChild(todoText);
      todoItem.appendChild(deleteButton);

      todoList.appendChild(todoItem);
    }
  });