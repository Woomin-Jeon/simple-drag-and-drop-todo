import { updator } from '../store.js';

function TodoResult() {
  this.node = document.createElement('div');
  this.create = async () => {
    const data = await fetch('http://localhost:3000/todo');
    const todos = await data.json();
    
    this.node.innerHTML = `
      <div id='todo_result'>
        ${todos.map(todo => `<div>${todo.content}</div>`).join('')}
      </div>
    `;
  };

  this.create();
  updator.push(this.create);
}

export default () => new TodoResult().node;
