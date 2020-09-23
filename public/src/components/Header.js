import Button from './Button.js';

function Header() {
  this.node = document.createElement('header');
  this.node.classList.add('flex');
  this.node.classList.add('header');

  this.menuButtonEvent = () => {
    const slider = document.querySelector('#side_slider');
    slider.classList.remove('hidden');
    slider.style.animationName = 'slider-open';
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
