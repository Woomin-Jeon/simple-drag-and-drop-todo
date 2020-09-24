import Button from './Button.js';
import dom from '../domHelper.js';

function SideSlider() {
  this.node = document.createElement('div');
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

  dom['slider'] = this.node;
}

const newSideSlider = () => new SideSlider().node;

export default newSideSlider;
