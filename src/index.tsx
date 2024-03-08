import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import Hooks from './Hook';

const root = ReactDOM.createRoot(
   document.getElementById('root') as HTMLElement
);
root.render(
   <React.StrictMode>
      <Hooks>
         <App />
      </Hooks>
   </React.StrictMode>
);
