function Input({ placeholder }) {
  this.node = document.createElement('input');
  this.node.setAttribute('type', 'text');
  this.node.setAttribute('placeholder', placeholder);
}

const newInput = ({ placeholder }) => new Input({ placeholder }).node;

export default newInput;
