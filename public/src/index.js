import LoginForm from './components/LoginForm.js';
import TodoContainers from './components/TodoContainers.js';
import Overlay from './components/Overlay.js';

const app = document.getElementById('app');

app.appendChild(Overlay());
app.appendChild(LoginForm());
app.appendChild(TodoContainers());
