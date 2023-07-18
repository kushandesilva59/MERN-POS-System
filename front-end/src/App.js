import './App.css';
import {About2} from './components/about/About2'
import { Customers } from './components/customers/Customers';
import { Header2 } from './components/header/Header2';
import {Home} from './components/home/Home'
import {Products} from './components/products/Products'
import {Footer2} from './components/footer/Footer2'
import { Copyright } from './components/copyright/Copyright';

function App() {
  return (
    <div className="App">
      <Header2/>
      <Home/>
      <About2/>
      <Products/>
      <Customers/>
      <Footer2/>  
      <Copyright/>
    </div>
  );
}

export default App;
