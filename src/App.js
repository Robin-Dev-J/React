// import logo from './logo.svg';
// import TestComp from './Components/FunctionComponents/TestComp'
// import ReiteratorComp from './Components/ClassComponents/Classcomp';
// import PropsComponent from './Components/FunctionComponents/PropsComponent';
// import StateComponent from './Components/ClassComponents/StateComponent';
import './App.css';
import Experience from './Components/FunctionComponents/Experience';
import Home from './Components/FunctionComponents/Home';
import About from './Components/FunctionComponents/About';
import Login from './Components/FunctionComponents/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/FunctionComponents/NavBar';
import Footer from './Components/FunctionComponents/footer';
import Reference from './Components/FunctionComponents/Reference';
import Callback from './Components/FunctionComponents/Callback';
import Memo from './Components/FunctionComponents/Memo';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Callback" element={<Callback />}></Route>
          <Route path="/Reference" element={<Reference />}></Route>
          <Route path="/Memo" element={<Memo />}></Route>
          
        </Routes>
      </BrowserRouter>
      {/* <PropsComponent name="KEC" course="MERN"/> */}
      
      <body>
        {/* <div class="cont"><img src={logo} className="App-logo" alt="logo" /></div> */}
      </body>
      <Footer />
    </div>


  );
}

export default App;