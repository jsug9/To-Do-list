const completeToDo = (todos) => {
  for (let i = 0; i < todos.todos.length; i += 1) {
    const checkboxes = document.querySelectorAll('.checkbox');
    const todoTexts = document.querySelectorAll('.todo-text');
    checkboxes[i].addEventListener('change', (e) => {
      if (e.target.checked) {
        todos.complete(i, true);
        todoTexts[i].style = 'text-decoration: line-through';
      } else {
        todos.complete(i, false);
        todoTexts[i].style = 'text-decoration: none';
      }
    });
  }
};

export default completeToDo;