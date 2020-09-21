function Input({ id, placeholder }) {
  this.node = document.createElement('input');
  this.node.setAttribute('id', id);
  this.node.setAttribute('type', 'text');
  this.node.setAttribute('placeholder', placeholder);
}

const newInput = ({ id, placeholder }) => new Input({ id, placeholder }).node;

export default newInput;
