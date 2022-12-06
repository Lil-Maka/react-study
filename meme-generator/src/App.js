import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React from 'react';

function App() {

  return (
    <React.StrictMode>
      <div className="App">
          <Navbar></Navbar>
          <Form></Form>
      </div>
    </React.StrictMode>
    
  );
}

export default App;
