import axios from '../apis/customAxios.js';
import TodoResult from './TodoResult.js';

function TodoContainer() {
  this.node = document.createElement('div');
  this.render = () => {
    this.node.appendChild(TodoResult());
  }

  this.render();
}

const newTodoContainer = () => new TodoContainer().node;

export default newTodoContainer;
