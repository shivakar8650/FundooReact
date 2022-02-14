import './App.css';
 import Signup from './pages/signup/Signup';
 import Signin from './pages/singnin/Signin';
import Forget from './pages/forget/Forget';
import Reset from './pages/reset/Reset';
import Dash from './pages/dash/Dash';
// import { render } from "react-dom";
  import {  BrowserRouter ,Routes, Link , Route} from "react-router-dom";
 import Takenote from './component/takeNote/Takenote';
import Displaynote from './component/displayNote/Displaynote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/forget" element={<Forget/>} />
          <Route path="/reset/:id" element={<Reset/>} />
          <Route path="/dash" element={<Dash/> } />
          <Route path="/note" element={<Takenote /> } />
          <Route path="/displaynote" element={<Displaynote /> } />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
