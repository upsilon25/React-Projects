import React from 'react'
import "./productList.css"
import Product from '../product/product'
import {Products} from '../data/data'
const ProductList = () =>{
    return (
        <div>
            <div className="pl">
                <div className="pl-texts">
                    <h1 className="pl-title">The name of Resume</h1>
                    <p className="pl-desc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus non consequatur reiciendis perspiciatis beatae nemo nobis ducimus odit omnis accusantium. Id unde totam delectus eos illum, porro quis similique accusamus placeat sunt fugiat asperiores deserunt tempora fugit provident dolorem impedit exercitationem! Dolor quaerat voluptatum officiis, eum unde harum incidunt! Molestiae?</p>
                </div>
                <div className="pl-list">
                   {Products.map((items)=>(
                  <Product key={items.id} img={items.img} link={items.link} />
                   ))}
                    

                </div>

            </div>
        </div>
    )
}
export default ProductList