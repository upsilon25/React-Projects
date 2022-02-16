import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Intro from './Component/Intro/intro' 
import About from './Component/about/about'
import ProductList from './Component/productList/productList'
import Contact from './Component/contact/contact'
import './';


function App() {
  return (
    <div>
     
      <Intro />
      <About />
      <ProductList />
      <Contact />   
    </div> 
   
  )
}

export default App;
