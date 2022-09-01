
import './App.css';
import { Navbar } from './components';
import {Routes,Route} from "react-router-dom"
import { Cart, ProductsListing } from './features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsListing />} />
        <Route path="/order-summary" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
