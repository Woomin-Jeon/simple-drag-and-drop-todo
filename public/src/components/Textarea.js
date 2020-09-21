function Textarea({ id, text }) {
  this.node = document.createElement('div');
  this.render = () => {
    this.node.innerHTML = `
      <textarea id=${id}>${text}</textarea>
    `;
  };

  this.render();
}

const newTextarea = ({ id, text }) => new Textarea({ id, text }).node;

export default newTextarea;
