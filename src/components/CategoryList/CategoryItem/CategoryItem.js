import React from 'react';
import "./CategoryItem.css";
import {Link} from"react-router-dom";



class CategoryItem extends React.Component {
    
    

    render() {
        return (
            <Link to={`/goods/${this.props.name}`}>
            <div className="category_item">
              {this.props.name}
            </div>
            </Link>
        );
    }
}



export default CategoryItem;
