import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Todoprovider } from './context/Todocontext'; // Import Todoprovider
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Todoprovider>
      <App />
    </Todoprovider>
  </StrictMode>
);
