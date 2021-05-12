import React from 'react';
import "./GoodsList.css"
import {withRouter} from "react-router-dom"
import GoodsItem from './GoodsItem/GoodsItem';
import { goodsLoaded } from '../../store/action/action';
import {connect} from "react-redux";


class GoodsList extends React.Component {
    
    
    componentDidMount(){
        console.log(111)
        const category=this.props.match.params.category;
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            .then(response=>this.props.goodsLoaded(response))
    }

    render() {
       
        return (
            <div className="goods_wrap">
               
               {this.props.allGoods.map(item=><GoodsItem key={item.id} item={item}/> )}

            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        allGoods:[...state.allGoods, ...state.myGoods]
        
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
    goodsLoaded:(item)=>dispatch({
        type:goodsLoaded,
        payload:item
    })
 }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(GoodsList));
