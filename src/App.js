import './App.css';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from "./components/Home"

import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
   <div>
    <Router>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>

   </div>
  );
}

export default App;
