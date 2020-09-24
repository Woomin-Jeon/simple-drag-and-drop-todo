import { util } from '../store.js';
import dom from '../domHelper.js';

function Overlay() {
  this.node = document.createElement('div');
  this.node.classList.add('overlay');
  this.node.classList.add('hidden');

  this.node.addEventListener('click', () => {
    util.closeModal();
  });

  dom['overlay'] = this.node;
}

const newOverlay = () => new Overlay().node;

export default newOverlay;
