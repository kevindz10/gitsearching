// Expenses Reducer

const authDefaultState = {
    listUsers: [],
    totalPublica: 0,
    totalUsers: 0,
    listPublicaciones: [],
    listRepos: [],
  };
  
  export default (state = authDefaultState, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
              ...state,
              listUsers:action.listado,
              totalPublica: action.total,
              listPublicaciones: action.publicaciones,
              totalUsers: action.totalUsers
            };
        case 'FETCH_REPOS':
            return {
                ...state,
                listRepos:action.listado,
            };
        case 'CLEAN_USERS':
          return {
              ...state,
              listUsers: [],
              totalPublica: 0,
              totalUsers: 0,
              listPublicaciones: [],
          };
      default:
        return state;
    }
  };