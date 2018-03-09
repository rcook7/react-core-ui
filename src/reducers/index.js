import * as actions from '../actions';

let saved = localStorage.getItem('x-access-token');
if (!saved) {
  saved = '';
}

export const token = (state = saved, action) => {
  switch(action.type) {
    case actions.SET_TOKEN:
      localStorage.setItem('x-access-token', action.token);
      return action.token;
    default:
      return state;
  }
}

const initialUser = {
  name: '',
  isadmin: false
};
export const user = (state = initialUser, action) => {
  switch(action.type) {
    case actions.SET_USER:
      return action.user;
    default:
      return state;
  }
}

export const counts = (state = {}, action) => {
  switch(action.type) {
    case actions.SET_COUNTERS:
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

export const api = (state = {status: ''}, action) => {
  switch(action.type) {
    case actions.SET_API_STATUS:
      return {...state, status: action.status};
    default:
      return state;
  }
}

export const posts = (state = [], action) => {
  let posts;
  switch(action.type) {
    case actions.SET_POSTS:
      return action.posts;
    case actions.NEW_POST:
      if (state.every(post => post._id !== action.post._id)) {
        return [...state, action.post];
      } else {
        return state;
      }
    case actions.DELETE_POST:
      return state.filter(post => post._id !== action.id);
    case actions.EDIT_POST:
      return state.filter(post => post._id !== action.post._id).concat([action.post]);
    default:
      return state;
  }
}