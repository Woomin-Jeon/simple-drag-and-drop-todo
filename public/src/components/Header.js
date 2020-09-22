import Button from './Button.js';

function Header() {
  this.node = document.createElement('header');
  this.node.classList.add('flex');
  this.node.classList.add('header');

  this.menuButtonEvent = () => {
    //TODO: 아래 코드 제거 및 이벤트 구현
    alert('menu button clicked');
  }

  this.node.innerHTML = `<div>TODO</div>`;
  this.node.appendChild(Button({
    id: 'header_menu_button',
    className: 'header_menu',
    title: 'menu',
    event: this.menuButtonEvent
  }));
}

const newHeader = () => new Header().node;

export default newHeader;
