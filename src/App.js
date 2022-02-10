import './App.css';
 import Signup from './pages/signup/Signup';
 import Signin from './pages/singnin/Signin';
import Forget from './pages/forget/Forget';
import Reset from './pages/reset/Reset';
import Dashbord from './pages/dashbord/Dashbord';
// import { render } from "react-dom";
  import {  BrowserRouter ,Routes, Link , Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/forget" element={<Forget/>} />
          <Route path="/reset/:id" element={<Reset/>} />
          {/* <Route path="/dashbord" component={Dashbord } /> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
