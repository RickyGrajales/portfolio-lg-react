import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Importar estilos aquí en lugar de App.jsx
import './styles/global.css';
import './styles/animations.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);