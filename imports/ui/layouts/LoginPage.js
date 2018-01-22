import React, { Component } from 'react';
import './css/LoginPage.css';

class LoginPage extends Component {

  render() {
    return (
      <div>
      <div className="container">
       <div className="login-block">
           <div className="login-panel">
               <h3>Login</h3>
           </div>
           <div className="reg">
               <button id="log-btn" className="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
                 <i className="material-icons">perm_identity</i>
               </button>
           </div>
           <div className="sign-in">
               <form action="#">
                     <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full">
                       <input className="mdl-textfield__input" type="text" id="email" />
                       <label className="mdl-textfield__label" htmlFor="email">Email</label>
                     </div>
                     <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label full">
                       <input className="mdl-textfield__input" type="text" id="password" />
                       <label className="mdl-textfield__label" htmlFor="password">Password</label>
                     </div>
                     <button type="submit" id="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                         submit
                   </button>
                   <div className="footer-login">
                       <div className="chk">
                           <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox-1">
                             <input type="checkbox" id="checkbox-1" className="mdl-checkbox__input" checked  onChange={()=>{}}/>
                             <span className="mdl-checkbox__label">KEEP ME SIGNED IN</span>
                           </label>
                       </div>
                       <div className="forget">
                           <a className="forget" href="#!">Forget Password</a>
                       </div>
                   </div>
               </form>
           </div>
       </div>
   </div>
      </div>
    );
  }

}

export default LoginPage;
