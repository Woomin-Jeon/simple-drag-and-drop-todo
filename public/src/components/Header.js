import Button from './Button.js';
import dom from '../domHelper.js';

function Header() {
  this.node = document.createElement('header');
  this.node.classList.add('flex');
  this.node.classList.add('header');

  this.menuButtonEvent = () => {
    dom.slider.classList.remove('hidden');
    dom.slider.style.animationName = 'slider-open';
  }

  this.node.innerHTML = `<div>TODO</div>`;
  this.node.appendChild(Button({
    className: 'header_menu',
    title: 'menu',
    event: this.menuButtonEvent
  }));
}

const newHeader = () => new Header().node;

export default newHeader;
