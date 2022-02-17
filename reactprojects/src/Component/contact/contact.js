import React from 'react'
import "./contact.css"
import photo from "../about/img/ph.jpg"
const Contact = () =>{
    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                     <h1 className="c-title">Lorem ipsum dolor sit amet.</h1>
                     <div className="c-info">
                         <div className="c-info-item">
                             <img src={photo} alt="" className="c-img" srcset=""/>
                              1231222313        
                         </div>
                         <div className="c-info-item">
                             <img src={photo} alt="" className="c-img" srcset=""/>
                              9578522313        
                         </div>
                         <div className="c-info-item">
                             <img src={photo} alt="" className="c-img" srcset=""/>
                              2393922313        
                         </div>
                     </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Lorem ipsum dolor sit ?</b> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus repellendus exercitationem dicta fuga aperiam, ab corrupti alias harum autem non quos, praesentium eos aliquam? Hic quibusdam ipsam dolores aspernatur veritatis.
                    </p>
                    <form action="" className="form">
                       <input type="text" placeholder="name"/> 
                       <input type="text" placeholder="number"/> 
                       <input type="email" placeholder="email"/> 
                       <textarea name="mag" id="" placeholder="message" row="10" cols="10" rows="10"></textarea>
                       <button type="submit" className="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact