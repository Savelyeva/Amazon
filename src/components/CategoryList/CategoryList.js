import React from 'react';
import "./CategoryList.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CategoryItem from './CategoryItem/CategoryItem';
import { preloaderState } from '../../store/action/action';
import { connect } from "react-redux";

class CategoryList extends React.Component {
    constructor(props){
      super(props);
      this.state={categoryList:[]}
    }
    
    componentDidMount(){
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(categories=>this.setState({categoryList:categories}))
            .finally(()=>this.props.preloaderStateAction())
    }
    

    render() {
        const settings = {
            dots:false,
            autoplay:true,
            autoplaySpeed:6000,
            infinite: true,
            speed: 4000,
            slidesToShow: 2,
            slidesToScroll: 1
          };
          const slider=<Slider {...settings}>
                
                            {
                                this.state.categoryList.map(item=><CategoryItem key={item} name={item}/>)
                            }
                       </Slider>
        return (
            <div className="category">
                <div className="slick_wrap">
            {
             this.state.categoryList.length ? slider : ""
            }
               </div>
          </div>
        );
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        preloaderStateAction:()=>dispatch({
           type:preloaderState,
           payload:false
        })
    }
}


export default connect(null,mapDispatchToProps)(CategoryList);
