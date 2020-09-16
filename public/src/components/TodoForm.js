import Input from './Input.js';
import Button from './Button.js';
import { updator } from '../store.js';

function TodoForm() {
  this.node = document.createElement('div');
  this.create = () => {
    this.node.appendChild(Input({ id: 'todo_input', placeholder: '할 일을 입력해주세요'}));
    this.node.appendChild(Button({ id: 'todo_button', title: '입력' }));
  };

  this.node.addEventListener('click', async () => {
    const content = document.getElementById('todo_input').value;

    const response = await fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    updator.forEach(func => func());
  });

  this.create();
}

export default () => new TodoForm().node;
