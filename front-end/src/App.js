import './App.css';
import {About2} from './components/about/About2'
import { Customers } from './components/customers/Customers';
import { Header2 } from './components/header/Header2';
import {Home} from './components/home/Home'
import {Products} from './components/products/Products'
import {Footer2} from './components/footer/Footer2'
import { Copyright } from './components/copyright/Copyright';
import { CartProvider } from 'react-use-cart';
import { Cart } from './components/cart/Cart';
import Axios from 'axios';
import { Payment } from './components/payment/Payment';


function App() {
  

  return (
    <div className="App">
    {/* < CartProvider>
      <Products/>
      <Cart/>
     </CartProvider> */}

     {/* <Header2/> */}
     <Home/>
     <About2/>
     <Customers/>
     <Footer2/>
     <Copyright/>

     {/* <Payment/> */}
    </div>
  );
}

export default App;
