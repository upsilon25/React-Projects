import React from 'react'
import "./about.css"

import aw from '../about/img/testimonials/t2.jpg'
import ai from '../about/img/vpf.jpg'


const About = () =>{
    return(
        <div>
          <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={ai} alt="" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                 <h1>Goodewr</h1>
                 <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, delectus nulla aspernatur explicabo blanditiis aliquid atque qui optio? In ex, veritatis vitae fugiat ratione impedit aliquid distinctio blanditiis, nobis quam dolores velit. Odio reprehenderit cum ducimus omnis magnam harum, natus amet nemo hic neque magni esse ipsam pariatur recusandae voluptatem saepe atque soluta. Voluptatum, hic?</div>
                 <div className="a-award">
                     <img src={aw} alt="" className="a-awardimg"/>
                     <div className="a-para">
                     <h1>the big tiger</h1>
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, earum.
                     </div>
                 </div>
            </div>    
          </div>  
        </div>
    )
}
export default About