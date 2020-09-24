import Button from './Button.js';
import TodoEditModal from './TodoEditModal.js';
import Popup from './Popup.js';
import { deleteTodo } from '../apis/todo.js';
import { updateRendering, action, util } from '../store.js';
import dom from '../domHelper.js';

function TodoItem({ todo, category }) {
  this.node = document.createElement('div');
  this.node.classList.add('todo_container_item');
  this.node.setAttribute('data-todoid', `${todo.todoid}`);
  this.node.setAttribute('draggable', 'true');

  this.node.addEventListener('dragstart', (event) => {
    const targetTodoId = event.target.dataset.todoid;
    event.dataTransfer.setData('todoid', targetTodoId);
    
    action.setDragTarget(event.target);
  });

  this.node.addEventListener('dblclick', (event) => {
    action.setTargetModal(this.todoEditModal);
    util.openModal();
  });

  this.openDeletePopupEvent = () => {
    this.popup.classList.remove('hidden');
  }

  this.deleteButtonEvent = async (event) => {        
    await deleteTodo(todo.todoid);
    await updateRendering();
  };

  this.todoEditModal = TodoEditModal({ todo });
  this.popup = Popup({
    question: '선택하신 카드를 삭제 하시겠습니까?',
    event: this.deleteButtonEvent.bind(this),
  });
  this.deleteButton = Button({
    className: 'todo_delete_button',
    title: 'x',
    event: this.openDeletePopupEvent.bind(this),
  });

  this.render = () => {
    this.node.innerHTML = `<div>${todo.content}</div>`;
    const div = document.createElement('div');
    this.node.appendChild(div);
    div.appendChild(this.deleteButton);
    this.node.appendChild(this.todoEditModal);
    this.node.appendChild(this.popup);
  };

  this.render();
}

const newTodoItem = ({ todo, category }) => new TodoItem({ todo, category }).node;

export default newTodoItem;
