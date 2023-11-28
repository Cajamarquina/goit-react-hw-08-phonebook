import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/General/App';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/General/GeneralStyle';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

export const theme = {
  colors: {
    body: '#F5FFFA',
    accent: '#3DDDA4',
    grey: '#9e9c9c',
    error: '#dc143c',
    bgInput: '#f9f0da',
    black: '#000',
    white: '#FFFFFF',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <ThemeProvider theme={theme}>
            <App />
            <GlobalStyle />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);