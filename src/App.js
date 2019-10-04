import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './landers/Home';
import AuthLander from './landers/Auth/AuthLander';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/register" render={() => <AuthLander authType={'register'} />} />
        <Route path="/login" render={() => <AuthLander authType={'login'} />} />
      </BrowserRouter>
    </div>
  );
}

export default App;
