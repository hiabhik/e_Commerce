import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import "../App.css"
// import { iphoneMainPic, iphoneData } from '../datas/provider/iphone'
import Items from '../components/Items'
import Footer from "../components/Footer"

const Iphone = () => {
  
  const[iphoneData,setiphoneData]=useState("");
  const[iphoneMainPic,setiphoneMainPic]=useState("");

  useEffect(()=>{
    fetch("https://ecommerce-backend-beryl-six.vercel.app/iphoneData")
    .then(res=>res.json())
    .then(json=>setiphoneData(json))
    .catch(err=>console.log("error"))
  },[])
  useEffect(()=>{
    fetch("https://ecommerce-backend-beryl-six.vercel.app/iphoneMainPic")
    .then(res=>res.json())
    .then(json=>setiphoneMainPic(json[0]))
    .catch(err=>console.log("error"))
  },[])

  return (
    <>
    <Header/>
    <div style={{width:"100%",backgroundColor:"rgb(246, 246, 246)"}}>
        <h6 style={{color:"blue", textAlign:"center", padding:"1rem"}}>Store / Accesories</h6>
    </div>

    <div style={{margin:"0 20%",width:"80%"}}><br/><br/>
    <span style={{display:"inline-block",width:"15%"}} className="leftAbsolute">
        <div className='accesoryLeftBox'><h5>Accesories</h5>
          <div style={{display:"inline-block"}}>
            Style<br/>Offer<br/>Cables & Doc<br/>Airpods & Speakers<br/>Lpatops & Chargers<br/>
            Smart phones <br/>Smart watches<br/>Hair drier<br/>
          </div>
          <div style={{display:"inline-block",position:"relative",right:"-35px"}}>
            12<br/>25<br/>11<br/>34<br/>54<br/>20<br/>31<br/>26
          </div>
        </div><br/>
        <div className='accesoryLeftBox'><h5>Prize</h5>
          <label for="customRange1" class="form-label">Ranger: 10 - 2000 INR</label>
          <input type="range" class="form-range" id="customRange1"></input>
        </div><br/>
        <div className='accesoryLeftBox'><h5>COLOUR</h5>
          <div className='colorBox' style={{backgroundColor:"red"}}></div>&nbsp;&nbsp;
          <div className='colorBox' style={{backgroundColor:"yellow"}}></div>&nbsp;&nbsp;
          <div className='colorBox' style={{backgroundColor:"blue"}}></div>&nbsp;&nbsp;
          <div className='colorBox' style={{backgroundColor:"black"}}></div>&nbsp;&nbsp;
          <div className='colorBox' style={{backgroundColor:"green"}}></div>&nbsp;&nbsp;
          <div className='colorBox' style={{backgroundColor:"grey"}}></div>&nbsp;&nbsp;
          <div className='colorBox' style={{backgroundColor:"pink"}}></div>
        </div><br/>
        <div className='accesoryLeftBox'><h5>Brand</h5>
        <div style={{display:"inline-block"}}>
            Apple<br/>Samsung<br/>Lg<br/>Oneplus<br/>Realme
          </div>
          <div style={{display:"inline-block",position:"relative",right:"-105px"}}>
            12<br/>25<br/>11<br/>34<br/>54
          </div>
        </div><br/>
        <div className='accesoryLeftBox' style={{textAlign:"center",verticalAlign:'middle'}}>More</div>
    </span>

    <span style={{display:"inline-block",width:"55%"}} className="rightAbsolute">
      <img key={iphoneMainPic.id} className='rightBoxOfPages' src={iphoneMainPic.img} alt=''/><br/><br/>
      <div className='d-flex justify-content-between centerBridge'>
        <div className='d-flex justify-content-start'>
          <div>12 Items</div>&nbsp;&nbsp;&nbsp;<div>Sort By</div>&nbsp;&nbsp;&nbsp;<div>Name</div>
        </div>
        <div className='d-flex justify-content-end'>
          <div>Look below</div>&nbsp;&nbsp;&nbsp;<div>Sort By</div>
        </div> 
      </div>
      <div className="rightBoxOfPages d-flex justify-content-evenly flex-wrap">
      {
          iphoneData && iphoneData.map((val)=>{
            return(
              <>
                <Items key={val.id} img={val.img} rating={val.rating} name={val.name} original={val.original} offer={val.offer}/>
              </>
            ) 
          })
        }
      </div>
    </span>
    </div>
    <Footer/>
    </>
  )
}

export default Iphone