import Input from './Input.js';
import Button from './Button.js';
import axios from '../apis/customAxios.js';

function LoginForm() {
  this.node = document.createElement('div');
  this.buttonEvent = async () => {
    const id = document.getElementById('id_input').value;
    const password = document.getElementById('password_input').value;
    
    await axios.post('/auth/signin', { id, password });
  }; 
  this.render = () => {
    this.node.appendChild(Input({ id: 'id_input', placeholder: '아이디를 입력해주세요' }));
    this.node.appendChild(Input({ id: 'password_input', placeholder: '비밀번호를 입력해주세요' }));
    this.node.appendChild(Button({ id: 'login_button', title: '로그인' }, this.buttonEvent));
  };

  this.render();
}

export default () => new LoginForm().node;
