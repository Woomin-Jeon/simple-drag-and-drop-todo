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
    this.node.innerHTML = `
      <span>${todo.content}</span>
      <button id=${todo.todoid} class='todo_delete_button'>삭제</button>
    `;

    this.todoDragEvent();
  };

  this.render();
}

const newTodoItem = ({ todo, category }) => new TodoItem({ todo, category }).node;

export default newTodoItem;
