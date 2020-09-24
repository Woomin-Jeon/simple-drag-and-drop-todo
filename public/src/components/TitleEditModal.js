import Modal from './Modal.js';
import { modifyCategoryName } from '../apis/category.js';
import { updateRendering } from '../store.js';

function TitleEditModal({ category }) {
  this.titleEditEvent = async () => {
    const overlay = document.querySelector('#overlay');
    const updatedTitle = this.node.textarea.value;
    
    overlay.classList.add('hidden');
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
