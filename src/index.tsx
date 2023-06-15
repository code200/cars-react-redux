import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

const ele = document.getElementById('root') as Element;
const root = createRoot(ele);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
