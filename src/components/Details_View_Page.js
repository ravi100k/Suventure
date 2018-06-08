import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import {fetchProduct, updateProduct} from '../actions'
import { connect,dispatch } from 'react-redux';

class Details_View_Page extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.location.state['Title'],
      price: this.props.location.state['Price'],
      quantity: this.props.location.state['Quantity'],
      picture: this.props.location.state['Picture'],
      descriptions: this.props.location.state['Descriptions']
    };
  }

  onTitleChange = (e) =>{
    // console.log(e.target.value);
    this.setState({title:e.target.value})
  }

  onPriceChnage = (e) =>{
    this.setState({price:e.target.value})
  }

  onQuantityChange = (e) =>{
    this.setState({quantity:e.target.value})
  }

  onPictureChange = (e) =>{
    this.setState({picture:e.target.value})
  }

  onDescriptionChnage = (e) =>{
      this.setState({descriptions:e.target.value})
  }

  onSubmit = () =>{
    console.log(this.state);
    let data={}
    data['_id'] = this.props.location.state['_id']
    data['Title'] = this.state.title;
    data['Quantity'] = this.state.quantity;
    data['Price'] = this.state.price;
    data['Picture'] = this.state.picture;
    data['Descriptions'] = this.state.descriptions;
    this.props.updateProduct(data)
    alert('Data Updated Sucessfully')
    this.props.fetchProduct();
    this.props.history.push('/');
  }


  render(){
    console.log(this.props.location.state);
    let data = this.props.location.state
    return(
      <div className="content-container">
      <form onSubmit={this.onSubmit} id="create-course-form">

        <div className="form-group row">
          <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Title</label>
        <div className="col-sm-10">
          <input type="text" onChange={this.onTitleChange} defaultValue={data['Title']} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Product Title"/>
        </div>
        </div>

        <div className="form-group row">
            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Price</label>
          <div className="col-sm-10">
            <input type="number" onChange={this.onPriceChnage} defaultValue={data['Price']} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Product Price"/>
          </div>
        </div>

        <div className="form-group row">
            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Quantity</label>
          <div className="col-sm-10">
            <input type="number" onChange={this.onQuantityChange} defaultValue={data['Quantity']} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Product Quantity"/>
          </div>
        </div>

        <div className="form-group row">
            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Picture</label>
          <div className="col-sm-10">
            <input type="file" accept="image/*" onChange={this.onPictureChange} defaultValue={data['Picture']} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Product Picture"/>
          </div>
        </div>

        <div className="form-group row">
            <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Product Descriptions</label>
          <div className="col-sm-10">
            <textarea className="form-control form-control-lg" onChange={this.onDescriptionChnage} defaultValue={data['Descriptions']} id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>


          <div className="submit button center" style={{'marginLeft':'50px','marginRight':'50px','marginTop':'20px'}}>
            <button type="button"  onClick={this.onSubmit} className="btn btn-primary btn-lg btn-block">Add New Product</button>
          </div>
        </form>
      </div>
      );
    }
}

const mapStateToProps = (data) =>{
  return data;
}

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: () => dispatch(fetchProduct()),
  updateProduct: (data) => dispatch(updateProduct(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details_View_Page);
