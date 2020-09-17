import TodoContainer from './TodoContainer.js';

function TodoContainers() {
  this.node = document.createElement('div');
  this.node.setAttribute('id', 'todo_containers');
  this.node.classList.add('hidden');

  this.render = () => {
    this.node.appendChild(TodoContainer({ category: 'todo' }));
    this.node.appendChild(TodoContainer({ category: 'doing' }));
    this.node.appendChild(TodoContainer({ category: 'done' }));
  }

  this.render();
}

const newTodoContainer = () => new TodoContainers().node;

export default newTodoContainer;
