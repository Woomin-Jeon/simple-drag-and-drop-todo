import { store, updateRendering, action, util } from '../store.js';
import { moveTodo } from '../apis/todo.js';
import dom from '../domHelper.js';
import Button from './Button.js';
import TodoForm from './TodoForm.js';
import TodoItem from './TodoItem.js';
import TitleEditModal from './TitleEditModal.js';

function TodoContainer({ category }) {
  this.node = document.createElement('div');
  this.node.classList.add('todo_container');
  this.node.setAttribute('droppable', 'true');

  this.node.addEventListener('dragover', (event) => {
    event.preventDefault();
    
    store.dragTarget.classList.add('transparent');

    const { pageX, pageY } = event;
    const adjacentElement = document.elementFromPoint(pageX, pageY);
    const adjacentContainer = adjacentElement.closest('.todo_container');
    let adjacentItem = adjacentElement.closest('.todo_container_item');

    if (!adjacentItem) {
      adjacentItem = document.elementFromPoint(pageX, pageY + 10).closest('.todo_container_item');
    }

    if (!adjacentItem) {
      adjacentContainer.insertAdjacentElement('beforeend', store.dragTarget);
      return;
    }

    const { y, height } = adjacentItem.getClientRects()[0];
    const top = y;
    const bottom = y + height;
    const center = (top + bottom) / 2;

    if (pageY < center) {
      adjacentItem.insertAdjacentElement('beforebegin', store.dragTarget);
    } else {
      adjacentItem.insertAdjacentElement('afterend', store.dragTarget);
    }
  });

  this.node.addEventListener('drop', async (event) => {
    store.dragTarget.classList.remove('transparent');
    const targetTodoId = event.dataTransfer.getData('todoid');

    await moveTodo(targetTodoId, category);
  });

  this.todoAddButtonEvent = () => {
    this.todoForm.classList.remove('hidden');
  }

  this.titleEditModal = TitleEditModal({ category })
  this.todoForm = TodoForm({ category });
  this.todoFormButton = Button({
    className: `todo_form_add_button`,
    title: '+',
    event: this.todoAddButtonEvent.bind(this),
  });

  this.render = () => {
    const todos = store.todos.filter(todo => todo.category === category);
    
    this.node.innerHTML = `
      <div class='flex todo_container_header'>
        <div>
          <span class='todo_container_item_count'>${todos.length}</span>
          <span id='todo_container_title_${category}'>${category}</span>
        </div>
        <div id='todo_form_add_${category}'></div>
      </div>
      <div id='todo_form_${category}_area'></div>
      <div id='todo_container_items_${category}'></div>
    `;

    const todoContainerTitle = this.node.querySelector(`#todo_container_title_${category}`);
    const todoFormAddButton = this.node.querySelector(`#todo_form_add_${category}`);
    const todoFormArea = this.node.querySelector(`#todo_form_${category}_area`);
    const todoContainerItems = this.node.querySelector(`#todo_container_items_${category}`);

    todoContainerTitle.appendChild(this.titleEditModal);
    todoFormArea.appendChild(this.todoForm);
    todoFormAddButton.appendChild(this.todoFormButton);
    todos.map(todo => todoContainerItems.appendChild(TodoItem({ todo, category })));

    todoContainerTitle.addEventListener('dblclick', () => {
      action.setTargetModal(this.titleEditModal);
      util.openModal();
    });
  };

  this.render();
}

const newTodoContainer = ({ category }) => new TodoContainer({ category }).node;

export default newTodoContainer;
