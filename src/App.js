import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';


function App() {
  const [cart, setCart] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [showingCart, setShowingCart ] = React.useState(false);


  React.useEffect(() => {
    calculateTotalPrice();
  },[cart]);

  const calculateTotalPrice = function (){
    let totalPrice = 0;
    cart.map((e)=>{
      return totalPrice = e.price + totalPrice;
    });
    setTotalPrice(totalPrice);
  }

  const changeCartVisiility =()=>{
    setShowingCart(!showingCart);
  }

  function addItem (newItem){
    setCart((prevState)=>{
      return[
        ...prevState,
        newItem
      ]
    });
    // changeCartVisiility(true)
  }



  return (
    <div className="App">
      {showingCart &&  <div className='div-background'></div> }
      <Header 
        cartStatus = {cart} 
        addItem={addItem} 
        changeCartVisiility={changeCartVisiility}
      />

      <Cart 
        showingCart={showingCart} 
        changeCartVisiility={changeCartVisiility} 
        cart={cart}
        totalPrice={totalPrice}
      />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage 
          changeCartVisiility={changeCartVisiility}
          />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId"
            element={<ProductDetails
                addItem={addItem}
                 /> }
          />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
