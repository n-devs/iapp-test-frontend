import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import HomeView from './views/Home.view';
import LoginView from './views/Login.view';
import RegisterView from './views/Register.view';
import ProductView from './views/Product.view';
import UpdateProductView from './views/UpdateProduct.view';
import CreateProductView from './views/CreateProduct.view';
import CartView from './views/Cart.view';
import CreateStoreView from './views/CreateStore.view';
import UpdateStoreView from './views/UpdateStore.view';
import StoreView from './views/Store.view';
import BuyView from './views/Buy.view';
import StoreAllView from './views/StoreAll.view';
import ProductAllView from './views/ProductAll.view';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
          <Route path="product/:pid" element={<ProductView />} />
          <Route path="products" element={<ProductAllView />} />
          <Route path="add-product" element={<CreateProductView />} />
          <Route path="update-product/:pid" element={<UpdateProductView />} />
          <Route path="cart" element={<CartView />} />
          <Route path="add-store" element={<CreateStoreView />} />
          <Route path="update-store" element={<UpdateStoreView />} />
          <Route path="store/:sid" element={<StoreView />} />
          <Route path="stores" element={<StoreAllView />} />
          <Route path="buy" element={<BuyView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
