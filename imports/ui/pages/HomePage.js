import React, { Component } from 'react';
import {NavLink, withRouter, Redirect} from 'react-router-dom';
import {Session} from 'meteor/session';
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategories:[
{id:1, name:"HTML5" ,catname:'website-development', image:"http://www.iconhot.com/icon/png/coded/512/page-html.png",description:'tutorial-for-html'},
{id:3, name:"CSS" ,catname:'website-development', image:"https://www.javatpoint.com/images/javascript/javascript_logo.png",description:'tutorial-for-css'},
{id:2, name:"Javascript" ,catname:'website-development', image:"http://www.rdmultimediainstitute.in/wp-content/uploads/2015/08/Courses-Inner-Page-03.png",description:'tutorial-for-javascript'},
{id:2, name:"JQuery" ,catname:'website-development', image:"http://andrewembler.com/application/files/3314/3189/5779/jquery-logo.jpg",description:'tutorial-for-jquery'},
{id:2, name:"Bootstrap" ,catname:'website-development', image:"https://bilalamjad.net/wp-content/uploads/2015/07/bs.png",description:'tutorial-for-bootstrap'},
{id:4, name:"React js" ,catname:'website-development', image:"https://winnonapartners.files.wordpress.com/2016/12/react-js-winnona-partners.png?",description:'tutorial-for-reactjs'},
{id:5, name:"Node js" ,catname:'website-development', image:"https://www.tutorialspoint.com/nodejs/images/nodejs-mini-logo.jpg",description:'tutorial-for-nodejs'},
{id:6, name:"Git" ,catname:'website-development', image:"https://akamist.com/blog/wp-content/uploads/2017/08/icon_git.png",description:'tutorial-for-git'},
{id:6, name:"React Native" ,catname:'application-development', image:"https://webinerds.com/app/uploads/2017/11/d49396_d9c5d967608d4bc1bcf09c9574eb67c9-mv2.png",description:'tutorial-for-react-native'},
{id:6, name:"Android" ,catname:'application-development', image:"https://pbs.twimg.com/profile_images/875443327835025408/ZvmtaSXW_400x400.jpg",description:'tutorial-for-android'},
{id:6, name:"Java" ,catname:'core-languages', image:"https://images.sftcdn.net/images/t_optimized,f_auto/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/java-runtime-environment-logo.png",description:'tutorial-for-java'},
{id:6, name:"C & C++" ,catname:'core-languages', image:"http://www.mcminfotech.com/wp-content/uploads/2017/07/c-programining.jpg",description:'tutorial-for-c-and-c++'},

]
    };
  }
  componentWillMount() {
  this.props.changeTabBarStatus(0)
  }

  render() {
    document.getElementById('mytitlehai').innerHTML= this.props.match.params.id;
    if (this.props.match.params.id === "website-development") {
    document.getElementById('mycontenthai').setAttribute("content", "Focus web design and development courses, full stack developer course. Modern Build Websites from Scratch with HTML & CSS. Build Responsive Website Using HTML5, CSS3, JS And Bootstrap. JavaScript")
    }
    if (this.props.match.params.id === "application-development") {
      document.getElementById('mycontenthai').setAttribute("content", "Learn Mobile App Development design courses for free. These courses are suited for those seeking to learn more about mobile app development and related fields.")
    }
    return (
      <div>
      <div className="demo-cards mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid mdl-grid--32-spacing" style={{display:'flex',flex:1,justifyContent:'center',flexWrap:'wrap',height:'100%'}}>

          {
            this.state.subcategories.map((sub,i)=>{
              if (sub.catname === this.props.match.params.id ) {
                return(
                  <div className="demo-card-wide mdl-card mdl-shadow--2dp" key={i} style={{margin:10}}>
                    <div className="mdl-card__title" style={{background:`url('${sub.image}')`,backgroundPosition:'center center',backgroundSize:'100% auto'}}>
                    </div>
                    <div className="mdl-card__supporting-text" style={{fontSize:20,color:'black'}}>{sub.name} </div>
                    <div className="mdl-card__supporting-text"> {sub.description} </div>
                    <div className="mdl-card__actions mdl-card--border">
                      <NavLink className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to={`/dashboard/${sub.catname}/${sub.description}`}>
                        Get Started
                      </NavLink>
                    </div>
                  </div>
                )
              }
            })
          }

      </div>
      </div>
    );
  }

}

export default HomePage;
