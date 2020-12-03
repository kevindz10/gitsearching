// Expenses Reducer

const authDefaultState = {
    listUsers: [],
    listRepos: [],
  };
  
  export default (state = authDefaultState, action) => {
    switch (action.type) {
        case 'FETCH_USERS':
            return {
              ...state,
              listUsers:action.listado,
            };
        case 'FETCH_REPOS':
            return {
                ...state,
                listRepos:action.listado,
            };
      default:
        return state;
    }
  };