import { store, updateRendering } from '../store.js';
import { moveTodo } from '../apis/todo.js';
import Button from './Button.js';
import TodoForm from './TodoForm.js';
import TodoItem from './TodoItem.js';
import TitleEditModal from './TitleEditModal.js';

function TodoContainer({ category }) {
  this.node = document.createElement('div');
  this.node.classList.add('todo_container');
  this.node.setAttribute('droppable', 'true');

  this.node.addEventListener('dragover', (event) => event.preventDefault());
  this.node.addEventListener('drop', async (event) => {
    const targetTodoId = event.dataTransfer.getData('todoid');

    await moveTodo(targetTodoId, category);
    await updateRendering();
  });

  this.todoAddButtonEvent = () => {
    const todoForm = this.node.querySelector(`#todo_form_${category}`);
    todoForm.classList.remove('hidden');
  }

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

    todoContainerTitle.appendChild(TitleEditModal({ category }));

    todoFormArea.appendChild(TodoForm({ category }));
        todoFormAddButton.appendChild(Button({
      id: `todo_form_add_button_${category}`,
      className: `todo_form_add_button`,
      title: '+',
      event: this.todoAddButtonEvent,
    }));
    todos.map(todo => todoContainerItems.appendChild(TodoItem({ todo, category })));

    todoContainerTitle.addEventListener('dblclick', () => {
      const titleEditModal = document.querySelector(`#todo_container_title_edit_modal_${category}`);
      const overlay = document.querySelector('#overlay');
      
      [titleEditModal, overlay].forEach(dom => dom.classList.remove('hidden'));
    });
  };

  this.render();
}

const newTodoContainer = ({ category }) => new TodoContainer({ category }).node;

export default newTodoContainer;