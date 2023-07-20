import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { Products } from './components/products/Products';
import { Cart } from './components/cart/Cart';
import { Header2 } from './components/header/Header2';
import { Form } from './components/form/Form';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <App />
    </div>,
  },
  {
    path: "/home",
    element: <div>Hello Home!</div>,
  },
  {
    path: "/products",
    element: <>
      <Header2 />
      < CartProvider>
        <Products />
        <Cart />
      </CartProvider>
    </>

  },
  {
    path: "/login",
    element: <div>
     <Form/>
    </div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
