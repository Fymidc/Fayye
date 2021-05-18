import React,{useState} from 'react'

function Secondpage() {

const [image, setimage] = useState("/images/knitwear.jpg")

    const knitHandler =()=>{
        setimage("/images/knitwear.jpg")
        
    }
    const jacketHandler =()=>{
        setimage("/images/jacket.jpg")
        
    }
    const coatHandler =()=>{
        setimage("/images/coat.jpg")
        
    }
    const topsHandler =()=>{
        setimage("/images/tops.jpg")
        
    }
    const skirtHandler =()=>{
        setimage("/images/skirt.jpg")
        
    }
    const dressesHandler =()=>{
        setimage("/images/dress.jpg")
        
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

export default Secondpage



