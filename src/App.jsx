import React, { useState } from "react";
import "./App.css";
import Login from './components/Login'; 
import Register from './components/Register'; 
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); 

  return (
    <div className="App">
      {currentPage === 'login' && (
        <Login 
          onSwitchRegister={() => setCurrentPage('register')} 
          onSwitchForgot={() => setCurrentPage('forgot')} 
        />
      )}
      
      {currentPage === 'register' && (
        <Register onSwitchLogin={() => setCurrentPage('login')} />
      )}
      
      {currentPage === 'forgot' && (
        <ForgotPassword onSwitchLogin={() => setCurrentPage('login')} />
      )}
    </div>
  );
}

export default App;