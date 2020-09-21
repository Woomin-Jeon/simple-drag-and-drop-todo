import { closeModals } from '../store.js';

function Overlay() {
  this.node = document.createElement('div');
  this.node.setAttribute('id', 'overlay');
  this.node.classList.add('overlay');
  this.node.classList.add('hidden');

  this.node.addEventListener('click', () => {
    closeModals();
    this.node.classList.add('hidden');
  });
}

const newOverlay = () => new Overlay().node;

export default newOverlay;
