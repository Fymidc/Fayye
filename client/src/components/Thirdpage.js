import React,{useState} from 'react';
import {connect} from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {addItem} from '../actions/index'


function Thirdpage(props) {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const [item, setitem] = useState("Blue Top")

    const items = [
     <div> <img className="image-slider" src="/images/tops.jpg"  alt="img" onDragStart={handleDragStart} /> <p>{item}</p> <input onClick={ ()=> {alert(item); props.addItem(item)}} type="button" value="Sepete Ekle"/> </div>,
     <div> <img className="image-slider" src="/images/skirt.jpg" alt="img"  onDragStart={handleDragStart} /> <p>Skirt</p>  <input type="button" value="Sepete Ekle"/></div>,
     <div> <img className="image-slider" src="/images/coat.jpg"  alt="img" onDragStart={handleDragStart} /> <p>Coat</p>  <input type="button" value="Sepete Ekle"/> </div>,
    ];

    const carouselStyle ={
        marginTop: '20%'
    }

    return (
        <div>

            <div className="third-page-header" >
                <p>SPOTLİGHT</p>
                <h1>EXPLORE OUR SEASONAL HIGHLIGHTS</h1>
            </div>

            <div  style={carouselStyle} >
                <AliceCarousel

                
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate" 
                 mouseTracking items={items} />

            </div>
           
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        items:state.products
    }
}

export default connect(mapStateToProps,{addItem})(Thirdpage)
