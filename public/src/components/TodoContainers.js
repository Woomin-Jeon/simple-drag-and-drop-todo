import TodoContainer from './TodoContainer.js';
import { store, updator, updateRendering } from '../store.js';

function TodoContainers() {
  this.node = document.createElement('div');
  this.node.classList.add('todo_containers_body')
  this.node.setAttribute('id', 'todo_containers');

  this.render = () => {
    this.node.innerHTML = `<div id='todo_container_main' class='flex'></div>`;

    const main = this.node.querySelector('#todo_container_main');
    main.appendChild(TodoContainer({ category: store.categories[0] }));
    main.appendChild(TodoContainer({ category: store.categories[1] }));
    main.appendChild(TodoContainer({ category: store.categories[2] }));
  }

  updator.push(this.render);
  this.render();
}

const newTodoContainer = () => new TodoContainers().node;

export default newTodoContainer;
