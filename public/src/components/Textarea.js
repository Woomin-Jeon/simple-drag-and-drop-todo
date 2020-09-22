function Textarea({ id, text, placeholder, event }) {
  this.node = document.createElement('textarea');
  this.node.innerText = text;
  this.node.setAttribute('id', id);
  this.node.setAttribute('placeholder', placeholder);

  if (event) {
    this.node.addEventListener('input', event);
  }
}

const newTextarea = ({ id, text, placeholder, event }) => new Textarea({ id, text, placeholder, event }).node;

export default newTextarea;
