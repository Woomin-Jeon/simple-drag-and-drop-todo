import { updator, store, updateRendering } from '../store.js';
import { deleteTodo, moveTodo } from '../apis/todo.js';

function TodoResult({ category }) {
  this.node = document.createElement('div');
  this.node.classList.add('todo_result');
  this.node.setAttribute('droppable', 'true');

  this.node.addEventListener('dragover', (event) => event.preventDefault());
  this.node.addEventListener('drop', async (event) => {
    const targetTodoId = event.dataTransfer.getData('todoid');

    await moveTodo(targetTodoId, category);
    await updateRendering();
  });

  this.deleteButtonEvent = () => {
    const todoResult = document.querySelector(`#todo_result_${category}`);
    todoResult.addEventListener('click', async (event) => {
      if (event.target.className !== 'todo_delete_button') {
        return;
      }
      
      const todoId = event.target.id;
      await deleteTodo(todoId)
      await updateRendering();
    });
  }

  this.todoDragEvent = (event) => {
    const todoItems = document.querySelectorAll('.todo_result_item');

    todoItems.forEach(item => {
      item.addEventListener('dragstart', (event) => {
        const targetTodoId = event.target.dataset.todoid;
        event.dataTransfer.setData('todoid', targetTodoId);
      });
    });
  }

  this.render = () => {
    const todos = store.todos.filter(todo => todo.category === category);
    this.node.innerHTML = `
      <div>${todos.length} ${category}</div>
      <div id='todo_result_${category}'>
        ${todos.map(todo => `
          <div class='todo_result_item' data-todoid='${todo.todoid}' draggable='true'>
            <span>${todo.content}</span>
            <button id=${todo.todoid} class='todo_delete_button'>삭제</button>
          </div>`).join('')}
      </div>
    `;
    
    this.deleteButtonEvent();
    this.todoDragEvent();
  };

  updator.push(this.render);
}

const newTodoResult = ({ category }) => new TodoResult({ category }).node;

export default newTodoResult;
