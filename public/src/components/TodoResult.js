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
    const deleteButtons = document.querySelectorAll('#todo_result > div > .todo_delete_button');
    deleteButtons.forEach(button => {
      button.addEventListener('click', async (event) => {
        const todoId = event.target.id;

        await axios.post('/todo/delete', { todoId });
        updator.forEach(func => func());
      });
    });
  };

  updator.push(this.render);
}

const newTodoResult = () => new TodoResult().node;

export default newTodoResult;
