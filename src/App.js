//import logo from './logo.svg';
import './App.css';
// import TestComp from './Components/FunctionComponents/TestComp'
// import ReiteratorComp from './Components/ClassComponents/Classcomp';
// import PropsComponent from './Components/FunctionComponents/PropsComponent';
// import StateComponent from './Components/ClassComponents/StateComponent';
import Experience from './Components/FunctionComponents/Experience';
import Home from './Components/FunctionComponents/Home';
import About from './Components/FunctionComponents/About';
import Login from './Components/FunctionComponents/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/FunctionComponents/NavBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <PropsComponent name="KEC" course="MERN"/> */}
    </div>
  );
}

export default App;