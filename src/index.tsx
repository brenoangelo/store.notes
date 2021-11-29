import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NotesProvider } from './hooks/useNotes';



ReactDOM.render(
  <NotesProvider>
    <App />
  </NotesProvider>,
  document.getElementById('root')
);
