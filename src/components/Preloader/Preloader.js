import React from 'react';
import "./Preloader.css";
import { connect } from "react-redux";

class Preloader extends React.Component {
   
    render() {
        return (
           this.props.preloaderState ? <div className="preloader_wrap">
               <div className="loader"></div> 
               </div> : null
        );
    }
}
const mapStateToProps=(state)=>{
    return {
        preloaderState:state.preloaderState
    }
}


export default connect(mapStateToProps)(Preloader);
