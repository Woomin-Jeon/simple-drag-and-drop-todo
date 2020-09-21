import Button from './Button.js';
import Modal from './Modal.js';

function TodoItem({ todo, category }) {
  this.node = document.createElement('div');
  this.node.classList.add('todo_container_item');
  this.node.setAttribute('data-todoid', `${todo.todoid}`);
  this.node.setAttribute('draggable', 'true');

  this.node.addEventListener('dblclick', () => {
    const editModal = document.querySelector(`#todo_item_edit_modal_${todo.todoid}`);
    const overlay = document.querySelector('#overlay');
    
    [editModal, overlay].forEach(dom => dom.classList.remove('hidden'));
  });

  this.render = () => {
    this.node.innerHTML = `<span>${todo.content}</span>`;
    this.node.appendChild(Button({ id: `todo_item_delete_button_${todo.todoid}`, className: 'todo_delete_button', title: '삭제' }))
    this.node.appendChild(Modal({ id: `todo_item_edit_modal_${todo.todoid}`, title: 'Edit Note', text: todo.content }));
    
    this.node.addEventListener('dragstart', (event) => {
      const targetTodoId = event.target.dataset.todoid;
      event.dataTransfer.setData('todoid', targetTodoId);
    });
  };

  this.render();
}

const newTodoItem = ({ todo, category }) => new TodoItem({ todo, category }).node;

export default newTodoItem;
