import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import getRoutes from './routes';

ReactDOM.render(
  getRoutes(),
  document.getElementById('root')
);
