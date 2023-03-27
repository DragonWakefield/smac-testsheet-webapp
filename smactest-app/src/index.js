import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// Context
import { RankProvider } from './context/RankContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RankProvider>
        <App />
      </RankProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

