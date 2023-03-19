
import React,{useState} from 'react'

import Header from '../components/Header'

import { cartdata } from '../datas/cartData'

import Card from "react-bootstrap/Card";


function Cart() {
  const mycart = cartdata

  const [mycartvalue,setmycartData] = useState([...mycart])


 

const itemdecrement=(myval)=>{

  console.log("img link is",myval)
  
  for(let i=0;i<mycart.length;i++){
    if(myval===mycart[i]['img']){
      
       if(mycart[i].qty > 1)
       {
        mycart[i]['qty'] = mycart[i]['qty'] - 1;
       }
       else{
        mycart.splice(i,1)
       }
     
    }
    
      setmycartData([...mycart])
    
 

  
    
}
  
}



const itemIncrement=(myval)=>{
  console.log("img link is",myval)
  
  // let valuefound = false

  for(let i=0;i<mycart.length;i++){
    if(myval===mycart[i]['img']){
      // valuefound = true
       mycart[i]['qty'] = mycart[i]['qty'] + 1;
   }
 
  setmycartData([...mycart])
 
 console.log("increment cartdata",mycart);
 
  
   

   
  
}

}



  return (
    <div>
        <Header/>
        <div style={{width:"100%",backgroundColor:"rgb(246, 246, 246)"}}>
          <h6 style={{color:"blue", textAlign:"center", padding:"1rem"}}>cart</h6>
        </div><br/><br/><br/>
        <div style={{margin:"0 20%"}}>
          <div style={{width:"100%",backgroundColor:"rgb(246, 246, 246)",margin:"2px"}}>
            <div style={{width:"40%",display:"inline-block"}}>PRODUCT</div>
            <div style={{width:"20%",display:"inline-block"}}>PRICE</div>
            <div style={{width:"20%",display:"inline-block"}}>QTY</div>
            <div style={{width:"20%",display:"inline-block"}}> PRICE</div>
          </div>
          <hr/><br/>
          

          {
          mycartvalue && mycartvalue.map((val)=>{
              return(
                <>
                  <div key={val._id} style={{width:"100%",backgroundColor:"rgb(246, 246, 246)",margin:"2px"}}>
                    <div style={{width:"40%",display:"inline-block"}}><Card.Img style={{width:"10rem",height:"13rem",margin:"0 20%"}} variant="top" src={val.img} /></div>
                    <div style={{width:"20%",display:"inline-block"}}>{val.name}</div>
                    <div style={{width:"20%",display:"inline-block"}} >
                    <button  onClick={()=>itemdecrement(val.img)} style={{position:"relative",top:"55px",left:"-38px"}}>-</button>
                    <div style={{position:"relative",top:"25px",left:"-15px"}} >{val.qty}</div>
                    < button  onClick={()=>itemIncrement(val.img)}  style={{position:"relative",left:"-4px"}}  >+</button>
                  </div>
                  

                   {/* <div onClick={itemincrement} style={{width:"20%",display:"inline-block"}}>{item} <button style={{width:"25px",backgroundColor:"yellow"}} >+</button> </div> */}
                   <div style={{width:"20%",display:"inline-block"}}>{val.offer*val.qty} </div>
                   
                  </div>
                </>
              )
            })
          }
          

          
        </div>
    </div>
  )
        }

export default Cart

