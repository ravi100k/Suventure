import React from 'react';
import Header from './Header';
import Loading from './LoadingPage';
import {fetchProduct, sendProduct, updateProduct, deleteProduct} from '../actions';
import { connect,dispatch } from 'react-redux';

import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class DashboardPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
      title:'',
      price:0,
      quantity:0,
      picture:'',
      descriptions:''
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

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
    console.log(e.target.files);
    this.setState({picture:e.target.files[0]})
  }

  onDescriptionChnage = (e) =>{
      this.setState({descriptions:e.target.value})
  }

  onEditClick = (data) => (e) =>{
    console.log(data);
    this.props.history.push(`/details`,data);
  }

  onSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
    if (this.state.title== null || this.state.quantity== null || this.state.price == null){
      return alert('Please Fill The form Values.')
    }
    let data = {}
    data['Title'] = this.state.title;
    data['Quantity'] = this.state.quantity;
    data['Price'] = this.state.price;
    data['Picture'] = this.state.picture;
    data['Descriptions'] = this.state.descriptions;
    console.log(data);
    this.props.sendProduct(data)
    alert('Data Saved Sucessfully')
    this.cancelCourse();
    this.setState({title:'',quantity:0,price:0,picture:'',value:'a'})

  }

  onDeleteClick = (data) => (e) =>{
    this.props.deleteProduct(data['_id'])
    this.props.fetchProduct();
  }

  cancelCourse = () => {
  document.getElementById("create-course-form").reset();
  this.props.fetchProduct();
  }

  render(){
    // console.log(Object.keys(this.props.data_search).length===0);
    // <img className="card-img-top" src=".../100px180/" alt="No Image Available"/>
    return (
      <div className="content-container">
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="View The Products" value="a">
          <div>
          {Object.keys(this.props.data_get).length === 0 ? <div> <Loading/> </div> :
            <div  className="card_instance">
              {this.props.data_get.value.map((data,index) =>{
                return (
                  <div className="card" style={{"margin":"1rem"}} key={index}>

                    <div className="card-body">
                      <h5 className="card-title">{data['Title']}</h5>
                      <p className="card-text">{data['Descriptions']} Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                      <button type="button" onClick={this.onEditClick(data)} className="btn btn-success btn-md btn-block">Edit</button>
                      <button type="button" onClick={this.onDeleteClick(data)} className="btn btn-danger btn-md btn-block">Delete</button>
                    </div>
                  </div>)
              })}
            </div>
          }
          </div>
        </Tab>

        <Tab label="Create A Product" value="b">
          <div>
          <div className="card" style={{'margin':'10px'}}>
            <h5 className="card-header">Add The New Product</h5>
            <div className="card-body">
              <h5 className="card-title"></h5>
              <form onSubmit={this.onSubmit} id="create-course-form">

                <div className="form-group row">
                  <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Title</label>
                <div className="col-sm-10">
                  <input type="text" onChange={this.onTitleChange} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Product Title"/>
                </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Price</label>
                  <div className="col-sm-10">
                    <input type="number" onChange={this.onPriceChnage} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Product Price"/>
                  </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Quantity</label>
                  <div className="col-sm-10">
                    <input type="number" onChange={this.onQuantityChange} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Product Quantity"/>
                  </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Picture</label>
                  <div className="col-sm-10">
                    <input type="file" accept="image/*" onChange={this.onPictureChange} className="form-control form-control-lg" id="colFormLabelLg" placeholder="Product Picture"/>
                  </div>
                </div>


                <div className="form-group row">
                    <label htmlFor="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Product Descriptions</label>
                  <div className="col-sm-10">
                    <textarea className="form-control form-control-lg" onChange={this.onDescriptionChnage} id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
                </div>

                  <div className="submit button center" style={{'marginLeft':'50px','marginRight':'50px','marginTop':'20px'}}>
                    <button type="button"  onClick={this.onSubmit} className="btn btn-primary btn-lg btn-block">Add New Product</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
      </div>
    )}
}

const mapStateToProps = (data) =>{
  console.log(data);
  if (Object.keys(data.data_search).length !==0){
    return data
  }
  return data;
}

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: () => dispatch(fetchProduct()),
  sendProduct: (data) => dispatch(sendProduct(data)),
  deleteProduct: (data) => dispatch(deleteProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
