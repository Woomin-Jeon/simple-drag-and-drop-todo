import Input from './Input.js';
import Button from './Button.js';
import { updateRendering } from '../store.js';
import { addTodo } from '../apis/todo.js';

function TodoForm() {
  this.node = document.createElement('div');
  
  this.addButtonEvent = async () => {
    const content = document.querySelector('#todo_input').value;
    await addTodo(content);
    await updateRendering();
  };
  
  this.render = () => {
    this.node.appendChild(Input({ id: 'todo_input', placeholder: '할 일을 입력해주세요'}));
    this.node.appendChild(Button({ id: 'todo_button', title: '입력' }, this.addButtonEvent));
  };

  this.render();
}

const newTodoForm = () => new TodoForm().node;

export default newTodoForm;
