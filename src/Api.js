import 'whatwg-fetch'

const API_URL = '/api'
const AUTH_URL = '/api/authenticate'
const REGISTER_URL = '/api/register'

const handleResponse = response => { 
  if (response.status >= 200 && response.status < 400) {
    return response.json()
  } else {
    return {
      status: response.status,
      message: response.statusText
    }
  }
}

export function authenticate(username, password) {
  return fetch(AUTH_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: username,
        password
      })
    }).then(handleResponse)
}

export function register(username, password) {
  return fetch(REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: username,
        password
      })
    }).then(handleResponse)
}

export function getDelete(url, token, method='GET') {
  return fetch(API_URL+url, {
    method,
    headers: {
      'x-access-token': token
    }
  }).then(handleResponse)
}

export function postPut(url, token, data, method='POST') {
  return fetch(API_URL+url, {
    method,
    headers: {
      'x-access-token': token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(handleResponse)
}

// export function deleteApi(url, token) {
//   return fetch(API_URL+url, {  
//     method: 'DELETE',
//     headers: {
//       'x-access-token': token
//     }
//   }).then(handleResponse)
// }

// export function put(url, token, data) {
//   return fetch(API_URL+url, {
//     method: 'PUT',
//     headers: {
//       'x-access-token': token,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   }).then(handleResponse)
// }
