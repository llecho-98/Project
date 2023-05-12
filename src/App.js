// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="login-container">
          <h2>Login</h2>
          <form id="login-form">
            <label for="username">Username</label><br/>
            <input type="text" id="username" name="username"/><br/>

            <label for="password">Password</label><br/>
            <input type="password" id="password" name="password"/><br/>

            <button type="submit">Login</button>
          </form>
          <p id="error-message" class="error-message"></p>
        </div>
      </header>
    </div>
  );
}

export default App;
