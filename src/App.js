import logo from './logo.svg';
import './App.css';
import TestComp from './Components/FunctionComponents/TestComp'
import ReiteratorComp from './Components/ClassComponents/Classcomp';
import PropsComponent from './Components/FunctionComponents/PropsComponent';
import StateComponent from './Components/ClassComponents/StateComponent';
function App() {
  return (
    <div className="App">
      <PropsComponent name="robin" course="Mern" />   
      <ReiteratorComp/>
      <header className="App-header">
        
      <TestComp/>
      
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>
          Edit <code>src/App.js</code> and save to reload.
          </b>
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
      <body>
        <div class="container"><StateComponent/></div>
      </body>
      <footer>
        <div class="footer1">
      &copy; 2024 React. All rights reserved.
      </div>
      </footer>
    </div>
  );
}

export default App;