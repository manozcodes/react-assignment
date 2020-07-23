import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import PrivateRoute from "./components/common/PrivateRoute";
import Login from './components/auth/login/Login.js';
import Dashboard from './components/Dashboard';
import { loadUser } from "./actions/auth";
import Register from './components/auth/register/Register';

import "antd/dist/antd.css";
import "./custom.css"

const store = configureStore();

class App extends React.Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return(
      <Provider store={store}>
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register/" component={Register} />
              <PrivateRoute
                  exact
                  path="/dashboard/"
                  component={Dashboard}
                />
            </Switch>
          </>
        </Router>
      </Provider>
    )
  }
}

export default App;