import Button from './Button.js';

function Popup({ id, question, event }) {
  this.node = document.createElement('div');
  this.node.classList.add('popup');
  this.node.classList.add('hidden');
  this.node.setAttribute('id', id);

  this.closeButtonEvent = () => {
    this.node.classList.add('hidden');
  };

  this.render = () => {
    this.node.innerHTML = `<div>${question}</div>`;
    this.node.appendChild(Button({
      id: 'popup_close_button',
      class: 'popup_button',
      title: '취소',
      event: this.closeButtonEvent,
    }));
    this.node.appendChild(Button({
      id: 'popup_confirm_button',
      class: 'popup_button',
      title: '확인',
      event,
    }));
  };

  this.render();
}

const newPopup = ({ id, question, event }) => new Popup({ id, question, event }).node;

export default newPopup;
