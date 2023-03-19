import React,{useState} from 'react';
import "../index.css";
import {Link} from 'react-router-dom'

const MainNav = () => {

  const [show,setShow]=useState("showlist")
const Showlist=()=>{
  setShow("showlist1")
}

const Showlist1=()=>{
  setShow("showlist")
}

  return (
    <>
    <div style={{margin:"0 20%"}} className="mb=5">
    <div className='headerlink text-center'>
        <Link className='text-decoration-none text-dark' to="/" onClick={Showlist1}>HOME</Link>
        <Link className='text-decoration-none text-dark' to="" onClick={Showlist}>STORE</Link>
        <Link className='text-decoration-none text-dark' to="/iphone" onClick={Showlist1}>IPHONE</Link>
        <Link className='text-decoration-none text-dark' to="/ipad" onClick={Showlist1}>IPAD</Link>
        <Link className='text-decoration-none text-dark' to="/macbook" onClick={Showlist1}>MACBOOK</Link>
        <Link className='text-decoration-none text-dark' to="/accesories" onClick={Showlist1}>ACCESORIES</Link>
    </div>
    </div>
    <div id={show} className='showlist'>
      <div style={{display:"inline-block",padding:"20px" }}>
        <h5 style={{color:"rgb(190, 190, 190)"}}> ACCESORIES</h5>
        <span style={{padding:"5px"}}> ipod</span><br/>
        <span style={{padding:"5px"}}> iphone</span><br/>
        <span style={{padding:"5px"}}> imac</span><br/>
        <span style={{padding:"5px"}}> earphones</span><br/>
        <span style={{padding:"5px"}}> headset</span><br/>
        <span style={{padding:"5px"}}> laptop</span><br/>
      </div>

      <div style={{display:"inline-block",padding:"20px" }}>
        <h5 style={{color:"rgb(190, 190, 190)"}}>  </h5>
        <span style={{padding:"5px"}}> iwatch</span><br/>
        <span style={{padding:"5px"}}> iandroidwatch</span><br/>
        <span style={{padding:"5px"}}> fitness watch</span><br/>
        <span style={{padding:"5px"}}> earbuds</span><br/>
        <span style={{padding:"5px"}}> headphone</span><br/>
        <span style={{padding:"5px"}}> minilaps</span><br/>
      </div>

      <div style={{display:"inline-block",padding:"20px" }}>
        <h5 style={{color:"rgb(190, 190, 190)"}}> GIFTS</h5>
        <span style={{padding:"5px"}}> ipod</span><br/>
        <span style={{padding:"5px"}}> iphone</span><br/>
        <span style={{padding:"5px"}}> imac</span><br/>
        <span style={{padding:"5px"}}> earphones</span><br/>
        <span style={{padding:"5px"}}> headset</span><br/>
        <span style={{padding:"5px"}}> laptop</span><br/>
      </div>

      <div style={{display:"inline-block",padding:"20px" }}>
        <h5 style={{color:"rgb(190, 190, 190)"}}>  </h5>
        <span style={{padding:"5px"}}> iwatch</span><br/>
        <span style={{padding:"5px"}}> iandroidwatch</span><br/>
        <span style={{padding:"5px"}}> fitness watch</span><br/>
        <span style={{padding:"5px"}}> earbuds</span><br/>
        <span style={{padding:"5px"}}> headphone</span><br/>
        <span style={{padding:"5px"}}> minilaps</span><br/>
      </div>
    </div>
    </>
  )
}

export default MainNav