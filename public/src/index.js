import LoginForm from './components/LoginForm.js';
import Overlay from './components/Overlay.js';

const app = document.getElementById('app');

app.appendChild(Overlay());
app.appendChild(LoginForm());