import React, { Component }  from 'react';
import './App.css';
import Firstpage from './components/Firstpage';
import Secondpage from './components/Secondpage';
import Thirdpage from './components/Thirdpage';
import Fourthpage from './components/Fourthpage';
import ReactFullpage from "@fullpage/react-fullpage";




class App extends React.Component {
 
  render() {
    return (
      <ReactFullpage
        
        
       
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <Firstpage/>
              </div>
              
              <div className="section">
                <Secondpage/>
                
              </div>

              <div className="section">
                <Thirdpage/>
                
              </div>

              <div className="section">
                <Fourthpage/>
                
              </div>
            </div>
          );
        }}
      />
    );
  }
}



export default App;


