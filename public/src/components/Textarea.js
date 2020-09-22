function Textarea({ id, text, placeholder }) {
  this.node = document.createElement('textarea');
  this.node.innerText = text;
  this.node.setAttribute('id', id);
  this.node.setAttribute('placeholder', placeholder);
}

const newTextarea = ({ id, text, placeholder }) => new Textarea({ id, text, placeholder }).node;

export default newTextarea;
