import React from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router-dom';
import {} from '../actions'
import { connect,dispatch } from 'react-redux';

class Home extends React.Component{

  render(){
    return(
      <div>
      Home
      </div>
      );
    }
}

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(undefined, mapDispatchToProps)(Home);
