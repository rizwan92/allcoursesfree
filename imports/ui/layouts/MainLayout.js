import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './css/MainPage.css';
class MainLayouts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories:[
        {id:1, name:"HTML5" ,catname:'website-development', image:"http://www.iconhot.com/icon/png/coded/512/page-html.png",description:'tutorial-for-html'},
        {id:3, name:"CSS" ,catname:'website-development', image:"https://www.javatpoint.com/images/javascript/javascript_logo.png",description:'tutorial-for-css'},
        {id:2, name:"Javascript" ,catname:'website-development', image:"http://www.rdmultimediainstitute.in/wp-content/uploads/2015/08/Courses-Inner-Page-03.png",description:'tutorial-for-javascript'},
        {id:2, name:"JQuery" ,catname:'website-development', image:"http://andrewembler.com/application/files/3314/3189/5779/jquery-logo.jpg",description:'tutorial-for-jquery'},
        {id:4, name:"React js" ,catname:'website-development', image:"https://winnonapartners.files.wordpress.com/2016/12/react-js-winnona-partners.png?",description:'tutorial-for-reactjs'},
        {id:5, name:"Node js" ,catname:'website-development', image:"https://www.tutorialspoint.com/nodejs/images/nodejs-mini-logo.jpg",description:'tutorial-for-nodejs'},
        {id:6, name:"Git" ,catname:'website-development', image:"https://akamist.com/blog/wp-content/uploads/2017/08/icon_git.png",description:'tutorial-for-git'},
        {id:6, name:"React Native" ,catname:'application-development', image:"https://webinerds.com/app/uploads/2017/11/d49396_d9c5d967608d4bc1bcf09c9574eb67c9-mv2.png",description:'tutorial-for-react-native'},
        {id:6, name:"Android" ,catname:'application-development', image:"https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg",description:'tutorial-for-android'},
]
    };
  }

  componentWillMount() {
    $(function() {
  $(".mdl-navigation__link").on('click', function(event) {
    if(this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $(".mdl-layout__content").stop().animate({ scrollTop:
         $(hash).get( 0 ).offsetTop}, "slow");
    }
  });
  });
  }
  componentDidMount() {
    (adsbygoogle = window.adsbygoogle || []).push({});
     componentHandler.upgradeDom();
  }
  componentDidUpdate() {
     componentHandler.upgradeDom();
  }


  render() {
    return (
      <div>

        <div className="mdl-layout mdl-js-layout mdl-layout--no-drawer-button mdl-layout--fixed-header header-img--background">
        <header className="mdl-layout__header mdl-layout__header--waterfall header-img--bacground-opacity">
        <div className="mdl-layout__header-row">
        <div className="mdl-layout-spacer"></div>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="#intro-section">Home</a>
          <a className="mdl-navigation__link" href="#skills-section">Skills</a>
          <a className="mdl-navigation__link" href="#portfolio-section">Courses</a>
        </nav>
        </div>
        </header>
        <main className="mdl-layout__content content">

        <div id="intro-section" className="mdl-grid intro-section header-img--bacground-opacity">
        <div className="mdl-cell mdl-cell--12-col mdl-typography--text-center intro-section-container">
          <div>
            <h1 className="mdl-typography--display-3 bold-text">Welcome to <span className="intro-section-name mdl-color-text--primary">allcoursesfree.com</span></h1>
            <p>GET ALL COURSES FOR FREE<br /></p>
            <p>Contact : drop your email at chouhan.rizwan@gmail.com<br /></p>
            <div>
              <a href="/dashboard/website-development"  className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored my-mixed_case">Get started</a>
            </div>
          </div>
        </div>
        </div>



        <div id="skills-section" className="mdl-grid skills-section">


        <ins className="adsbygoogle"
         style={{display:"block",width:'100%',height:200}}
         data-ad-client="ca-pub-8311357460930583"
         data-ad-slot="2975571806"
         data-ad-format="auto"></ins>


        <div className="mdl-cell mdl-cell--12-col">
          <div className="skills-section--container">
            <div className="mdl-typography--text-center">

              <h1 className="mdl-typography--display-3 bold-text mdl-color-text--primary">Skills</h1>
            </div>
            <div className="flex-center">
              <div>
                <img src="https://drive.google.com/uc?id=0B07F9h5B-zQIM0dWOVlGcTk3VlU" alt="html5" />
              </div>
              <div>
                <img src="https://drive.google.com/uc?id=0B07F9h5B-zQIZGFRSUN3SV9kRjA" alt="css3" />
              </div>
              <div>
                <img src="https://drive.google.com/uc?id=0B07F9h5B-zQIWkh4ZEotcFp3cEk" alt="javascript" />
              </div>
              <div>
                <img src="https://drive.google.com/uc?id=0B07F9h5B-zQIMGh3cnFDdEcxRlk" alt="jQuery" />
              </div>
              <div>
                <img src="https://drive.google.com/uc?id=0B07F9h5B-zQIdnZCWUlJekZEMUE" alt="bootstrap" />
              </div>
              <div>
                <img src="https://drive.google.com/uc?id=0B07F9h5B-zQIbEo0eEo5Q1Rmak0" alt="java" />
              </div>
              <div>
                <img src="https://drive.google.com/uc?id=0B07F9h5B-zQIamdNeFl4Y3lvaEE" alt="android" />
              </div>
              <div>
                <img src="https://drive.google.com/uc?id=0B07F9h5B-zQIb1N6cVJVaXJiMEU" alt="git" />
              </div>
            </div>
          </div>
        </div>
        </div>

        <div id="portfolio-section" className="mdl-grid mdl-color--primary portfolio-section">
        <div className="mdl-cell mdl-cell--12-col portfolio-section-container mdl-typography--text-center">
          <h1 className="mdl-typography--display-3 bold-text">PORTFOLIO</h1>
          <div className="mdl-grid">

          {
            this.state.subcategories.map((sub,i)=>{
              return(
                <div key={i} className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-card mdl-shadow--6dp">
                  <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text card-text card-title">{sub.name}</h2>
                  </div>
                  <div className="mdl-card__media">
                    <img src={sub.image} alt=""  style={{height:100}}/>
                  </div>
                  <div className="mdl-card__supporting-text card-text">
                  {sub.description}
                  </div>
                </div>

              )
            })
          }




          </div>
        </div>
        </div>
        </main>
        </div>
      </div>
    );
  }

}

export default MainLayouts;
