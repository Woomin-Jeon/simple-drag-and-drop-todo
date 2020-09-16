import Input from './Input.js';
import Button from './Button.js';

function Todo() {
  this.node = document.createElement('div');
  this.create = () => {
    this.node.appendChild(Input({ id: 'todo_input', placeholder: '할 일을 입력해주세요'}));
    this.node.appendChild(Button({ id: 'todo_button', title: '입력' }));
  };

  this.create();
}

export default () => new Todo().node;
