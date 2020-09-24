import Button from  './Button.js';
import Textarea from  './Textarea.js';

function Modal({ title, text, event }) {
  this.node = document.createElement('div');
  this.node.classList.add('hidden');
  this.node.classList.add('modal');

  this.node.textarea = Textarea({ text, className: 'modal_textarea' });
  this.node.button = Button({ title: 'save', event, className: 'modal_button' });

  this.render = () => {
    this.node.innerHTML = `<div class='modal_title'>${title}</div>`;
    this.node.appendChild(this.node.textarea);
    this.node.appendChild(this.node.button);
  };

  this.render();
}

const newModal = ({ title, text, event }) => new Modal({ title, text, event }).node;

export default newModal;
