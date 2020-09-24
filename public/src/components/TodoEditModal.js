import Modal from './Modal.js';
import { updateTodo } from '../apis/todo.js';
import { updateRendering } from '../store.js';
import dom from '../domHelper.js';

function TodoEditModal({ todo }) {
  this.modalEditEvent = async () => {
    const updatedContent = this.node.textarea.value;

    dom.overlay.classList.add('hidden');
    await updateTodo(todo.todoid, updatedContent);
    await updateRendering();
  };

  this.node = Modal({
    title: 'Edit Note',
    text: todo.content,
    event: this.modalEditEvent
  });
}

const newTodoEditModal = ({ todo }) => new TodoEditModal({ todo }).node;

export default newTodoEditModal;
