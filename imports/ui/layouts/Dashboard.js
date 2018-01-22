import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Link, NavLink, withRouter, Redirect} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Play from '../pages/Play';
import {Session} from 'meteor/session';
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:[
        {id:1,name:'Web Development',url:'website-development'},
        {id:2,name:'App Development',url:'application-development'},
        {id:2,name:'Core Languages',url:'core-languages'},
        {id:3,name:'Business',url:'Business'},
        {id:4,name:'IT & Software',url:'IT & Software'},
        {id:5,name:'Personal Development',url:'Personal Development'},
        {id:6,name:'Design',url:'Design'},
        {id:7,name:'Marketing',url:'Marketing'},
        {id:8,name:'Photography',url:'Photography'},
      ],
      tabbar:0,
    };
  }


  changeTabBarStatus(state){
    this.setState({tabbar:state})
  }
  componentDidMount() {

   componentHandler.upgradeDom();
}
componentDidUpdate() {
   componentHandler.upgradeDom();
}


  render() {
    return (
      <div>
      <Router>
      <div>
            <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header" style={{height:'100vh'}}>
              <header className="demo-header mdl-layout__header  mdl-color--teal-300 mdl-color-text--black-600 ">
                <div className="mdl-layout__header-row">
                  <span className="mdl-layout-title"><a href="/" style={{color:'#fff',textDecoration:'none'}}>allcoursesfree.com</a></span>
                  <div className="mdl-layout-spacer"></div>
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                    <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                      <i className="material-icons">search</i>
                    </label>
                    <div className="mdl-textfield__expandable-holder">
                      <input className="mdl-textfield__input" type="text" id="search" onChange={(e)=>{this.setState({search:e.target.value})}}/>
                      <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
                    </div>
                  </div>
                  <button  id="myheader1" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn1">
                    <i className="material-icons">more_vert</i>
                  </button>
                  <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn1">
                    <li className="mdl-menu__item" onClick={()=>{location.reload(); }}>Reload</li>
                    <li className="mdl-menu__item">Contact</li>
                    <li className="mdl-menu__item" onClick={()=>{Session.clear(); this.props.history.push('/login'); }}>Logout</li>
                  </ul>
                </div>
                  <div className="mdl-layout__tab-bar mdl-js-ripple-effect" style={{display:`${this.state.tabbar == 0 ? 'none' :'block'}`}} >
                    <a href="#scroll-tab-1" className="mdl-layout__tab is-active" style={{display:`${this.state.tabbar == 0 ? 'none' :'block'}`}}>learing </a>
                    <a href="#scroll-tab-2" className="mdl-layout__tab" style={{display:`${this.state.tabbar == 0 ? 'none' :'block'}`}}>problems</a>
                    <a href="#" className="mdl-layout__tab is-active" style={{display:`${this.state.tabbar == 0 ? 'none' :'block'}`,color:'red',backgroundColor:'white'}}>please open a play list by clicking on the top left corner of the video player</a>
                  </div>
              </header>
              <div className="demo-drawer mdl-layout__drawer mdl-color--white-grey-900 mdl-color-text--black-grey-50">
                <header className="demo-drawer-header mdl-color--teal-300 mdl-color-text--black-600 " >
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9zOF8VxM6oNgGrfW1832Wpq-gRpuXUvGorYwpjXwUoBmz2MNV" className="demo-avatar" />
                  <div className="demo-avatar-dropdown">
                    <span>hello@example.com</span>
                    <div className="mdl-layout-spacer"></div>
                    <button id="accbtn1" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                      <i className="material-icons" role="presentation">arrow_drop_down</i>
                      <span className="visuallyhidden">Accounts</span>
                    </button>
                    <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" htmlFor="accbtn1">
                      <li className="mdl-menu__item">hello@example.com</li>
                      <li className="mdl-menu__item">info@example.com</li>
                      <li className="mdl-menu__item"><i className="material-icons">add</i>Add another account...</li>
                    </ul>
                  </div>
                </header>
                <nav className="demo-navigation mdl-navigation mdl-color--black-grey-800">
                {
                  this.state.categories.map((cat,i)=>{
                    return(
                      <NavLink key={i} className="mdl-navigation__link" to={`/dashboard/${cat.url}`}>{cat.name}</NavLink>
                    )
                  })
                }
                  <div className="mdl-layout-spacer"></div>
                  <NavLink className="mdl-navigation__link" to=""><i className="mdl-color-text--blue-grey-400 material-icons" role="presentation">help_outline</i><span className="visuallyhidden">Help</span></NavLink>
                </nav>
              </div>

              <main className="mdl-layout__content mdl-color--grey-100">
                <div className="mdl-grid demo-content">
                <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
                 <Route exact path={`/dashboard/:id`}  render={props =><HomePage {...props} changeTabBarStatus={this.changeTabBarStatus.bind(this)} />} />
                 <Route exact path={`/dashboard/:catid/:subcatid`}  render={props =><Play {...props} changeTabBarStatus={this.changeTabBarStatus.bind(this)} />} />
               </section>
               <section className="mdl-layout__tab-panel" id="scroll-tab-2">
                 <div className="page-content">Raising problems module coming soon</div>
               </section>
              </div>
            </main>

            </div>

            <div id="demo-toast-example" className="mdl-js-snackbar mdl-snackbar">
            <div className="mdl-snackbar__text"></div>
            <button className="mdl-snackbar__action" type="button"></button>
            </div>

            </div>
          </Router>
      </div>
    );
  }

}

export default withRouter(Dashboard);
