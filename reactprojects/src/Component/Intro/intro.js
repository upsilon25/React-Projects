import React from 'react'
import "./intro.css"
import me from './img/vp.png'
const Intro = () =>{
    return(
        <div>
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <div className="i-intro"><h2>Hello,My name is </h2></div>
                        <div className="i-name"> <h1>Vijay Ratan Singh</h1> </div>
                        <div className="i-title">
                            <div className="i-title-wrapper">
                                <div className="i-title-item">Java Developer</div>
                                <div className="i-title-item">UI/UX</div>
                                <div className="i-title-item">Python Developer</div>
                                <div className="i-title-item">React Developer</div>
                                <div className="i-title-item">Linux User</div>
                            </div>
                        </div>
                        <div className="i-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ullam vero repellat quae fuga suscipit, beatae libero doloribus provident amet sunt, ipsum esse iure voluptatem quas nesciunt corrupti nisi dolore?</div>
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <img src={me} alt="" className="i-img"/>
                </div>
            </div>
        </div>
    )}
export default Intro    