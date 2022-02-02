import logo from './logo.svg';
import './App.css';
//import Signup from './pages/signup/Signup';
import Signin from './pages/singnin/Signin';
import Forget from './pages/forget/Forget';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
       {/* <Signup /> */}
       {/* <Signin /> */}
       <Forget />
    </div>
  );
}

export default App;
