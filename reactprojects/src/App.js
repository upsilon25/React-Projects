import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Intro from './Component/Intro/intro' 
import About from './Component/about/about'
import Product from './Component/product/product'
import ProductList from './Component/productList/productList'
import './';


function App() {
  return (
    <div>
     
      <Intro />
      <About />
      <ProductList />

    </div> 
   
  )
}

export default App;
