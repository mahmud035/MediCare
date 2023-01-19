import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './context/AuthProvider/AuthProvider';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
        <ToastContainer position="top-center" autoClose={1000} newestOnTop />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
