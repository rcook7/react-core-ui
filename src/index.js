import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from './configureStore';
import { ConnectedRouter } from 'react-router-redux'

// Containers
import Page from './components/Page/'

import Login from './views/Login/'
import Register from './views/Register/'

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login}/>
        <Route exact path="/register" name="Register Page" component={Register}/>
        <Route path="/" name="Home" component={Page}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
), document.getElementById('root'))
