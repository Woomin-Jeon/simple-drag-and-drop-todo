function Input({ id, placeholder }) {
  this.node = document.createElement('div');
  this.create = () => {
    this.node.innerHTML = `
      <input id=${id} type='text' placeholder='${placeholder}'/>
    `;
  };

  this.create();
}

export default ({ id, placeholder }) => new Input({ id, placeholder }).node;

