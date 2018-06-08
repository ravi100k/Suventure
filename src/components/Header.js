import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import {searchText,fetchProduct} from '../actions'
import { connect,dispatch } from 'react-redux';

class Header extends React.Component{
  componentWillMount(){
    this.props.fetchProduct();
  }

  searchText = (e) =>{
    this.props.searchText(e.target.value)
  }

  render(){
    return(
      <div className="content-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="nav-link" to="/">
          <h3> Suventure </h3>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/">
              <h4> Home <span className="sr-only">(current)</span></h4>
            </Link>
            </li>
          </ul>

          <form className="form-inline ">
            <input className="form-control" onChange={this.searchText} type="search" placeholder="Search" aria-label="Search"/>
            &nbsp;
            <button className="btn btn-outline-success " type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: () => dispatch(fetchProduct()),
  searchText: (value) => dispatch(searchText(value)),
});

export default connect(undefined, mapDispatchToProps)(Header);
