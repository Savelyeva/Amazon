import "./Header.css" ;
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Header extends React.Component{
    render(){
        return(
            <div className="header">
            <Link to="/">  
              <img src="../../../img/amazon.png" className="amazon"/>  
            </Link>

            <div className="input_wrap">
              <img src="../../../img/loupe.png" className="search"/> 
              <input className="input" type="text"/>
            </div>
            <Link to="/add">
            <p>Add</p>
            </Link>
            <Link to="/cart">
                <div className="cart_wrap">
              <img src="../../../img/cart.png" className="cart"/>
              <div className="counter">
                  {this.props.counter}
               </div>
              </div>
            </Link> 
        
         </div>
        
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        counter:state.cartsNumbers
    } 
}
export default connect(mapStateToProps)(Header);