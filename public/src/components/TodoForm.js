import Input from './Input.js';
import Button from './Button.js';
import axios from '../apis/customAxios.js';
import { updator } from '../store.js';

function TodoForm() {
  this.node = document.createElement('div');
  this.buttonEvent = async () => {
    const content = document.getElementById('todo_input').value;
    await axios.post('/todo', { content });

    updator.forEach(func => func());
  };
  this.render = () => {
    this.node.appendChild(Input({ id: 'todo_input', placeholder: '할 일을 입력해주세요'}));
    this.node.appendChild(Button({ id: 'todo_button', title: '입력' }, this.buttonEvent));
  };

  this.render();
}

const newTodoForm = () => new TodoForm().node;

export default newTodoForm;
