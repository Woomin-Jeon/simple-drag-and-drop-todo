import Button from './Button.js';

function SideSlider() {
  this.node = document.createElement('div');
  this.node.setAttribute('id', 'side_slider');
  this.node.classList.add('slider');
  this.node.classList.add('hidden');
  
  this.closeSliderButtonEvent = () => {
    this.node.style.animationName = 'slider-close';
    setTimeout(() => this.node.classList.add('hidden'), 1000);
  };
  
  this.node.appendChild(Button({
    className: 'side_slider_close_button',
    title: 'x',
    event: this.closeSliderButtonEvent,
  }));  
}

const newSideSlider = () => new SideSlider().node;

export default newSideSlider;
