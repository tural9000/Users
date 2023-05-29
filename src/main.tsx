import ReactDOM from 'react-dom';
import './styles/index.scss';
import {Provider} from 'react-redux';
import { store } from './store/index';
import App from './comonents/app/App';
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);
