import React from 'react';
import {withRouter} from"react-router-dom";
import { connect } from 'react-redux';
import { myProductCreated, productEdited } from '../../store/action/action';
import "./AddProduct.css";


class AddProduct extends React.Component {
    constructor(props){
        super(props);
        this.isEditPage=!!this.props.editableProduct.id
        this.state={
            title:this.props.editableProduct.title||"",
            price:this.props.editableProduct.price||"",
            description:this.props.editableProduct.description||"",
            image:this.props.editableProduct.image||"../../../img/camera.png",
            isOwner:true
           }
    }

    updateTitle(value){
        return this.setState({
                ...this.state,
               title:value
            })
    }


    updatePrice(value){
        return this.setState({
                ...this.state,
               price:value
            })
    }


    updateDescription(value){
        return this.setState({
                ...this.state,
               description:value
            })
    }

    uploadImage(event){
        console.log(event)
        const reader=new FileReader();
        reader.onload=(e)=>{
            console.log(e.target.result)
            this.setState({
                ...this.state,
                image:e.target.result
            })
        }
        reader.readAsDataURL(event.target.files[0])
    }
  saveProduct(){
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: this.state.title,
                price:this.state.price ,
                description: this.state.description,
                image: this.state.image,
                category: 'electronic'
            }
        )
    })
        .then(res=>res.json())
        .then(res=>this.props.myProductCreatedAction({...this.state, ...res}))
        .then(()=>{
            alert("Product is saved");
            this.setState({
            title:"",
            price:"",
            description:"",
            image:"../../../img/camera.png"
            })
        })
        .catch(()=>{
            alert("Something went wrong.Try again")
        })
  }

  editProduct(){
      const edited={
          id:this.props.editableProduct.id,
          ...this.state
      }
      this.props.productEditedAction(edited);
      alert("Successful edited");
      this.props.history.push("/")
  }
  
    render() {
        return (
            <div className="add_product_wrap">
                <div className="image_product">
                    <label for="file">
                       <img className="image_upload" src={this.state.image}/>
                    </label>
               
                    <input id="file" className="image_file"
                    type="file"
                    onChange={($event)=>this.uploadImage($event)}/>
                
                </div>
                <div className="product_info">
                    <p className="product_title">
                        <label>
                            Title:
                        <input
                         type="text" 
                         className="add_input"
                         value={this.state.title}
                         onChange={($event)=>this.updateTitle($event.target.value)}
                        />
                        </label>
                    </p>
        
                    <p>
                      <label>
                            Price:
                        <input
                         type="text" 
                         className="add_input"
                         value={this.state.price}
                         onChange={($event)=>this.updatePrice($event.target.value)}
                        />
                        </label>
                    </p>
                    
                    <p>
                      <label>
                            Description:
                        <textarea
                         type="text" 
                         className="add_input"
                         value={this.state.description}
                         onChange={($event)=>this.updateDescription($event.target.value)}
                        ></textarea>
                        </label>
                    </p>
                </div>
                <div className="product_action">
                {this.isEditPage ? <button className="editProduct" onClick={()=>this.editProduct()}>Edit</button> :  <button className="add" onClick={()=>this.saveProduct()}>Save</button>}
                   
                
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
       myProductCreatedAction:(item)=>dispatch({
            type:myProductCreated,
            payload:item
        }) ,
        productEditedAction:(item)=>dispatch({
            type:productEdited,
            payload:item
        })     
    }
}
const mapStateToProps=(state)=>{
    return{
     editableProduct:state.editableProduct
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddProduct));
