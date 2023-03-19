import React,{useState,useEffect} from 'react'
import "../../index.css"
import Items from '../../components/Items'
// import { iphonepageData } from '../../datas/provider/insidepagedatas/iphonepage'

const IphonePage = () => {

  const[iphonepageData,setiphonepageData]=useState("");

  useEffect(()=>{
    fetch("https://ecommerce-backend-beryl-six.vercel.app/iphonepageData")
    .then(res=>res.json())
    .then(json=>setiphonepageData(json))
    .catch(err=>console.log("error"))
  },[])

  return (
    <div className='bestseller'>
    {
      iphonepageData && iphonepageData.map((val)=>{
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

export default IphonePage