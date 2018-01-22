import React, { Component } from 'react';
import { Route,Redirect,Switch } from 'react-router-dom';
import { Session } from 'meteor/session';
import  MainLayout  from './layouts/MainLayout';
import  AdminLayout  from './layouts/AdminLayout';
import  LoginPage  from './layouts/LoginPage';
import  Dashboard  from './layouts/Dashboard';

export default class App extends Component {


  render(){
   return (
     <div>
      <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/" component={MainLayout} />
            <Route exact path={`/dashboard/:id`}  render={props =><Dashboard {...props}  />} />
            <Route exact path={`/dashboard/:id/:id`}  render={props =><Dashboard {...props}  />} />


            <Route component={NoMatch}/>
        </Switch>
     </div>
   )
 }
}
const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)
