import React,{useState,useEffect} from 'react'
import "../../index.css"
import Items from '../../components/Items'
// import { ipodpageData } from '../../datas/provider/insidepagedatas/ipodpage'

const IpodPage = () => {
  
  const[ipodpageData,setipodpageData]=useState("");

  useEffect(()=>{
    fetch("https://ecommerce-backend-beryl-six.vercel.app/ipodpageData")
    .then(res=>res.json())
    .then(json=>setipodpageData(json))
    .catch(err=>console.log("error"))
  },[])

  return (
    <div className='bestseller'>
    {
      ipodpageData && ipodpageData.map((val)=>{
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

export default IpodPage