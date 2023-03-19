import React from 'react';
import "../index.css";
import support from "../datas/headericons/support.svg"
import refund from "../datas/headericons/refund.svg"
import shipping from "../datas/headericons/shipping.svg"

const Shipping = () => {
  return (
    <>
    <div className='d-flex justify-content-evenly' style={{width:"80%",margin:"0 auto"}}>
      <div style={{width:"auto",height:"auto",padding:"20px"}}>
        <img src={support} style={{ display:"block", margin:"0 auto", textAlign:"center"}} alt='' /><br/>
        <h2 className='text-center'>SUPPORT 24/7</h2><br/>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus a, et soluta obcaecati alias beatae iste corporis repellat, explicabo porro, delectus natus placeat facilis assumenda modi distinctio minima omnis ad.</span><br/><br/>
      </div>

      <div style={{width:"auto",height:"auto",padding:"20px"}}>
        <img src={shipping} style={{ display:"block", margin:"0 auto", textAlign:"center"}} alt='' /><br/>  
        <h2 className='text-center'>SHIPPING</h2><br/>           
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus a, et soluta obcaecati alias beatae iste corporis repellat, explicabo porro, delectus natus placeat facilis assumenda modi distinctio minima omnis ad.</span><br/><br/>
      </div>

      <div style={{width:"auto",height:"auto",padding:"20px"}}>
        <img src={refund} style={{ display:"block", margin:"0 auto", textAlign:"center"}} alt='' /><br/>
        <h2 className='text-center'>REFUND</h2><br/>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus a, et soluta obcaecati alias beatae iste corporis repellat, explicabo porro, delectus natus placeat facilis assumenda modi distinctio minima omnis ad.</span><br/><br/>
      </div>
    </div>
    </>
  )
}

export default Shipping