import logo from './logo.svg';
import './App.css';
import TestComp from './components/functionalComponents/TestComp';
import ReiteratorComp from './Components/ClassComponents/Classcomp';

function App() {
  return (
    <div className="App">
      <ReiteratorComp/>
      <header className="App-header">
      <TestComp/>
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
          Learn React form Robin
        </a>
      </header>
    </div>
  );
}

export default App;