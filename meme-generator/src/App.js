import logo from './logo.svg';
import './App.css';

function App() {
  const parentFunction = function(){
    console.log("New function!")
  }

  return (
    <div className="App"  onClick={parentFunction}>
      <p>parent function starts here</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
         
        >
          Learn React
        </a>
      </header>
      <p>Parent function ends here</p>
    </div>
  );
}

export default App;
