import './style.css';
import todos from './modules/todos.js';
import todoList from './modules/htmlElements.js';
import storageAvailable from './modules/storageAvailable.js';

const sortedTodos = todos.sort(function(a, b) {
  if ( a.index < b.index ){
    return -1;
  }
  if ( a.index > b.index ){
    return 1;
  }
  return 0;
});

sortedTodos.forEach((todo) => {
  const content = document.createElement('li');
  content.setAttribute('class', 'todo');
  content.innerHTML = `
    <div class="todo-left">
      <input type="checkbox" class="checkbox" ${todo.isComplete ? 'checked' : ''}>
      <label class="todo-text" contenteditable="true">${todo.description}</label>
    </div>
    <button class="remove-button"><span class="iconify delete" data-icon="fa-solid:trash-alt"></span></span></button>
  `;
  todoList.appendChild(content);
});

const todoInput = document.getElementById('todo-input')

const checkboxes = document.getElementsByClassName('checkbox');
const todoTexts = document.getElementsByClassName('todo-text');
const removeButtons = document.getElementsByClassName('remove-button');