import axios from 'axios';
import {ROOT_URL} from '../apiRoot';

export const fillUsers = (listado) => ({
  type: 'FETCH_USERS',
  listado
});

export function fetchUsers(username) {
  //const token = localStorage.getItem('token');
  return function(dispatch, getState) {
    const config = {
      params: {}
    }

    axios.get(`${ROOT_URL}/users/${username}`, config).then(response => {
      const lisusers = response.data
      console.log('listado: ',lisusers)
      dispatch(fillUsers(lisusers));
    })
    .catch(error => {
        console.log(error)
    });
  }
}