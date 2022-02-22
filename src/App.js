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
import Icon from './component/icons/Icon';
import Archive from './pages/Archive/Archive';
import Trash from './pages/Trash/Trash';


function App() {
  return (
    <div className="App">
        {/* <Route path="/login" element={<Signin/>} /> */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="login" element={<Signin/>} />
          <Route path="forget" element={<Forget/>} />
          <Route path="reset/:id" element={<Reset/>} />
          {/* <Route path="dashbord" element={<Dash/> } >
          <Route exact path="/dashbord/archive" element={<Archive />} />
            <Route exact path="/dashbord/trash" element={<Trash />} />
          </Route> */}
          <Route path='/dashbord/*' element={<Dash/>}>
            <Route path='archive' element={<Archive />} />
            <Route path='trash' element={<Trash />} />
          </Route>
          <Route path="note" element={<Takenote /> } />
          <Route path="icon" element={<Icon/> } />
          <Route path="displaynote" element={<Displaynote /> } />

          {/* <Route path="/dashbord/archive" element={<Archive/> } /> */}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
