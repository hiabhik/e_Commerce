import React,{useState,useEffect} from 'react'
import "../../index.css"
import Items from '../../components/Items'
// import { ipadpageData } from '../../datas/provider/insidepagedatas/ipadpage'

const IpadPage = () => {
  
  const[ipadpageData,setipadpageData]=useState("");

  useEffect(()=>{
    fetch("https://ecommerce-backend-beryl-six.vercel.app/ipadpageData")
    .then(res=>res.json())
    .then(json=>setipadpageData(json))
    .catch(err=>console.log("error"))
  },[])

  return (
    <div className='bestseller'>
    {
      ipadpageData && ipadpageData.map((val)=>{
        return(
          <>
            <Items key={val.id} img={val.img} rating={val.rating} name={val.name} original={val.original} offer={val.offer}/>
          </>
        ) 
      })
    }
  </div>
  )
}

export default IpadPage