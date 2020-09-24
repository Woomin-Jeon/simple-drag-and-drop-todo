import Modal from './Modal.js';
import { modifyCategoryName } from '../apis/category.js';
import { updateRendering } from '../store.js';
import dom from '../domHelper.js';

function TitleEditModal({ category }) {
  this.titleEditEvent = async () => {
    const updatedTitle = this.node.textarea.value;
    
    dom.overlay.classList.add('hidden');
    await modifyCategoryName(category, updatedTitle);
    await updateRendering();
  };

  this.node = Modal({
    title: `Edit Title`,
    text: category,
    event: this.titleEditEvent.bind(this),
  });

}

const newTitleEditModal = ({ category }) => new TitleEditModal({ category }).node;

export default newTitleEditModal;
