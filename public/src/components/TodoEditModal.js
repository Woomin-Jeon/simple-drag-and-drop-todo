import Modal from './Modal.js';
import { updateTodo } from '../apis/todo.js';
import { updateRendering } from '../store.js';

function TodoEditModal({ todo }) {
  this.modalEditEvent = async () => {
    const overlay = document.querySelector('#overlay');
    const updatedContent = this.node.textarea.value;

    overlay.classList.add('hidden');
    await updateTodo(todo.todoid, updatedContent);
    await updateRendering();
  };

  this.node = Modal({
    id: `todo_item_edit_modal_${todo.todoid}`,
    title: 'Edit Note',
    text: todo.content,
    event: this.modalEditEvent
  });
}

const newTodoEditModal = ({ todo }) => new TodoEditModal({ todo }).node;

export default newTodoEditModal;
