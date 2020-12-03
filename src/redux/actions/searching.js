import axios from 'axios';
import {ROOT_URL} from '../apiRoot';

export const fillUsers = (listado, total, publicaciones) => ({
  type: 'FETCH_USERS',
  listado,
  total,
  publicaciones
});

export const fillRepo = (listado) => ({
  type: 'FETCH_REPOS',
  listado
});

export function fetchAllRepos(url, list) {
  return function(dispatch, getState) {
    const config = {
      params: {}
    }

    axios.get(`${url}`, config).then(response => {
      const lista = response.data
      console.log('lista namerep: ',lista)
      dispatch(fillUsers(list, lista.length, lista ));
    })
    .catch(error => {
        console.log(error)
    });
  }
}

export function fetchUsers(username) {
  return function(dispatch, getState) {
    const config = {
      params: {}
    }

    axios.get(`${ROOT_URL}/users/${username}`, config).then(response => {
      const lisusers = response.data
      console.log('listado: ',lisusers)
      dispatch(fetchAllRepos(lisusers.repos_url, lisusers))
     
    })
    .catch(error => {
        console.log(error)
    });
  }
}

export function fetchRepos(namerepo) {
  return function(dispatch, getState) {
    const config = {
      params: {}
    }

    axios.get(`${ROOT_URL}/repositories/${namerepo}`, config).then(response => {
      const listRepos = response.data
      console.log('listado rep: ',listRepos)
      dispatch(fillRepo(listRepos));
    })
    .catch(error => {
        console.log(error)
    });
  }
}