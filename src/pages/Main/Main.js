import "./Main.css"
import React from "react";
import Header from "../../components/Header/Header"
import CategoryList from "../../components/CategoryList/CategoryList";

class Main extends React.Component{
    render(){
        return(
            <div className="main">
         <p>Main</p>
         <CategoryList/>
         
         </div>
        )
    }
}
export default Main;