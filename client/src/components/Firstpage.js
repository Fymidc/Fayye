import React,{useState} from 'react'
import Payments from './Payments'

import{connect} from 'react-redux';
import { fetchUser } from '../actions/index';


function Firstpage(props) {

  
  const [userclick, setuserclick] = useState(false)
  const [bagclick, setbagclick] = useState(false)

  const userClickHandler=()=>{
    setuserclick(!userclick)
    
    
  }
  const bagClickHandler=()=>{
    setbagclick(!bagclick)
  }

  
  
    return (
        <div>  
         
          <div className="nav-bar">
              <div className="nav-left">
                  <a>New-in</a>
                  <a>Lookbooks</a>
                  <a>The Brand</a>
              </div>
              <div className="brand-name">
                  <h1>FAyYE</h1>
              </div>
              <div className="nav-right">
                  <a >{props.auth !== false ? "fatih" : "My Account"}</a>
                  <a ><i onClick={userClickHandler} className="fa fa-user-o" aria-hidden="true"></i></a>
                  <a ><i className="fa fa-search" aria-hidden="true"></i></a>
                  <a ><i onClick={bagClickHandler} className="fa fa-shopping-bag" aria-hidden="true"></i></a>
              </div>
          </div>
          <div className="first-page-landing">
              <img className="landing-bg" src="https://images.pexels.com/photos/3223552/pexels-photo-3223552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bg-img" ></img>

          </div>

          <div  className={userclick === false?'user-login-container-none' : "user-login-container"} >
            <div><h3 onClick={()=>props.fetchUser()} >My Account</h3></div>

            <div><p>Log in with your email easier and explore our world!</p></div>

            {props.auth !== false ? <div><i className="fa fa-sign-out" aria-hidden="true"></i><button><a href="/api/logout" >LOG OUT</a></button></div>: <div> <i className="fa fa-google" aria-hidden="true"></i><button><a href="/auth/google" >SIGN IN WİTH GOOGLE</a></button> </div> }
          </div>

          <div className={bagclick === false?'user-shopping-bag-none' : "user-shopping-bag"}>
              <div><h3>My Shopping Bag</h3></div>
              {props.auth !== false ? <div><Payments/></div>:""}
             
          </div>


        </div> 
    )
}

const mapStateToProps =state=>{
  return {
    auth:state.auth
  }
} 

export default connect(mapStateToProps,{ fetchUser })(Firstpage);
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
