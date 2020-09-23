import Modal from './Modal.js';
import { updateTodo } from '../apis/todo.js';
import { updateRendering } from '../store.js';

function TodoEditModal({ todo }) {
  this.node = Modal({
    id: `todo_item_edit_modal_${todo.todoid}`,
    title: 'Edit Note',
    text: todo.content,
    event: this.modalEditEvent
  });
  
  this.modalEditEvent = async () => {
    const overlay = document.querySelector('#overlay');
    const updatedContent = this.node.querySelector(`#todo_item_edit_modal_${todo.todoid}_textarea`).value;

    overlay.classList.add('hidden');
    await updateTodo(todo.todoid, updatedContent);
    await updateRendering();
  };
}

const newTodoEditModal = ({ todo }) => new TodoEditModal({ todo }).node;

export default newTodoEditModal;
