import Input from './Input.js';
import Button from './Button.js';
import { updateRendering } from '../store.js';
import { signin } from '../apis/auth.js';

function LoginForm() {
  this.node = document.createElement('div');
  this.node.setAttribute('id', 'login_form');
  
  this.loginButtonEvent = async () => {
    const id = document.querySelector('#id_input').value;
    const password = document.querySelector('#password_input').value;    
    const response = await signin(id, password);
    
    if (response.status !== 200) {
      return;
    }

    const todoContainers = document.querySelector('#todo_containers');
    todoContainers.classList.remove('hidden');
    todoContainers.classList.add('flex');
    document.querySelector('#login_form').classList.add('hidden');
    await updateRendering();
  }; 

  this.render = () => {
    this.node.appendChild(Input({ id: 'id_input', placeholder: '아이디를 입력해주세요' }));
    this.node.appendChild(Input({ id: 'password_input', placeholder: '비밀번호를 입력해주세요' }));
    this.node.appendChild(Button({ id: 'login_button', title: '로그인' }, this.loginButtonEvent));
  };

  this.render();
}

const newLoginForm = () => new LoginForm().node;

export default newLoginForm;
