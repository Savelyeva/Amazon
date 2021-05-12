import React from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import"./Product.css"
import { selectProduct,editProduct } from '../../store/action/action';


class Product extends React.Component {
    constructor(props){
        super(props)
        this.state={product:{}}
    }
    componentDidMount(){
        const product=this.props.match.params.id;
    fetch(`https://fakestoreapi.com/products/${product}`)
    .then(res=>res.json())
    .then(response=>{
        if(response){
            this.setState({product:response})
        }else{
            const currentProduct=this.props.myGoods.find(item=>+item.id===+product);
            this.setState({product:currentProduct})
        }

     })
    }

    addToCart(item){
        this.props.selectProductAction(item)
    }
    edit(item){
     
      this.props.editProductAction(item);
      this.props.history.push("/edit")
    }
    render() {
        return (
            <div className="product_wrap">
                <div className="image_product">
                <img src={this.state.product.image||""}/>
                </div>
                <div className="product_info">
                    <p className="product_title">{this.state.product.title||""}</p>
                    
                    <p><span>Price:</span> {this.state.product.price||""}$</p>
                    <p><span>Description:</span> {this.state.product.description||""}</p>
                </div>
                <div className="product_action">
                    {this.state.product.isOwner ? <button className="edit" onClick={()=>this.edit(this.state.product)}>Edit</button> : null}
                    <button className="add" onClick={()=>this.addToCart(this.state.product)}>Add to cart</button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        selectProductAction:(item)=>dispatch({
            type:selectProduct,
            payload:item
        }),
        editProductAction:(item)=>dispatch({
            type:editProduct,
            payload:item
        })
    }
}
const mapStateToProps=(state)=>{
    return{
        myGoods:state.myGoods
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Product));
