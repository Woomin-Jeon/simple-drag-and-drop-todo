function Textarea({ className, text, placeholder, event }) {
  this.node = document.createElement('textarea');
  this.node.innerText = text;
  this.node.classList.add(className);
  this.node.setAttribute('placeholder', placeholder);

  if (event) {
    this.node.addEventListener('input', event);
  }
}

const newTextarea = ({ className, text, placeholder, event }) =>
  new Textarea({ className, text, placeholder, event }).node;

export default newTextarea;
