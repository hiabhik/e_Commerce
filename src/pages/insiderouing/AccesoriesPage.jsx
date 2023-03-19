import React,{useState, useEffect} from 'react'
import Items from '../../components/Items'
// import { accesoriespageData } from '../../datas/provider/insidepagedatas/accesoriespageData'

const AccesoriesPage = () => {

  const[accesoriespageData,setaccesoriespageData]=useState("");


  useEffect(()=>{
    fetch("https://ecommerce-backend-beryl-six.vercel.app/accesoriespageData")
    .then(res=>res.json())
    .then(json=>setaccesoriespageData(json))
    .catch(err=>console.log("error"))
  },[])

  return (
    <div className='bestseller'>
    {
      accesoriespageData && accesoriespageData.map((val)=>{
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

export default AccesoriesPage