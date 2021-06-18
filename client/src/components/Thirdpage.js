import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions/index'
import {fetchItems} from '../actions/index'


function Thirdpage(props) {

    useEffect(() => {
        props.fetchItems()
    }, [])


    /*

    const [products, setproducts] = useState("")

    const itemsGet=async()=>{
        const res= await axios.get('/api/items');
        setproducts(res.data)
    }
    
    console.log("usestateden gelen:",products.productName)
    */


    
   
    
    
    /*
    const items = [
     <div> <img className="image-slider" src="https://images.pexels.com/photos/5331221/pexels-photo-5331221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="img" onDragStart={handleDragStart} /> <p>{iteM}</p> <input type="button" value="Sepete Ekle"/> </div>,
     <div> <img className="image-slider" src="https://images.pexels.com/photos/4770744/pexels-photo-4770744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img"  onDragStart={handleDragStart} /> <p>{props.products.items.productName}</p>  <input type="button" value="Sepete Ekle"/></div>,
     <div> <img className="image-slider" src="https://images.pexels.com/photos/1800454/pexels-photo-1800454.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="img" onDragStart={handleDragStart} /> <p>Coat</p>  <input type="button" value="Sepete Ekle"/> </div>,
    ];
*/
   
   
   //{props.items?console.log(props.items):console.log("olmadı")}
    return (
        <div>
            
            <div className="third-page-header" >
                <p>SPOTLİGHT</p>
                <h1>EXPLORE OUR SEASONAL HIGHLIGHTS</h1>
            </div>

            <div className="imgsection">
           {props.products.items.map(ite =>(
             <div key={ite._id}  className="imgsection2">  <img className="image-slider"  src={ite.productImg}  alt="img" />
              <p>{ite.productName}  {ite.productPrice}</p>
              <button onClick={()=>props.addItem(ite)} >Add to Basket</button> 
              </div>
             ))}

            </div>
           
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        products:state.products,
        cart:state.cart
      
    }
}

export default connect(mapStateToProps,{fetchItems,addItem})(Thirdpage)
