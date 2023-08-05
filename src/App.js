import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
