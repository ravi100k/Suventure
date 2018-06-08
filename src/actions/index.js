import axios from 'axios';
import {dispatch} from 'react-redux';

export const searchText = (value) => {
return {
  type: 'SEARCH_TEXT',
  value: value
	}
};

export const fetchProduct = () => {
  return (dispatch) =>{
    axios.get('/get/product')
    .then((res) => {
      dispatch({
        type:'GET_DATA',
        payload:res.data
      })
    })
    .catch(err => console.log(err))
  }
}

export const sendProduct = (data) => {
	return (dispatch) => {
    console.log(data);
		axios.post('/save/product',{'data':data})
    .then((res) => {
          dispatch({
					type:'SAVE_DATA',
					payload:res.data
				})
      })
    .catch(err => console.log(err))
   }
}


export const updateProduct = (data) =>{
  return (dispatch) =>{
    axios.put('/update/product',{'data':data})
    .then((res) =>{
      dispatch({
        type:'UPDATE_DATA',
        payload:res.data
      })
    })
    .catch(err =>console.log(err))
  }
}

export const deleteProduct = (data) =>{
  console.log(data);
  return (dispatch) =>{
    axios.post('/delete/product',{'data':data})
    .then((res) =>{
      dispatch({
        type:'DELETE_DATA',
        payload:res.data
      })
    })
    .catch(err =>console.log(err))
  }
}
