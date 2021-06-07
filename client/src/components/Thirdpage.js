import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {connect} from 'react-redux';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {addItem} from '../actions/index'
import {fetchItems} from '../actions/index'


function Thirdpage(props) {

   useEffect(() => { 
        props.fetchItems()
        //itemsGet()
    },[])
/*
    const [products, setproducts] = useState("")

    const itemsGet=async()=>{
        const res= await axios.get('/api/items');
        setproducts(res.data)
    }
    
    console.log("usestateden gelen:",products.productName)
    */

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const [iteM, setiteM] = useState("Blue Top")

    const items = [
     <div> <img className="image-slider" src="https://images.pexels.com/photos/5331221/pexels-photo-5331221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="img" onDragStart={handleDragStart} /> <p>{iteM}</p> <input type="button" value="Sepete Ekle"/> </div>,
     <div> <img className="image-slider" src="https://images.pexels.com/photos/4770744/pexels-photo-4770744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img"  onDragStart={handleDragStart} /> <p>asdsa</p>  <input type="button" value="Sepete Ekle"/></div>,
     <div> <img className="image-slider" src="https://images.pexels.com/photos/1800454/pexels-photo-1800454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="img" onDragStart={handleDragStart} /> <p>Coat</p>  <input type="button" value="Sepete Ekle"/> </div>,
    ];

    

    const carouselStyle ={
        marginTop: '20%'
    }

    console.log("detay:",props.products.item.productName?"oldu":"olmadı")
   //{props.items?console.log(props.items):console.log("olmadı")}

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
const mapStateToProps=(state)=>{
    return{
        products:state.products
    }
}

export default connect(mapStateToProps,{fetchItems})(Thirdpage)
