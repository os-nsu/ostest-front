import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store.ts';
import App from './App.tsx';
import './styles/main.scss';
import { PrimeReactProvider } from 'primereact/api';
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PrimeReactProvider>
          <App />
        </PrimeReactProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
