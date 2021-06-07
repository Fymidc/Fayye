import React,{useState,useEffect} from 'react'



function Secondpage(props) {

    

const [image, setimage] = useState("https://images.pexels.com/photos/669381/pexels-photo-669381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")

    const knitHandler =()=>{
        setimage("https://images.pexels.com/photos/669381/pexels-photo-669381.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
        
    }
    const jacketHandler =()=>{
        setimage("https://images.pexels.com/photos/1362484/pexels-photo-1362484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
        
    }
    const coatHandler =()=>{
        setimage("https://images.pexels.com/photos/1800454/pexels-photo-1800454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
        
    }
    const topsHandler =()=>{
        setimage("https://images.pexels.com/photos/5331221/pexels-photo-5331221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
        
    }
    const skirtHandler =()=>{
        setimage("https://images.pexels.com/photos/4770744/pexels-photo-4770744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
        
    }
    const dressesHandler =()=>{
        setimage("https://images.pexels.com/photos/4921205/pexels-photo-4921205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
        
    }
    
    return (
        <div className="second-page">
          <div className="second-page-flex"> 
            <div className="second-page-img">
                <img  src={image} alt="knit" ></img>
            </div>

            <div className="second-page-list">
                <ul>
                    <li onMouseOver={knitHandler} id="1" >KNİTWEAR</li>
                    <li onMouseOver={jacketHandler} >JACKETS</li>
                    <li onMouseOver={coatHandler} >COATS</li>
                    <li onMouseOver={topsHandler} >TOPS</li>
                    <li onMouseOver={skirtHandler} >SKİRTS</li>
                    <li onMouseOver={dressesHandler} >DRESSES</li>
                </ul>
            </div>
          </div> 
        </div>
    )
}



export default Secondpage;



