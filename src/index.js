import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import  { AppDataProvider }  from './context/AppDataProvider'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient} contextSharing={true}>
    <BrowserRouter>
    <AppDataProvider>
      <App />
      </AppDataProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
