import { updator, store, updateRendering } from '../store.js';
import { deleteTodo } from '../apis/todo.js';

function TodoResult({ category }) {
  this.node = document.createElement('div');
  this.node.classList.add('todo_result');

  this.deleteButtonEvent = () => {
    const todoResult = document.querySelector('#todo_result');
    todoResult.addEventListener('click', async (event) => {
      if (event.target.className !== 'todo_delete_button') {
        return;
      }
      
      const todoId = event.target.id;
      await deleteTodo(todoId)
      await updateRendering();
    });
  }

  this.render = async () => {
    this.node.innerHTML = `
      <div id='todo_result'>
        ${store.todos.filter(todo => todo.category === category).map(todo => `
          <div class='todo_result_item'>
            <span>${todo.content}</span>
            <button id=${todo.todoid} class='todo_delete_button'>삭제</button>
          </div>`).join('')}
      </div>
    `;
    
    this.deleteButtonEvent();
  };

  updator.push(this.render);
}

const newTodoResult = ({ category }) => new TodoResult({ category }).node;

export default newTodoResult;
