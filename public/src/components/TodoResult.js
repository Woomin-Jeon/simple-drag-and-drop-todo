import axios from '../apis/customAxios.js';
import { updator } from '../store.js';

function TodoResult() {
  this.node = document.createElement('div');
  this.render = async () => {
    const todos = await axios.get('/todo');
    
    this.node.innerHTML = `
      <div id='todo_result'>
        ${todos.map(todo => `<div>${todo.content}</div>`).join('')}
      </div>
    `;
  };

  updator.push(this.render);
}

const newTodoResult = () => new TodoResult().node;

export default newTodoResult;
