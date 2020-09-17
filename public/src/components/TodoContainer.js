import TodoResult from './TodoResult.js';

function TodoContainer() {
  this.node = document.createElement('div');
  this.node.classList.add('flex');

  this.render = () => {
    this.node.appendChild(TodoResult({ category: 'todo' }));
    this.node.appendChild(TodoResult({ category: 'doing' }));
    this.node.appendChild(TodoResult({ category: 'done' }));
  }

  this.render();
}

const newTodoContainer = () => new TodoContainer().node;

export default newTodoContainer;
