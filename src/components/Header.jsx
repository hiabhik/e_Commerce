import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'
import profile from "../datas/headericons/profile.svg"
import cart from "../datas/headericons/cart.png"
import MainNav from "./MainNav"

const Header = () => {
  return (
    <>
    <div>
        <div className='header'>
            <span className='headroute'>
                <img className='imgicon' src={profile} alt=" " />&nbsp;
                <span >My Profile</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/cart"><img className='imgicon' src={cart} alt=" " />&nbsp;</Link>
                <span >Cart</span>&nbsp;
            </span>
            <h2 className='text-center pt-3 fw-bold' style={{color:"red"}}>SHOPY</h2>
            <MainNav/>
        </div>
        
    </div>
    </>
  )
}

export default Header