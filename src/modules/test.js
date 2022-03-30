import { todosTest } from './todos.js';
import * as Display from './displaytest.js';

delete window.location;
window.location = { reload: jest.fn() }

todosTest.checkStorage();

describe('Test add To-Do', () => {
  test('Test localStorage', () => {
    todosTest.add({
      description: "Test 1",
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

  test('Test item display', () => {
    todosTest.add({
      description: "Test 2",
      isComplete: false,
      index: 1,
    });

    Display.displayTodos()

    const todoLi = document.querySelectorAll('.todo');

    expect(todoLi).toHaveLength(2);
  });
});

describe('Test remove To-Do', () => {
  test('Test remove in localStorage', () => {
    todosTest.delete(0);
    expect(todosTest.todos).toHaveLength(1);
  });

  test('Test item display', () => {
    Display.displayTodos();

    const todoLi = document.querySelectorAll('.todo');

    expect(todoLi).toHaveLength(1);
  });
});