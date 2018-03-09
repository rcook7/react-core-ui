This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

This project requires Node API. Clone this repo: [`node-rest-api`](https://github.com/fullstackdevs14/node-rest-api)

# Technology Stack

* [React](https://facebook.github.io/react/)
* [Create React App](https://github.com/facebookincubator/create-react-app)
* [React Redux](https://github.com/reactjs/react-redux)
* [React Router](https://github.com/ReactTraining/react-router)
* [React Redux Saga](https://github.com/redux-saga/redux-saga)
* [Github Fetch](https://github.com/github/fetch)
* [Redux Form](http://redux-form.com/6.8.0/)
* [Moment](https://momentjs.com/)

# Development

To start the application:

1. Add `env` variables `NODEDEMO_API_URL`
For Ubuntu
* Open `~/.bashrc`
* Add following lines at the end of the file
```
export NODEDEMO_API_URL="http://localhost:8080"
```
2. Run command: `npm start`

# Heroku deployment

1. Add config var: `NODEDEMO_API_URL`(API url)
2. Follow instructions of [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack)
