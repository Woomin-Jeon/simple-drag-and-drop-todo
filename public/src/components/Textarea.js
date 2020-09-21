function Textarea({ id, text }) {
  this.node = document.createElement('textarea');
  this.node.innerText = text;
  this.node.setAttribute('id', id);
}

const newTextarea = ({ id, text }) => new Textarea({ id, text }).node;

export default newTextarea;
