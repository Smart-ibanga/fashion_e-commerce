
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Header from './components/Header/Header';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path='/checkout' element={<Checkout />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
