import React,{useContext} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Intro from './Component/Intro/intro' 
import About from './Component/about/about'
import ProductList from './Component/productList/productList'
import Contact from './Component/contact/contact'
import Toggle from './Component/toggle/toggle'
import { ThemeContext } from './context'



function App() {
const theme = useContext(ThemeContext) 
const darkmode = theme.state.darkmode
  return (
    <div style={{ backgroundColor:darkmode ? "#000" : "#fff",color:darkmode && "white" }}>
      <Toggle />
      <Intro />
      <About /> 
      <ProductList />
      <Contact />   
    </div> 
   
  )
}

export default App;
