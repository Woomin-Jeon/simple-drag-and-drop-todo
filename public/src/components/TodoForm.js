import Input from './Input.js';
import Button from './Button.js';
import axios from '../apis/customAxios.js';
import { updateRendering } from '../store.js';

function TodoForm() {
  this.node = document.createElement('div');
  this.buttonEvent = async () => {
    const content = document.querySelector('#todo_input').value;
    await axios.post('/todo', { content });

    updateRendering();
  };
  this.render = () => {
    this.node.appendChild(Input({ id: 'todo_input', placeholder: '할 일을 입력해주세요'}));
    this.node.appendChild(Button({ id: 'todo_button', title: '입력' }, this.buttonEvent));
  };

  this.render();
}

const newTodoForm = () => new TodoForm().node;

export default newTodoForm;
