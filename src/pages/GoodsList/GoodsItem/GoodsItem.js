import React from 'react';
import { Link } from 'react-router-dom';
import "./GoodsItem.css"


class GoodsItem extends React.Component {
    

    render() {
        console.log(this.props.item)
        return (
            <Link className="item"to={`/product/${this.props.item.id}`}>
           
               
              <img className="item_image" src={this.props.item.image} alt="jew"/>
              <p className="item_title"> {this.props.item.title}</p>
              <div className="details">
                 <p>{this.props.item.price} $</p>
              </div>
           
            </Link>
        );
    }
}



export default GoodsItem;
