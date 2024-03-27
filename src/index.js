import ReactDOM from 'react-dom';
import { App } from 'components/App';
import { Provider } from 'react-redux'; // Import from 'react-redux'
import { store, persistor } from './redux/store'; // Import the store directly, no need for persistor
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);
