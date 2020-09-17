import { updator, store, updateRendering } from '../store.js';
import axios from '../apis/customAxios.js';

function TodoResult() {
  this.node = document.createElement('div');
  this.render = async () => {
    this.node.innerHTML = `
      <div id='todo_result'>
        ${store.todos.map(todo => `
          <div>
            <span>(${todo.category})</span>
            <span>${todo.content}</span>
            <button id=${todo.todoid} class='todo_delete_button'>삭제</button>
          </div>`).join('')}
      </div>
    `;
    const todoResult = document.querySelector('#todo_result');
    todoResult.addEventListener('click', async (event) => {
      if (event.target.className !== 'todo_delete_button') {
        return;
      }
      
      const todoId = event.target.id;
      
      await axios.post('/todo/delete', { todoId });

      updateRendering();
    });
  };

  updator.push(this.render);
}

const newTodoResult = () => new TodoResult().node;

export default newTodoResult;
