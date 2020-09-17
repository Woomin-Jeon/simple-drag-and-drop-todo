import TodoForm from './TodoForm.js';
import TodoContainer from './TodoContainer.js';

function TodoMain() {
  this.node = document.createElement('div');
  this.node.setAttribute('id', 'todo_main');
  this.node.classList.add('hidden');

  this.render = () => {
    this.node.appendChild(TodoForm());
    this.node.appendChild(TodoContainer());
  };

  this.render();
}

const newTodoMain = () => new TodoMain().node;

export default newTodoMain;
