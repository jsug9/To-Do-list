import './style.css';
import Todos from './modules/todos.js';
import storageAvailable from './modules/storageAvailable.js';

const todoInput = document.getElementById('todo-input')

const todoTexts = document.getElementsByClassName('todo-text');

// const sortedTodos = todos.sort(function(a, b) {
//   if ( a.index < b.index ){
//     return -1;
//   }
//   if ( a.index > b.index ){
//     return 1;
//   }
//   return 0;
// });

const todos = new Todos();

if (storageAvailable('localStorage')) {
  todos.add({
    description: 'Take a bath',
    isComplete: false,
    index: 0,
  });
  todos.add({
    description: 'Brush my teeth',
    isComplete: true,
    index: 1,
  });
  todos.add({
    description: 'Finish the assignment',
    isComplete: false,
    index: 2,
  });

  todos.checkStorage();

  todos.showTodos();

  for (let i = 0; i < todos.todos.length; i += 1) {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons[i].addEventListener('click', () => {
      todos.delete(i);
    });
  }

  for (let i = 0; i < todos.todos.length; i += 1) {
    const checkboxes = document.querySelectorAll('.checkbox');
    checkboxes[i].addEventListener('change', (e) => {
      if(e.target.checked){
        todos.complete(i)
      } else {
        todos.notComplete(i)
      }
      todos.save();
      console.log(todos.todos);
    });
  }

  todoInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      todos.add({
        description: todoInput.value,
        isComplete: false,
        index: todos.todos.length,
      });
      todos.save();
      console.log(todos.todos);
      todoInput.value = '';
      window.location.reload();
    }
  });
};