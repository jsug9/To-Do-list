import { todosTest } from './todos.js';
import displayTodos from './displaytest.js';

delete window.location;
window.location = { reload: jest.fn() };

todosTest.checkStorage();

describe('Test add To-Do', () => {
  test('Test localStorage', () => {
    todosTest.add({
      description: 'Test 1',
      isComplete: false,
      index: 1,
    });
    expect(todosTest.todos).toEqual([
      {
        description: 'Test 1',
        isComplete: false,
        index: 1,
      },
    ]);
  });

  test('Test item is displayed when added', () => {
    todosTest.add({
      description: 'Test 2',
      isComplete: false,
      index: 1,
    });

    displayTodos();

    const todoLi = document.querySelectorAll('.todo');

    expect(todoLi).toHaveLength(2);
  });
});

describe('Test remove To-Do', () => {
  test('Test remove in localStorage', () => {
    todosTest.delete(0);
    expect(todosTest.todos).toHaveLength(1);
  });

  test('Test item is removed visually', () => {
    todosTest.delete(0);
    displayTodos();

    const todoLi = document.querySelectorAll('.todo');

    expect(todoLi).toHaveLength(0);
  });
});