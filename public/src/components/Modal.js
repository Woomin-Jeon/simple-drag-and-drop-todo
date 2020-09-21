import Button from  './Button.js';
import Textarea from  './Textarea.js';
import { modals } from '../store.js';

function Modal({ id, title, text }, event) {
  this.node = document.createElement('div');
  this.node.setAttribute('id', id);
  this.node.classList.add('hidden');
  this.node.classList.add('modal');

  this.render = () => {
    this.node.innerHTML = `<div>${title}</div>`;
    this.node.appendChild(Textarea({ id: `${id}_textarea`, text }));
    this.node.appendChild(Button({ id: `${id}_button`, title: 'save' }, event));
  };

  modals.push(this.node);
  this.render();
}

const newModal = ({ id, title, text }, event) => new Modal({ id, title, text }, event).node;

export default newModal;
