import Input from './Input.js';
import Button from './Button.js';

function LoginForm() {
  this.node = document.createElement('div');
  this.create = () => {
    this.node.appendChild(Input({ id: 'id_input', placeholder: '아이디를 입력해주세요' }));
    this.node.appendChild(Input({ id: 'password_input', placeholder: '비밀번호를 입력해주세요' }));
    this.node.appendChild(Button({ id: 'login_button', title: '로그인' }));
  };

  this.node.addEventListener('click', async () => {
    const id = document.getElementById('id_input').value;
    const password = document.getElementById('password_input').value;

    const response = await fetch('http://localhost:3000/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, password }),
    });
  });

  this.create();
}

export default () => new LoginForm().node;
