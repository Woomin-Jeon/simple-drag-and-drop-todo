import { closeModals } from '../store.js';
import dom from '../domHelper.js';

function Overlay() {
  this.node = document.createElement('div');
  this.node.classList.add('overlay');
  this.node.classList.add('hidden');

  this.node.addEventListener('click', () => {
    closeModals();
    this.node.classList.add('hidden');
  });

  dom['overlay'] = this.node;
}

const newOverlay = () => new Overlay().node;

export default newOverlay;
