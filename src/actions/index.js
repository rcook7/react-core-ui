// Action types
export const SET_COUNTERS = 'SET_COUNTERS';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USER = 'SET_USER';
export const SET_API_STATUS = 'SET_API_STATUS';
export const SET_POSTS = 'SET_POSTS';
export const NEW_POST = 'NEW_POST';
export const DELETE_POST = 'DELETE_POST';
export const EDIT_POST = 'EDIT_POST';

// Saga Actions
export const LOGIN = 'SAGA_AUTH';
export const LOGIN_FAILED = 'SAGA_AUTH_FAILED';
export const LOGOUT = 'SAGA_LOGOUT';
export const REGISTER = 'SAGA_REGISTER';
export const GET_COUNTS = 'SAGA_GET_COUNTS';
export const GET_API = 'SAGA_GET_API';
export const POST_API = 'SAGA_POST_API';
export const DELETE_API = 'SAGA_DELETE_API';
export const PUT_API = 'SAGA_PUT_API';

// Counter actions

export const setCounts = (payload) => ({
  type: SET_COUNTERS,
  payload
});

// Auth actions

export const setToken = (token) => ({
  type: SET_TOKEN,
  token
});

export const setUser = (user) => ({
  type: SET_USER,
  user
});

export const login = (username, password) => ({
  type: LOGIN,
  username,
  password
});

export const loginFailed = () => ({
  type: LOGIN_FAILED
});

export const logout = () => ({
  type: LOGOUT
});

export const register = (username, password) => ({
  type: REGISTER,
  username,
  password
});

// Post Actions

export const setPosts = (posts) => ({
  type: SET_POSTS,
  posts
});

export const newPost = (post) => ({
  type: NEW_POST,
  post
});

export const deletePost = (post) => ({
  type: DELETE_POST,
  id: post._id
});

export const editPost = (post) => ({
  type: EDIT_POST,
  post
});

// API actions

export const setApiStatus = (status) => ({
  type: SET_API_STATUS,
  status
});

export const getCounts = () => ({
  type: GET_COUNTS
});

export const getApi = (url, saveAction) => ({
  type: GET_API,
  url,
  saveAction
});

export const postApi = (url, data, saveAction) => ({
  type: POST_API,
  url,
  data,
  saveAction
});

export const deleteApi = (url, saveAction) => ({
  type: DELETE_API,
  url,
  saveAction
});

export const putApi = (url, data, saveAction) => ({
  type: PUT_API,
  url,
  data,
  saveAction
});