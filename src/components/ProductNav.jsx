import React,{useState} from 'react';
import "../index.css";
import {Link} from 'react-router-dom'
import AllPage from '../pages/insiderouing/AllPage';
import IpadPage from '../pages/insiderouing/IpadPage';
import IpodPage from '../pages/insiderouing/IpodPage';
import IphonePage from '../pages/insiderouing/IphonePage';
import MacbookPage from '../pages/insiderouing/MacbookPage';
import AccesoriesPage from '../pages/insiderouing/AccesoriesPage';
import "./product.css"



const ProductNav = () => {


const[All,setAll] =useState("pshow")
const[Pad,setPad]  =useState("nshow") 
const[Pod,setPod] =useState("nshow")
const[Phone,setPhone]  =useState("nshow")
const[Mac,setMac] =useState("nshow")
const[Acces,setAcces] =useState("nshow")

const showAll=()=>{setAll("pshow");setAcces("nshow");setMac("nshow");setPad("nshow");setPhone("nshow");setPod("nshow")};
const showIpod=()=>{setAll("nshow");setAcces("nshow");setMac("nshow");setPad("nshow");setPhone("nshow");setPod("pshow")};
const showIphone=()=>{setAll("nshow");setAcces("nshow");setMac("nshow");setPad("nshow");setPhone("pshow");setPod("nshow")};
const showIpad=()=>{setAll("nshow");setAcces("nshow");setMac("nshow");setPad("pshow");setPhone("nshow");setPod("nshow")};
const showMac=()=>{setAll("nshow");setAcces("nshow");setMac("pshow");setPad("nshow");setPhone("nshow");setPod("nshow")};
const showAcces=()=>{setAll("nshow");setAcces("pshow");setMac("nshow");setPad("nshow");setPhone("nshow");setPod("nshow")};

  return (
    <>
        <div style={{margin:"0 20%"}} className="mb=5">
    <div className='headerlink text-center'>
        <Link onClick={showAll} className='text-decoration-none text-dark' to="/">ALL</Link>
        <Link onClick={showIpod} className='text-decoration-none text-dark' to="/">IPOD</Link>
        <Link onClick={showIphone} className='text-decoration-none text-dark' to="/">IPHONE</Link>
        <Link onClick={showIpad} className='text-decoration-none text-dark' to="/">IPAD</Link>
        <Link onClick={showMac} className='text-decoration-none text-dark' to="/">MACBOOK</Link>
        <Link onClick={showAcces} className='text-decoration-none text-dark' to="/">ACCESORIES</Link>
    </div>
    </div>
    <br/>

    <span className={All}><AllPage/></span>
    <span className={Pad}><IpadPage/></span>
    <span className={Pod}><IpodPage/></span>
    <span className={Phone}><IphonePage/></span>
    <span className={Mac}><MacbookPage/></span>
    <span className={Acces}><AccesoriesPage/></span>

    </>
  )
}

export default ProductNav