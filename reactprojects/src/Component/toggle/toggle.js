import React,{useContext} from 'react'
import sun from '../about/img/nature/sun.png'
import moon from '../about/img/nature/moon.png'
import './toggle.css'
import { ThemeContext } from '../../context'

const Toggle = () =>{

    const theme  = useContext( ThemeContext);
    const handleClick = () =>{
        theme.dispatch({ type :"TOGGLE"})
    }
    return(
        <div className="t">
            <img src={sun} alt="sun" className="t-icon" />
            <img src={moon} alt="moon" className="t-icon" />
            <div className="t-button" onClick={handleClick}></div>
        </div>
    )
}
export default Toggle