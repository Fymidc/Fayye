import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Thirdpage() {

    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const items = [
     <div> <img className="image-slider" src="/images/tops.jpg" onDragStart={handleDragStart} /> <p>ilk foto</p> </div>,
     <div> <img className="image-slider" src="/images/skirt.jpg" onDragStart={handleDragStart} /> <p>iki foto</p> </div>,
     <div> <img className="image-slider" src="/images/coat.jpg" onDragStart={handleDragStart} /> <p>üç foto</p> </div>,
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

export default Thirdpage
