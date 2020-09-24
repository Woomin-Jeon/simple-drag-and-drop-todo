import Button from  './Button.js';
import Textarea from  './Textarea.js';
import { modals } from '../store.js';

function Modal({ title, text, event }) {
  this.node = document.createElement('div');
  this.node.classList.add('hidden');
  this.node.classList.add('modal');

  this.node.textarea = Textarea({ text });
  this.node.button = Button({ title: 'save', event });

  this.render = () => {
    this.node.innerHTML = `<div>${title}</div>`;
    this.node.appendChild(this.node.textarea);
    this.node.appendChild(this.node.button);
  };

  modals.push(this.node);
  this.render();
}

const newModal = ({ title, text, event }) => new Modal({ title, text, event }).node;

export default newModal;
