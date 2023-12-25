import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Shop from './Pages/Shop';
import Auth from './Pages/Auth';
import Checkout from './Pages/Checkout';
import Purchased from './Pages/Purchased-Items';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/purchased-items" element={<Purchased />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
