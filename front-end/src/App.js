import './App.css';
import {About2} from './components/about/About2'
import { Customers } from './components/customers/Customers';
import { Header2 } from './components/header/Header2';
import {Home} from './components/home/Home'
import {Products} from './components/products/Products'

function App() {
  return (
    <div className="App">
      <Header2/>
      <Home/>
      <About2/>
      <Products/>
      <Customers/>
    </div>
  );
}

export default App;
