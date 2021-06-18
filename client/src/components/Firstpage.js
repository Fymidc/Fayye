import React,{useState,useEffect} from 'react'
import Payments from './Payments'

import{connect} from 'react-redux';
import { showItem ,fetchUser,deleteItem} from '../actions/index';


function Firstpage(props) {
/*
  useEffect(()=>{
    props.fetchUser()
  },[])
*/
  useEffect(()=>{
    props.showItem()
  },[props.cart])

  
  const [userclick, setuserclick] = useState(false)
  const [bagclick, setbagclick] = useState(false)

//toggle user icon
  const userClickHandler=()=>{
    setuserclick(!userclick)
    
    
  }
  //toggle bag icon
  const bagClickHandler=()=>{
    setbagclick(!bagclick)
  }

//total price calculation
  const totalPrice=props.bag.reduce((total,item)=>(total+=item.price),0)
  
    return (
        <div>  
         
          <div className="nav-bar">
              <div className="nav-left">
                  <a>New-in</a>
                  <a>Lookbooks</a>
                  <a>The Brand</a>
              </div>
              <div className="brand-name">
                  <h1>fayye</h1>
              </div>
              <div className="nav-right">
                  <a >{props.auth.state!== false ?"fatih":"My Account"}</a>
                  <a ><i onClick={userClickHandler} className="fa fa-user-o" aria-hidden="true"></i></a>
                  <a ><i className="fa fa-search" aria-hidden="true"></i></a>
                  <a ><i onClick={bagClickHandler} className="fa fa-shopping-bag" aria-hidden="true"></i></a>
              </div>
          </div>
          <div className="first-page-landing">
              <img className="landing-bg" src="https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bg-img" ></img>

          </div>

          <div  className={userclick === false?'user-login-container-none' : "user-login-container"} >
            <div><h3>My Account</h3></div>

            <div><p>Log in with your email easier and explore our world!</p></div>

            {props.auth.state !==false? <div><i className="fa fa-sign-out" aria-hidden="true"></i><button><a href="/api/logout" >LOG OUT</a></button></div>: <div> <i className="fa fa-google" aria-hidden="true"></i><button><a href="/auth/google" >SIGN IN WİTH GOOGLE</a></button> </div> }
          </div>

          <div className={bagclick === false?'user-shopping-bag-none' : "user-shopping-bag"}>
          <h3>My Shopping Bag</h3>
            {props.bag.map(item=><div key={item._id}> 
              <ul className="cart-items">
                <img src={item.image} alt="sepetimg" />
                <li>{item.title}</li>
                <b>${item.price}</b>
                <p onClick={()=>props.deleteItem(item)}>X</p>
              </ul>
            
            </div>)}
              <div className="totalprice">Total Price:${totalPrice}</div>
              {props.auth.state !==false? <div><Payments/></div>:<div>To Buy Sign In</div>}
             
          </div>


        </div> 
    )
}



const mapStateToProps =state=>{
  return {
    auth:state.auth,
    cart:state.products.cart,
    bag:state.products.bag
  }
} 

export default connect(mapStateToProps,{ showItem,fetchUser,deleteItem })(Firstpage);
//export default Firstpage

/*
{props.auth.map(item=>(
                <div>{item}</div>
              ))}


import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./styles.css";

class FullpageWrapper extends React.Component {
 
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["orange", "purple", "green"]}
       
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <h3>Section 1</h3>
              </div>
              
              <div className="section">
                <h3>Section 3</h3>
                
              </div>
            </div>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

export default FullpageWrapper;
*/
