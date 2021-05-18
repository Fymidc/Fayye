import React,{useState} from 'react'



function Firstpage() {

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
                  <a>My account</a>
                  <a><i onClick={userClickHandler} class="fa fa-user-o" aria-hidden="true"></i></a>
                  <a><i class="fa fa-search" aria-hidden="true"></i></a>
                  <a><i onClick={bagClickHandler} class="fa fa-shopping-bag" aria-hidden="true"></i></a>
              </div>
          </div>
          <div className="first-page-landing">
              <img className="landing-bg" src="/images/knitwear.jpg" alt="bg-img" ></img>

          </div>

          <div  className={userclick === false?'user-login-container-none' : "user-login-container"} >
            <div><h3>My Account</h3></div>

            <div><p>Log in with your email easier and explore our world!</p></div>

            <div><i class="fa fa-google" aria-hidden="true"></i><input type="button"  value="SIGN IN WİTH GOOGLE" /></div>
          </div>

          <div className={bagclick === false?'user-shopping-bag-none' : "user-shopping-bag"}>
              <div><h3>My Shopping Bag</h3></div>

              <div>itemler buraya</div>
          </div>


        </div> 
    )
}

export default Firstpage

/*
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
