import { updator, store, updateRendering } from '../store.js';
import { deleteTodo, moveTodo } from '../apis/todo.js';
import TodoForm from './TodoForm.js';
import TodoItem from './TodoItem.js';

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

  this.deleteButtonEvent = () => {
    const todoContainerItems = document.querySelector(`#todo_container_items_${category}`);
    todoContainerItems.addEventListener('click', async (event) => {
      if (event.target.className !== 'todo_delete_button') {
        return;
      }
      
      const todoId = event.target.id;
      await deleteTodo(todoId)
      await updateRendering();
    });
  }

  this.render = () => {
    const todos = store.todos.filter(todo => todo.category === category);
    this.node.innerHTML = `
      <div>${todos.length} ${category}</div>
      <div id='todo_form_${category}'></div>
      <div id='todo_container_items_${category}'></div>
    `;

    const todoFormArea = document.querySelector(`#todo_form_${category}`);
    todoFormArea.appendChild(TodoForm({ category }));

    const todoContainerItems = document.querySelector(`#todo_container_items_${category}`);
    todos.map(todo => todoContainerItems.appendChild(TodoItem({ todo, category })));

    this.deleteButtonEvent();
  };

  updator.push(this.render);
}

const newTodoContainer = ({ category }) => new TodoContainer({ category }).node;

export default newTodoContainer;
