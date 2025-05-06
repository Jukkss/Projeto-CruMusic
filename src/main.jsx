import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // Importação do Bootstrap
import App from './App.jsx'; // Importação única do App

// Renderização usando createRoot (React 18)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);