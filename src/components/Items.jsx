import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../index.css";
import { cartdata } from "../datas/cartData";

function Items(props) {
  const[name,setname]=useState("")
  const[img,setImg]=useState("")
  const[offer,setOffer]=useState("")
  


  const addToCart = () => {

    const addlist=cartdata;
    let alreadyExist = false
    
    for(let i=0;i<addlist.length;i++){
      if(addlist[i]["img"]===img){
        alreadyExist = true
        addlist[i]['qty']=addlist[i]['qty']+1
        
      }
    }

    if(!alreadyExist){
    addlist.push({
      name:name,
      img:img,
      offer:offer,
      qty:1
    
    })


  }

  console.log("addlist mesages:",addlist);

  

 
  
  };

  return (
    <>
      <Card key={props.id} style={{ width: "18rem", margin:"1rem"}} className="cardhover"><br/>
        <Card.Img style={{width:"10rem",height:"13rem",margin:"0 20%"}} variant="top" src={props.img} />
        <Card.Body className="text-center">
          <Card.Title>{props.name}</Card.Title>
          {props.rating}<br/>
          <h5><strike style={{color:"grey"}}>{props.original}</strike></h5>
          <Button variant="primary">💵 {props.offer} </Button>&nbsp;&nbsp;
          <Button variant="warning" onMouseOver={()=>{
            setImg(props.img);
            setOffer(props.offer);
            setname(props.name);
       

          }} onClick={()=>{

            addToCart()}}>add to cart</Button>

        </Card.Body>
      </Card>
    </>
  );
}

export default Items;