function Input({ id, placeholder }) {
  this.node = document.createElement('div');
  this.render = () => {
    this.node.innerHTML = `
      <input id=${id} type='text' placeholder='${placeholder}'/>
    `;
  };

  this.render();
}

const newInput = ({ id, placeholder }) => new Input({ id, placeholder }).node;

export default newInput;
