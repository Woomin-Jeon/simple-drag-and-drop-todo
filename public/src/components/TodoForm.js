import Input from './Input.js';
import Button from './Button.js';
import { updateRendering } from '../store.js';
import { addTodo } from '../apis/todo.js';

function TodoForm({ category }) {
  this.node = document.createElement('div');
  this.node.setAttribute('id', 'todo_form');
  
  this.addButtonEvent = async () => {
    const content = document.querySelector(`#todo_input_${category}`).value;
    await addTodo(content, category);
    await updateRendering();
  };
  
  this.render = () => {
    this.node.appendChild(Input({ id: `todo_input_${category}`, placeholder: '할 일을 입력해주세요'}));
    this.node.appendChild(Button({ id: `todo_button_${category}`, title: '입력' }, this.addButtonEvent));
  };

  this.render();
}

const newTodoForm = ({ category }) => new TodoForm({ category }).node;

export default newTodoForm;
