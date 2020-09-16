import { updator } from '../store.js';

function TodoResult() {
  this.node = document.createElement('div');
  this.render = async () => {
    const data = await fetch('http://localhost:3000/todo');
    const todos = await data.json();
    
    this.node.innerHTML = `
      <div id='todo_result'>
        ${todos.map(todo => `<div>${todo.content}</div>`).join('')}
      </div>
    `;
  };

  updator.push(this.render);
}

export default () => new TodoResult().node;
