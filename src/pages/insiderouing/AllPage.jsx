import React,{useState,useEffect} from 'react'
import "../../index.css"
import Items from '../../components/Items'
// import { allpageData } from '../../datas/provider/insidepagedatas/allpage'

const AllPage = () => {

  const[allpageData,setallpageData]=useState("");

  useEffect(()=>{
    fetch("https://ecommerce-backend-beryl-six.vercel.app/allpageData")
    .then(res=>res.json())
    .then(json=>setallpageData(json))
    .catch(err=>console.log("error"))
  },[])

  return (
    <>
    <div className='bestseller'>
      {
        allpageData && allpageData.map((val)=>{
          return(
            <>
              <Items key={val.id} img={val.img} rating={val.rating} name={val.name} original={val.original} offer={val.offer}/>
            </>
          ) 
        })
      }
    </div>
    </>
  )
}

export default AllPage