import Button from './Button.js';
import TodoEditModal from './TodoEditModal.js';
import { deleteTodo } from '../apis/todo.js';
import { updateRendering } from '../store.js';

function TodoItem({ todo, category }) {
  this.node = document.createElement('div');
  this.node.classList.add('todo_container_item');
  this.node.setAttribute('data-todoid', `${todo.todoid}`);
  this.node.setAttribute('draggable', 'true');

  this.node.addEventListener('dragstart', (event) => {
    const targetTodoId = event.target.dataset.todoid;
    event.dataTransfer.setData('todoid', targetTodoId);
  });

  this.node.addEventListener('dblclick', () => {
    const todoEditModal = document.querySelector(`#todo_item_edit_modal_${todo.todoid}`);
    const overlay = document.querySelector('#overlay');
    
    [todoEditModal, overlay].forEach(dom => dom.classList.remove('hidden'));
  });

  this.deleteButtonEvent = () => {
    const deleteButton = document.querySelector(`#${todo.todoid}`);
    
    deleteButton.addEventListener('click', async (event) => {
      await deleteTodo(todo.todoid);
      await updateRendering();
    });
  };

  this.render = () => {
    this.node.innerHTML = `<span>${todo.content}</span>`;
    this.node.appendChild(Button({
      id: todo.todoid,
      className: 'todo_delete_button',
      title: '삭제',
      event: this.deleteButtonEvent,
    }));
    this.node.appendChild(TodoEditModal({ todo }));
  };

  this.render();
}

const newTodoItem = ({ todo, category }) => new TodoItem({ todo, category }).node;

export default newTodoItem;
