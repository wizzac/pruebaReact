import React from "react";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import stl from 'styled-components';


export default class Navbar extends React.Component {
  
    render() {
      return (
        <div className="ct" id="t1">
        <div className="ct" id="t2">
          <div className="ct" id="t3">
            <div className="ct" id="t4">
            <section>  
              <ul>
                <a href="#t1"><li id="uno"> <FontAwesomeIcon icon="home" /></li></a>
                <a href="#t2"><li id="dos"> <FontAwesomeIcon icon="keyboard" /></li></a>
                <a href="#t3"><li id="tres"></li> <FontAwesomeIcon icon="address-card" /></a>
                <a href="#t4"><li id="cuatro"></li> <FontAwesomeIcon icon="igloo" /></a>
              </ul>
                <div className="page" id="p1">
                  <li className="icon fa fa-home"><span className="title">Home</span>
                    <span className="hint">Like this pen to see the magic!...<br/> 
                    Just kidding, it won't happen anything but I'll be really happy If you do so.</span>
                  </li>   
                </div>
                <div className="page" id="p2">
                  <li className="icon fa fa-keyboard-o"><span className="title">Type</span></li>
                </div>  
                <div className="page" id="p3">
                  <li className="icon fa fa-coffee"><span className="title">Coffee</span></li>
                </div>
                <div className="page" id="p4">
                <li className="icon fa fa-dribbble">
                  <span className="title">Dribbble</span><span className="hint">
                    </span>
                  </li>
                </div>  
              </section>
            </div>
          </div>
        </div>
       </div>
      )
    }

    
  }
  
