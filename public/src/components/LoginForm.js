import Input from './Input.js';
import Button from './Button.js';
import Header from './Header.js';
import TodoContainers from './TodoContainers.js';
import SideSlider from './SideSlider.js';
import { updateRendering } from '../store.js';
import { signin } from '../apis/auth.js';

function LoginForm() {
  this.node = document.createElement('div');
  this.node.setAttribute('id', 'login_form');

  this.loginButtonEvent = async () => {
    const id = this.idInput.value;
    const password = this.passwordInput.value;    
    const response = await signin(id, password);
    
    if (response.status !== 200) {
      return;
    }

    await updateRendering();

    const app = document.querySelector('#app');
    app.appendChild(SideSlider());
    app.appendChild(Header());
    app.appendChild(TodoContainers());
  
    this.node.classList.add('hidden');  
  };

  this.idInput = Input({ id: 'id_input', placeholder: '아이디를 입력해주세요' });
  this.passwordInput = Input({ id: 'password_input', placeholder: '비밀번호를 입력해주세요' });
  this.loginButton = Button({ id: 'login_button', title: '로그인', event: this.loginButtonEvent.bind(this) });

  this.render = () => {
    this.node.appendChild(this.idInput);
    this.node.appendChild(this.passwordInput);
    this.node.appendChild(this.loginButton);
  };

  this.render();
}

const newLoginForm = () => new LoginForm().node;

export default newLoginForm;
