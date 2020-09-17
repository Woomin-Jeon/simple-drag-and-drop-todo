import axios from '../apis/customAxios.js';
import { updator } from '../store.js';

function TodoResult() {
  this.node = document.createElement('div');
  this.render = async () => {
    const todos = await axios.get('/todo');
    this.node.innerHTML = `
      <div id='todo_result'>
        ${todos.map(todo => `
          <div>
            <span>(${todo.category})</span>
            <span>${todo.content}</span>
            <button id=${todo.todoid} class='todo_delete_button'>삭제</button>
          </div>`).join('')}
      </div>
    `;
    const toroResult = document.querySelector('#todo_result');
    toroResult.addEventListener('click', async (event) => {
      if (event.target.className !== 'todo_delete_button') {
        return;
      }
      
      const todoId = event.target.id;
      
      await axios.post('/todo/delete', { todoId });
      updator.forEach(func => func());
    });
  };

  updator.push(this.render);
}

const newTodoResult = () => new TodoResult().node;

export default newTodoResult;
