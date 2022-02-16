import React from 'react'
import "./product.css"

const Product = ({img,link}) =>{
    return(
        
     <div className="p">
         <div className="p-browser">
             <div className="p-circle p1"></div>
             <div className="p-circle p2"></div>
             <div className="p-circle p3"></div>
         </div>
         <a href={link} target="_blank" rel="noreferrer">
             <img src={img} alt="" className="p-a" />
         </a>
     </div>
         

    )
}
export default Product