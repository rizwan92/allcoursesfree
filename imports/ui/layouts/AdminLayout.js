import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link, NavLink, withRouter, Redirect} from 'react-router-dom';
import { Session } from 'meteor/session';

class AdminLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search:'',
    };
  }


  componentDidMount() {
     // componentHandler.upgradeDom();
  }
  componentDidUpdate() {
     // componentHandler.upgradeDom();
  }
  render() {
    return (
      <Router>
      <div>
      admin
      </div>
      </Router>
    );
  }

}

export default withRouter(AdminLayout);
