import React from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import UserList from './components/UserList/UserList';
import './App.css';

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <UserList />
      </div>
    </DarkModeProvider>
  );
}

export default App;
