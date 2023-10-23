import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Import Provider
import { BrowserRouter } from 'react-router-dom';

import { App } from './app';
import { store } from './store/store'; // Adjust the path as needed
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_API_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
);
