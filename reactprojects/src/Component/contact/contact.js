import React, { useRef, useState } from 'react'
import "./contact.css"
import photo from "../about/img/ph.jpg"
import emailjs from '@emailjs/browser';
const Contact = () =>{
    
    const formref= useRef()
    const [done,setdone] =useState(false)
    const handlesubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_ak4ukpy', 'template_8wgpoyh', formref.current, 'user_qeK563WDbpyduCYEFC4Xi')
      .then((result) => {
          console.log(result.text);
          setdone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
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
                    <form action="" ref={formref} onSubmit={handlesubmit} className="form">
                       <input type="text" placeholder="name" name="user_name"/> 
                       <input type="text" placeholder="number" name="user_phone"/> 
                       <input type="email" placeholder="email" name="user_email"/> 
                       <textarea id="" placeholder="message" name="user_text" row="10" cols="10" rows="10"></textarea>
                       <button type="submit" className="submit" >Submit</button>
                       <div className="c-feedback"> {done && " Thankyou for your feedback !"}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact