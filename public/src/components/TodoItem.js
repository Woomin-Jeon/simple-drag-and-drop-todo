import Button from './Button.js';

function TodoItem({ todo, category }) {
  this.node = document.createElement('div');
  this.node.classList.add('todo_container_item');
  this.node.setAttribute('data-todoid', `${todo.todoid}`);
  this.node.setAttribute('draggable', 'true');

  this.todoDragEvent = (event) => {
    this.node.addEventListener('dragstart', (event) => {
      const targetTodoId = event.target.dataset.todoid;
      event.dataTransfer.setData('todoid', targetTodoId);
    });
  }

  this.render = () => {
    this.node.innerHTML = `<span>${todo.content}</span>`;
    this.node.appendChild(Button({ id: todo.todoid, className: 'todo_delete_button', title: '삭제' }))
    this.todoDragEvent();
  };

  this.render();
}

const newTodoItem = ({ todo, category }) => new TodoItem({ todo, category }).node;

export default newTodoItem;
