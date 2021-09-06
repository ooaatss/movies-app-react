import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyles';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
);

