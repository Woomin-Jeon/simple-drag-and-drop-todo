import Input from './Input.js';
import Button from './Button.js';
import axios from '../apis/customAxios.js';
import { updateRendering } from '../store.js';

function LoginForm() {
  this.node = document.createElement('div');
  this.buttonEvent = async () => {
    const id = document.querySelector('#id_input').value;
    const password = document.querySelector('#password_input').value;
    
    await axios.post('/auth/signin', { id, password });

    updateRendering();
  }; 
  this.render = () => {
    this.node.appendChild(Input({ id: 'id_input', placeholder: '아이디를 입력해주세요' }));
    this.node.appendChild(Input({ id: 'password_input', placeholder: '비밀번호를 입력해주세요' }));
    this.node.appendChild(Button({ id: 'login_button', title: '로그인' }, this.buttonEvent));
  };

  this.render();
}

const newLoginForm = () => new LoginForm().node;

export default newLoginForm;
