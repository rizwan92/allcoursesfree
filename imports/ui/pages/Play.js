import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Session} from 'meteor/session';
class Play extends Component {
constructor(props) {
  super(props);
  this.state = {
    videos:[
        {catname:'website-development',subcatname:'tutorial-for-html',playlistid:[{title:'HTML Tutorial for Beginners by EJ Media',pid:'PLr6-GrHUlVf_ZNmuQSXdS197Oyr1L9sPB'},
        {title:'8: HTML / CSS / DOM - p5.js Tutorial by The Coding Train',pid:'PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX',yid:''},
        {title:'HTML5 and CSS3 beginners tutorials by Quentin Watt Tutorials',pid:'PL41lfR-6DnOruqMacTfff1zrEcqtmm7Fv'},
        {title:'HTML Crash Course For Absolute Beginners by Traversy Media',pid:'',yid:'UB1O30fR-EE'},
        {title:'30 Days to Learn HTML & CSS (Full Course) by Envato Tuts+',pid:'PLgGbWId6zgaWZkPFI4Sc9QXDmmOWa1v5F',yid:''},
        {title:'HTML5 Tutorials Playlist by thenewboston',pid:'PL081AC329706B2953',yid:''},
        {title:'HTML Tutorials by The Bad Tutorials',pid:'PL_RGaFnxSHWr_FB-hVEgEGUESZL1TOiJ6',yid:''},
        {title:'HTML Tutorial for Beginners - Learn HTML in 30 Minutes by Clever Techie',pid:'',yid:'hrZqiCUx6kg'},
        {title:'HTML and CSS Tutorials by mmtuts',pid:'PL0eyrZgxdwhwNC5ppZo_dYGVjerQY3xYU',yid:''},
        {title:'New HTML Tutorials by TechnicalCafe',pid:'PL4FDF971B5204C15F',yid:''},
        {title:'HTML Tutorial - Beginners Guide to making web pages by VoidRealms',pid:'PL9D39CC58E2D4412C',yid:''},
      ]},
        {catname:'website-development',subcatname:'tutorial-for-css',playlistid:[
          {title:'CSS Tutorial for Beginners by EJ Media',pid:'PLr6-GrHUlVf8JIgLcu3sHigvQjTw_aC9C',yid:''},
          {title:'CSS Basics by DevTips',pid:'PLqGj3iMvMa4IOmy04kDxh_hqODMqoeeCy',yid:''},
          {title:'30 Days to Learn HTML & CSS (Full Course) by Envato Tuts+',pid:'PLgGbWId6zgaWZkPFI4Sc9QXDmmOWa1v5F',yid:''},
          {title:'CSS Tutorials For Beginners by The Net Ninja',pid:'PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT',yid:''},
          {title:'CSS Tutorial by w3schools.com',pid:'PLP9IO4UYNF0XQNx1OinMm84lyGzWSWDms',yid:''},
          {title:'Advanced CSS by Coding Rails',pid:'PLskZP4iE0XzaHE0yH2KUiPD-BMk-fIkHN',yid:''},
          {title:'Css Awesome Effect by Online Tutorials',pid:'PL5e68lK9hEzfwcPS1vTBsfKEtkK5KMts1',yid:''},
          {title:'CSS Tricks by AsLaN SavaşmaN',pid:'PLq_uWB0WqY0sb9Lzk5-FEJtaUDB5Gmwcv',yid:''},
          {title:'CSS Animation Tricks by H. Max',pid:'PLCjEGbl1X-h_GWOfT9CvxWcLZ4ZuDfQdO',yid:''},
          {title:'CSS Tutorials by LevelUpTuts',pid:'PLLnpHn493BHH6DkHPhduhco5XavNA9JaD',yid:''},
          {title:'Materialize CSS Tutorial - Create a Portfolio by breaktech',pid:'PLx0T51ydRO_4gBFWzI9MIg53dG1pWfWOp',yid:''},
          {title:'BEST CSS ANIMATION TUTORIALS IN YOUTUBE by FrontendTips',pid:'PLRCvSNiMyEmyhBFNVSxj_nQsd75hkroGX',yid:''},
          {title:'Learn CSS 2017 (Complete CSS Course) by whatsdev',pid:'PLkBfv4fGBau81ldUMNZszy9qNkaKdonQ_',yid:''},
          {title:'CSS Tutorials by The Bad Tutorials',pid:'PL_RGaFnxSHWqMH9a9DY8LFKrJ5NJCFHHe',yid:''},
          {title:'Advanced Html & Css Lessons by Elzero Web School',pid:'PLDoPjvoNmBAycLCqZ6Fx-FT96cRRuPiBh',yid:''},
          {title:'CSS Tutorials for Beginners- Step By Step by T3SO Tutorials',pid:'PLH1n1sJO7tbxPIAYGI6kbkFc86fYZvvT-',yid:''},
          {title:'CSS Grid Tutorial by The Net Ninja',pid:'PL4cUxeGkcC9itC4TxYMzFCfveyutyPOCY',yid:''},
        ]},
        {catname:'website-development',subcatname:'tutorial-for-javascript',playlistid:[
          {title:'Javascript beginner tutorials by Quentin Watt Tutorials',pid:'PL41lfR-6DnOrwYi5d824q9-Y6z3JdSgQa',yid:''},
          {title:'JavaScript Tutorial by kudvenkat',pid:'PL6n9fhu94yhUA99nOsJkKXBqokT3MBK0b',yid:''},
          {title:'Introduction to JavaScript for Developers by Java Brains',pid:'PLqq-6Pq4lTTYFJxC9NLJ7dSTI5Z1WWB6K',yid:''},
          {title:'JavaScript Tutorials Playlist by thenewboston',pid:'PL46F0A159EC02DF82',yid:''},
          {title:'JavaScript Tutorial for Beginners by EJ Media',pid:'PLr6-GrHUlVf96NLj3PQq-tmEB6woZjwEl',yid:''},
          {title:'JavaScript Tutorials for Beginners by The Net Ninja',pid:'PL4cUxeGkcC9i9Ae2D9Ee1RvylH38dKuET',yid:''},
          {title:'JavaScript Advanced Tutorials by Codecademy',pid:'PLz1XPAFf8IxbIU78QL158l_KlN9CvH5fg',yid:''},
          {title:'Javascript Harvard Lectures by pThorkelq',pid:'PLdoNy3Uq-ifyalRJfpx-to-1HdFtw3Jm_',yid:''},
          {title:'Javascript Tutorials Essential Learning by Avelx',pid:'PLGC-hHIh7l5vs0uDGlQEXQGQR2hW8Gcwl',yid:''},
          {title:'JavaScript Basics by freeCodeCamp',pid:'PLWKjhJtqVAbk2qRZtWSzCIN38JC_NdhW5',yid:''},
          {title:'JavaScript Tutorial | Mr. Subba Raju by Naresh i Technologies',pid:'PLVlQHNRLflP-ByWEVjCZAj79kJdshKQwuD',yid:''},
          {title:'JavaScript Design Patterns by Udacity',pid:'PLAwxTw4SYaPkGKjpeiLWz8ydvFEkmRkBn',yid:''},
          {title:'JavaScript by RamSourceBasics',pid:'PLFIUfkm8gifndK9xX6y5HgPPooVSJwzm9',yid:''},
          {title:'JavaScript Tutorials by mmtuts',pid:'PL0eyrZgxdwhwSYSCktL609HxyXBalX2J_',yid:''},
          {title:'Javascript Basics by Udacity',pid:'PLAwxTw4SYaPmtf5v3hefG5seVynUtV9T8',yid:''},
          {title:'advanced javascript tutorial by techsith',pid:'PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf',yid:''},
          {title:'JavaScript Best Practices by Ava Luci',pid:'PL7XjSnbRqMYXAb0zF66uhiEdX0tsSwGge',yid:''},
          {title:'Learn Javascript HTML DOM by Elzero Web School',pid:'PLDoPjvoNmBAxx97QDMOCpzxbu1ZHJ4i7i',yid:''},
          {title:'Javascript Fundamentals by LearnCode.academy',pid:'PLoYCgNOIyGACTDHuZtn0qoBdpzV9c327V',yid:''},
          {title:'Advanced JavaScript Tutorial - Complete Series by Tech CBT',pid:'PLvZkOAgBYrsSZiL0L7T-CBGdiBUaHok4x',yid:''},
          {title:'Modular Javascript by LearnCode.academy',pid:'PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f',yid:''},
          {title:'Object Creation in JavaScript by Fun Fun Function',pid:'PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub',yid:''},
          {title:'JavaScript Tutorial Videos by Adam Khoury',pid:'PL00952AC35D0A4701',yid:''},
        ]},
        {catname:'website-development',subcatname:'tutorial-for-jquery',playlistid:[
          {title:'jQuery tutorial for beginners by kudvenkat',pid:'PL6n9fhu94yhVDV697uvHpavA3K_eWGQap',yid:''},
          {title:'jQuery Tutorial for Beginners by LearnCode.academy',pid:'PLoYCgNOIyGABdI2V8I_SWo22tFpgh2s6_',yid:''},
          {title:'jQuery Tutorials Playlist by thenewboston',pid:'PL6B08BAA57B5C7810',yid:''},
          {title:'jQuery Crash Course by Traversy Media',pid:'PLillGF-RfqbYJVXBgZ_nA7FTAAEpp_IAc',yid:''},
          {title:'JQuery Tutorial for Beginners by EJ Media',pid:'PLr6-GrHUlVf_RNxQQkQnEwUiHELmB0fW1',yid:''},
          {title:'Jquery Advance Tutorial by Webslesson',pid:'PLxl69kCRkiI1bpvzdSs_FM_lc79Q6UU9y',yid:''},
          {title:'jQuery Tutorials for Beginners by The Net Ninja',pid:'PL4cUxeGkcC9hNUJ0j6ccnOAcJIPoTRpO4',yid:''},
          {title:'AJAX and jQuery Beginner Tutorials by mybringback',pid:'PLHPcpp4e3JVpXbtgyD-k-nCmwpbbMIHOh',yid:''},
          {title:'Learn jQuery Free - Ultimate Web Developer Course by Brad Hussey',pid:'PLUoqTnNH-2Xwmr2GvOdZMJnrp6b51ndZE',yid:''},
          {title:'Intro to jQuery by Udacity',pid:'PLAwxTw4SYaPkk4k42lGH3l-MlojoNFBFI',yid:''},
          {title:'jQuery Video Course by w3webschool.net',pid:'PLPAcs2twrK5_FzWMttkbTuM0dB5A-ni-Q',yid:''},
          {title:'[Udemy]Complete.JQuery.And.JQuery.UI.Course.For.Beginner by ELSouRce',pid:'PLHEtfzkTLVE-lj-3yE9IYCIpZfCnh7MW3',yid:''},
          {title:'jQuery Tutorials by codedamn',pid:'PLYxzS__5yYQmOHP2igpDknCdtGl7euGjE',yid:''},
        ]},
        {catname:'website-development',subcatname:'tutorial-for-bootstrap',playlistid:[
          {title:'bootstrap tutorial for beginners by kudvenkat',pid:'PL6n9fhu94yhXd4xnk-j5FGhHjUv1LsF0V',yid:''},
          {title:'Bootstrap Tutorials for Beginners Playlist by thenewboston',pid:'PL6gx4Cwl9DGBPw1sFodruZUPheWVKchlM',yid:''},
          {title:'Learning Bootstrap - Bootstrap 3 Tutorial Series by WebDevMentors',pid:'PLVDYxb1dYhnqUn0_liNeONyicF1Y3ajLp',yid:''},
          {title:'Bootstrap 3 Tutorial Series by Sonar Systems',pid:'PLRtjMdoYXLf6Inhz3BZ1h8Ti5q6lleOOC',yid:''},
          {title:'Bootstrap by Quentin Watt Tutorials',pid:'PL41lfR-6DnOovY0t3nBg8Zb6aqm_H70mR',yid:''},
          {title:'Bootstrap 3 Tutorials For Beginners by Wiredwiki English',pid:'PLvAAZChoagM3Ch63apDSE6Ra6NeI62sQV',yid:''},
          {title:'How To Design With Bootstrap 3 by Elzero Web School',pid:'PLDoPjvoNmBAw24EjNUp_88S1VeaNK8Cts',yid:''},
          {title:'How To Design With Bootstrap 3 by Elzero Web School',pid:'PLDoPjvoNmBAw24EjNUp_88S1VeaNK8Cts',yid:''},
          {title:'Bootstrap 4 - Free Responsive Web Design Tutorials by Brad Hussey',pid:'PLUoqTnNH-2XyNhhLuYrrmrmV46jVw6RHF',yid:''},
          {title:'Dreamweaver Bootstrap Tutorial by Bring Your Own Laptop',pid:'PLttcEXjN1UcGGYiUstymWVMVeYZIOK18D',yid:''},
        ]},
        {catname:'website-development',subcatname:'tutorial-for-reactjs',playlistid:[
          {title:'React JS Tutorials by LearnCode.academy',pid:'PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b',yid:''},
          {title:'ReactJS Basics by Academind',pid:'PL55RiY5tL51oyA8euSROLjMFZbXaV7skS',yid:''},
          {title:'React JS Tutorials for Beginners by thenewboston',pid:'PL6gx4Cwl9DGBuKtLgPR_zWYnrwv-JllpA',yid:''},
          {title:'React JS Training program by Tarun Sharma',pid:'PLIGDNOJWiL1_2CpDKGg4-jNPqoirutxc5',yid:''},
          {title:'ReactJS \ React JS Tutorial For Beginners by Deepak MS',pid:'PLnObopLrGSq6hs6dMaZXYoBOSldhjsaH2',yid:''},
          {title:'RReact js Tutorials Series 2017 by Bitfumes Webnologies',pid:'PLe30vg_FG4OT1gN7waO7ESyrn7EfI_fG-',yid:''},
          {title:'React JS by codedamn',pid:'PLYxzS__5yYQmD7FV1YYz9UxPyGTNsFObp',yid:''},
          {title:'ReactJS + Redux Basics by Academind',pid:'PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_',yid:''},
          {title:'ReactJS from the start by CodeWithTim',pid:'PLoAsubXIl8uJugGO_VFB0Q0xe3r0Jk6C9',yid:''},
          {title:'react js from scratch by techsith',pid:'PL7pEw9n3GkoVAqCMVTz2mKthyWr-svpQJ',yid:''},
          {title:'React Js and Redux mastering by Geek Batman',pid:'PL7hgvWUGJtUs-NAUN5klpRMbDYOw0pMKS',yid:''},
          {title:'React.js Tutorial Deutsch - Beginner by Markus Reichl',pid:'PLnlqg5o1zhnhzBcl76KLgjdAOTy5Rumm_',yid:''},
          {title:'Learning React.js by Traversy Media',pid:'PLillGF-RfqbbKWfm3Y_RF57dNGsHnkYqO',yid:''},
          {title:'Flux & React.js by Traversy Media',pid:'PLillGF-RfqbaevC84ezBcmlfR54H9RaUr',yid:''},
          {title:'ReactJS Tutorial Videos by edureka!',pid:'PL9ooVrP1hQOGN1jUBxcghKWedTVD2Ns0z',yid:''},
          {title:'React Js with Redux Tutorials For beginners - React with Firebase by most technical videos',pid:'PLeTCMZ8EohyZHlc0EbBBMTSL0V-NJ293_',yid:''},
        ]},
        {catname:'website-development',subcatname:'tutorial-for-nodejs',playlistid:[
          {title:'Node JS Tutorial for Beginners by The Net Ninja',pid:'PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp',yid:''},
          {title:'Node.js Tutorials for Beginners by thenewboston',pid:'PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_',yid:''},
          {title:'Node.js Basics by Academind',pid:'PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR',yid:''},
          {title:'Learn Nodejs with 10 projects by Learn programming for free',pid:'PLx9YLpPjw0mgbAMF1T4pZY_4tLee-uOyC',yid:''},
          {title:'NodeJS + ExpressJS Tutorials by codedamn',pid:'PLYxzS__5yYQmHbpKMARP04F344zYRX91I',yid:''},
          {title:'Node.js & Express From Scratch by Traversy Media',pid:'PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp',yid:''},
          {title:'NodeJS Tutorial by Derek Banas',pid:'PLGLfVvz_LVvSpxyVx5XcprEgvhJ1BzruD',yid:''},
          {title:'Node js Tutorial for Beginners by Codevolution',pid:'PLC3y8-rFHvwhco_O8PS1iS9xRrdVTvSIz',yid:''},
          {title:'Node JS Advance Topics by Tarun Sharma',pid:'PLT5Jhb7lgSBOvocUna6qiB4xMlAObS5NR',yid:''},
          {title:'Node.js & Passport Login System by Traversy Media',pid:'PLillGF-RfqbbqvbObyE7CldS5-trkefnB',yid:''},
          {title:'Build a Real Time web app in node js , Angular js, mongoDB by Determination',pid:'PLI-gk4ISRzCPlJjCz3yuAhL8vnmK6KWr7',yid:''},
          {title:'Node.js Tutorials by LearnCode.academy',pid:'PLoYCgNOIyGAACzU6GliHJDp4kmOw3NFsh',yid:''},
          {title:'Building a RESTful API with Node.js by Academind',pid:'PL55RiY5tL51q4D-B63KBnygU6opNPFk_q',yid:''},
          {title:'Node.Js Tutorial Videos by edureka!',pid:'PL9ooVrP1hQOHDHAMA5egjL5MrbnNIuJqZ',yid:''},
          {title:'Loopback - The Node.js API Framework by Thinus Naude',pid:'PLjaZjqMyv27vslUCU3d4JAhluZToz44vP',yid:''},
          {title:'Node.js - Advanced Tutorial by Hans Schenker bei Google',pid:'PLw5h0DiJ-9PAfwX0dGsQqCXXbTwQyXP8E',yid:''},
        ]},
        {catname:'website-development',subcatname:'tutorial-for-git',playlistid:[
          {title:'Git Tutorials Playlist by thenewboston',pid:'PL6gx4Cwl9DGAKWClAD_iKpNC0bGHxGhcx',yid:''},
          {title:'Git and GitHub by Automation Step-by-Step - Raghav Pal',pid:'PLhW3qG5bs-L8OlICbNX9u4MZ3rAt5c5GG',yid:''},
          {title:'Git Tutorials by Corey Schafer',pid:'PL-osiE80TeTuRUfjRe54Eea17-YfnOOAx',yid:''},
          {title:'Git and GitHub for Poets by The Coding Train',pid:'PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV',yid:''},
          {title:'Git Tutorial for Beginners by Telusko Learnings',pid:'PLsyeobzWxl7q2eaUkorLZExfd7qko9sZC',yid:''},
          {title:'Belajar GIT - version control system by Sekolah Koding',pid:'PLCZlgfAG0GXATLIO3kp405u6TyFPQ9Kjy',yid:''},
          {title:'Git & GitHub by Codecourse',pid:'PLfdtiltiRHWFEbt9V04NrbmksLV4Pdf3j',yid:''},
          {title:'Git & GitHub Tutorial for Beginners by The Net Ninja',pid:'PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR',yid:''},
          {title:'Git Tutorial by jckelley2',pid:'PLwrxhoDq6Kivqmc3jbqZhQnTuuv8odAdy',yid:''},
          {title:'Git & GitHub - Free Code Camp by Siwen Zhang',pid:'PLGvfHSgImk4aTlKBUPeC8Eh42LVDcSv9s',yid:''},
          {title:'GIT Tutorials for beginners by Ameer Basha',pid:'PLZVSOFwGx4zBAtge4Ub2Uq2rZ_O5Cs8qK',yid:''},
          {title:'GIT and GITHUB Tutorial Videos by edureka!',pid:'PL9ooVrP1hQOGwtQOt8ZBlVjFlI-9Vr5hx',yid:''},
        ]},
        {catname:'application-development',subcatname:'tutorial-for-react-native',playlistid:[
          {title:'Build React Native Project with Native Code v0.49 by Nguyen Duc Hoang',pid:'PLdWwWjr_AbFiAfDaSE3cpQw7276MLhBsG'},
          {title:'React Native Tutorials by Nu Apps Tutorials',pid:'PLCQZxK8e2sqr6oLCRGZlJylNwhJI7VjRQ'},
          {title:'React Native Tutorials For Beginners by Dany',pid:'PLpuT9U7wiOsR9eMez-3T--3iWGDhxZYIF'},
          {title:'React Native Crash Course by Traversy Media',pid:'',yid:'mkualZPRZCs'},
          {title:'React Native Tutorial With a Sample Github App by Mohamad Mohebifar',pid:'PL0qYVbKK16x2drgjXgzzMQrwc70ygRcEn',yid:''},
          {title:'React native tutorial - React native login, signup and navigation example by Faadu Js',pid:'',yid:'_K41vd_W2qE'},
          {title:'React Native Tutorial (Only UI) - Building Youtube UI in 30 Mins by Coding is Love',pid:'',yid:'LdKtugH-sb8'},
          {title:'Getting Started with React Native and Redux by Jon Lebensold',pid:'PLk083BmAphjtGWyZUuo1BiCS_ZAgps6j5',yid:''},
          {title:'React Native - Beginner by Brandon Brown',pid:'PL7D-0n1z1EbgAoLu1n5wjcMLDDAQqXOMw',yid:''},
          {title:'Project based React Native tutorials by Fullstack Development',pid:'PLl6eqve20a7f2lJEw5lHUpqxG9dpOvVPp',yid:''},
          {title:'React Native Tutorial from scratch to professional Developer by EasyCode - Sardar',pid:'PLWrTy7mdWLT0cwRsyIlREB_yc_UllmCoz',yid:''},
          {title:'React Native Car/Taxi Booking App by emancode',pid:'PL6hffAJvRwYJTf6kuxrK4PJzjoxTqau9V',yid:''},
          {title:'React Native Basics:Getting Started with react-native-router-flux by Spencer Carli',pid:'PLgpnWB3j6BnJFGc7g1NyDHnAy2_ORQ_fK',yid:''},
          {title:'React Native tutorial v0.45 by Nguyen Duc Hoang',pid:'PLWBrqglnjNl1LwsWW_CTzA_dSgyE3x5TQ',yid:''},
          {title:'Tutorial on React-Native : Building Video/Voice Call App by Sunim Acharya',pid:'PLM5nyCrpk9vaYCZRjGg1TEU4cQZMYZqvy',yid:''},
          {title:'Build a Meetups App With React-Native and Node.JS by EQuimper',pid:'PLzQWIQOqeUSNX_ZDqt9L3TMSwFa9GbIwp',yid:''},
          {title:'React-Native by ToolsforApps.com',pid:'PLrHpDKNHozG6EKVeWyrwqL3kwZn7-XLCB',yid:''},
        ]},
        {catname:'application-development',subcatname:'tutorial-for-android',playlistid:[
          {title:'Android App Development for Beginners Playlist by thenewboston',pid:'PL6gx4Cwl9DGBsvRxJJOzG4r4k_zLKrnxl',yid:''},
          {title:'Android Development Virgin Course by CodeBabes',pid:'PL7AVKPxfsCp7lEWVKmNm_96XZeRc35OR5',yid:''},
          {title:'Android Development for Beginners | Udacity by Udacity',pid:'PLAwxTw4SYaPmXoZF20ky_Amke3Mu4lZEo',yid:''},
          {title:'Become an Android Developer from Scratch by Free Education For All',pid:'PLnjNR4-S-EVrWQUWCG-Bcwu-M4XVn0QOS',yid:''},
          {title:'Developing Android Apps by Udacity',pid:'PLAwxTw4SYaPnMwH5-FNkErnnq_aSy706S',yid:''},
          {title:'Java Fundamentals for Android by London App Brewery',pid:'PLSzsOkUDsvdthwb-qGOrPl5wR73yqpdu3',yid:''},
          {title:'Android Material Design Tutorial by PRABEESH R K',pid:'PLshdtb5UWjSoLy2LPP1FsHi1hwoAS4SBi',yid:''},
          {title:'Android Studio 2D Game Programming Tutorial by paymon wang-lotfi',pid:'PLWweaDaGRHjvQlpLV0yZDmRKVBdy6rSlg',yid:''},
          {title:'Android JSON Parsing by Wingnity',pid:'PLsoBxH455yoZZeeza9TiG8I9dGP0zz5o9',yid:''},
          {title:'Firebase on Android - Tutorials by Firebase',pid:'PLl-K7zZEsYLmxfvI4Ds2Atko79iVvxlaq',yid:''},
          {title:'Services in Android by Codetutor',pid:'PLfuE3hOAeWhbm-_mNEbVdQuaac7Rd4TgZ',yid:''},
          {title:'How to Make Android Apps by Derek Banas',pid:'PLGLfVvz_LVvSPjWpLPFEfOCbezi6vATIh',yid:''},
          {title:'Android App Development with Parse and Android Studio IDE by Sherif Mohamed',pid:'PL1LLSQc9OcKkerhxJd1q34ZYt4HfjvWrk',yid:''},
          {title:'Android App Development Tutorial for beginners by Tutorials Point',pid:'PLZtAR4QHq5WAVMaQ34O0emIaYFMzy76z1',yid:''},
          {title:'Android Bluetooth tuturial by Yuval Joseph',pid:'PLQrQKDQmvSfxEmYOugNkYLSEs5oLxs5u6',yid:''},
          {title:'Making Order Food Application (Android + Firebase) by EDMT Dev',pid:'PLaoF-xhnnrRW4lXuIhNLhgVuYkIlF852V',yid:''},
          {title:'Android RecyclerView Tutorial by Simplified Coding',pid:'PLk7v1Z2rk4hjHrGKo9GqOtLs1e2bglHHA',yid:''},
          {title:'Android Security and Secure Coding Techniques by Jules White',pid:'PLyUlngzGzkzsXHItNSx_KPyC62hsrAgrK',yid:''},
          {title:'Android Studio Tutorial - Firebase App - Simple Instagram App Complete Course Free by Android Firebase Tutorials',pid:'PLK6pXSzzP1uYoyOKzTVSk3xgXq6wHQCnI',yid:''},
          {title:'KOTLIN FULL COURSE TUTORIAL FOR BEGINNERS ANDROID STUDIO by Abhishek Panwar',pid:'PLbfTjwmfwhuhPRMOUT3RMC-naLWK6RJ62',yid:''},
          {title:'Android Tutorial for Beginners , Android Application Development , Android Tutorials by Smartherd',pid:'PLlxmoA0rQ-LyCGSSD_nuPAmXDSR_FU0RR',yid:''},
          {title:'Gradle for Android and Java | Udacity by Udacity',pid:'PLAwxTw4SYaPk2JP5TFPx7g63PCkyBqjZn',yid:''},
          {title:'Unity Android Game Development Tutorial For Beginners : Start to Publish by Charger Games',pid:'PLytjVIyAOStrTBXBuuMR0HjXGIk4DtJrv',yid:''},
          {title:'Android Firebase Tutorials - Full Backend Course by TVAC Studio',pid:'PLGCjwl1RrtcSi2oV5caEVScjkM6r3HO9t',yid:''},
          {title:'Android Design Patterns by Ahmed Mazen',pid:'PLPHVVwNrDGdYyL9tQ7gHJMTMDyjgXtsrI',yid:''},
          {title:'Android Tutorial for Beginners 2017: From Nobody to Guru by MeRezMo',pid:'PLoSj8uFDJLMFawOT2jvc1HLSgoA4iJxpo',yid:''},
        ]},
        {catname:'core-languages',subcatname:'tutorial-for-java',playlistid:[
          {title:'Introduction to Java Programming by Udacity',pid:'PLAwxTw4SYaPnbYmh191-xYp3Y3-cpyAV3',yid:''},
          {title:'Java Tutorial For Beginners (Step by Step tutorial) by ProgrammingKnowledge',pid:'PLS1QulWo1RIbfTjQvTdj8Y6yyq4R7g-Al',yid:''},
          {title:'Java Tutorial For Beginners by Telusko Learnings',pid:'PLsyeobzWxl7oZ-fxDYkOToURHhMuWD1BK',yid:''},
          {title:'Java (Beginner) Programming Tutorials by thenewboston',pid:'PLFE2CE09D83EE3E28',yid:''},
          {title:'Java Video Tutorial by Derek Banas',pid:'PLE7E8B7F4856C9B19',yid:''},
          {title:'Java by Saurabh Shukla Sir Java by Saurabh Shukla Sir',pid:'PLX9Zi6XTqOKQ7TdRz0QynGIKuMV9Q2H8E',yid:''},
          {title:'Java Tutorial for Beginners by EJ Media',pid:'PLr6-GrHUlVf9SIx5cDhoEMknias5Xyv67',yid:''},
          {title:'Collections Framework in Java by Durga Software Solutions',pid:'PLd3UqWTnYXOkVR3OR9UZGyEt9RFUbaTMZ',yid:''},
        ]},
        {catname:'core-languages',subcatname:'tutorial-for-c-and-c++',playlistid:[
          {title:'C Programming Tutorials by thenewboston',pid:'PL6gx4Cwl9DGAKIXv8Yr6nhGJ9Vlcjyymq',yid:''},
          {title:'Introduction to Programming through C by mycodeschool',pid:'PL2_aWCzGMAwLSqGsERZGXGkA5AfMhcknE',yid:''},
          {title:'C Programming Tutorial For Beginners With Examples by Tutorial Point',pid:'PLIvuHUoF27xN94UZIDJycD3CWs7of_hXs',yid:''},
          {title:'C Programming Tutorials by iTzAdam5X',pid:'PL0170B6E7DD6D8810',yid:''},
          {title:'C programming concepts by BBarters',pid:'PLRnuLZZ5D0KySx7rBi6iWnPaf-McGBcoC',yid:''},
          {title:'Learning C Programming on Raspberry Pi by SpazzTech',pid:'PL-6WIzdGN7xQdIvyCtQUhmflKNsidxfwX',yid:''},
          {title:'C Programming by Ankpro Training',pid:'PLUtTaqnx2RJLSUZgv0zp0aNWy9e1cbKd9',yid:''},
          {title:'Bucky C programming Tutorials by lewisonwilliams',pid:'PLB0494FCC284DA705',yid:''},
          {title:'C++ Programming Video Tutorials For Beginners [ Complete Series ] by LearningLad',pid:'PLfVsf4Bjg79Cu5MYkyJ-u4SyQmMhFeC1C',yid:''},
          {title:'C++ Programming Tutorials Playlist by thenewboston',pid:'PLAE85DE8440AA6B83',yid:''},
          {title:'C++ Programming in Hindi by Geeky Shows',pid:'PLbGui_ZYuhijXuOfBSdQgK296Y7wUDWLn',yid:''},
          {title:'C++ Tutorials in Animated Way by Learn Programming In Animated Way',pid:'PLrKBFf87Cy9BVBAZ1Y-6Olzz0KTU4Qw6L',yid:''},
          {title:'C++ Object Oriented Programming Video Tutorials For Beginners [Completed Series] by LearningLad',pid:'PLfVsf4Bjg79DLA5K3GLbIwf3baNVFO2Lq',yid:''},
          {title:'Learn C++ as your first Programming Language! by Course Grinder',pid:'PLltsQb0J9n8s0f25Gu4MFvncXHWL8ui2Y',yid:''},
        ]},
      ] ,
        myselection:null,
        videoid:null,
        myvideo:[],
        controllid:0,
        screen:0,
  };
}

componentDidUpdate() {
   componentHandler.upgradeDom();
}

  componentWillMount() {
    this.props.changeTabBarStatus(1)
      let myvideo = this.state.videos.map((video)=>{
      if (this.props.match.params.catid === video.catname &&  this.props.match.params.subcatid === video.subcatname ) {
          this.setState({myselection:video})
      }
    })
  }
  showSnackBar(msg){
  var snackbarContainer = document.querySelector('#demo-toast-example');
  var data = {message: msg};
  snackbarContainer.MaterialSnackbar.showSnackbar(data);
  }


  render() {
    if (this.state.myselection == null ) {
      return <div className="mdl-spinner mdl-js-spinner is-active" style={{width:100,height:100,position:'absolute',top:'40%',left:'40%'}}></div>
    }else {
      if (this.state.screen == 0) {
        return (
          <div>
            <div className="mainclasss">
            <div style={{display:'flex',flexFlow:'column',justifyContent:'center',alignItems:'center'}}>
            <div style={{display:'flex',flex:1,justifyContent:'space-between',alignItems:'center'}}>
            <i className="material-icons arrow-back" onClick={()=>{this.props.history.goBack()}}>arrow_back</i>
            <div style={{fontSize:20,cursor:'pointer'}}  onClick={()=>{this.props.history.goBack()}}>Back</div>
            </div>
            <ul className="demo-list-two mdl-list mylist" >
            {
              this.state.myselection.playlistid.map((vid,i)=>{
                return(
                  <li className={`mdl-list__item mdl-list__item--two-line individuallist  ${this.state.videoid === vid.yvid ? "individualselectedlist" : "notselectedlist"}`} key={i}
                  onClick={()=>{this.setState({screen:1,controllid:i})}} >
                    <span className="mdl-list__item-primary-content" >
                      <i className={`material-icons mdl-list__item-avatar  red-text`}
                       onClick={()=>{this.setState({screen:1,controllid:i})}} >play_circle_filled</i>
                      <span className="vidtitle">{vid.title}</span>
                    </span>
                    <span className="mdl-list__item-secondary-content">
                      <span className="mdl-list__item-secondary-info">Actor</span>
                      <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
                    </span>
                  </li>
                )
              })
            }
            </ul>
            </div>
            </div>
          </div>
      )
      }else {
        return (
          <div>
            <div className="mainclasss" >
                <div style={{display:'flex',flex:1,justifyContent:'space-between',alignItems:'center'}}>
                <i className="material-icons arrow-back" onClick={()=>{this.setState({screen:0})}}>arrow_back</i>
                <div style={{fontSize:20}}>{this.state.myselection.playlistid[this.state.controllid].title}</div>
                <div style={{fontSize:20}}></div>
                </div>
                <i className="material-icons arrow-left"  onClick={()=>{
                  if (this.state.controllid > 0) {
                    this.setState({controllid:this.state.controllid - 1})
                  }else {
                    this.showSnackBar("Bs kar Bhai ")
                  }
                }}>keyboard_arrow_left</i>

                <i className="material-icons arrow-right" onClick={()=>{
                  if (this.state.controllid < this.state.myselection.playlistid.length -1) {
                    this.setState({controllid:this.state.controllid + 1})
                  }else {
                    this.showSnackBar("Bs Itna hi hai ")

                  }
                }} >keyboard_arrow_right</i>

                <div className="maincontaine" >
                {
                  this.state.myselection.playlistid[this.state.controllid].pid === '' ?
                  <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${this.state.myselection.playlistid[this.state.controllid].yid}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                  :
                  <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/videoseries?list=${this.state.myselection.playlistid[this.state.controllid].pid}&showinfo=1&rel=0&modestbranding=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                }
              </div>
            </div>
          </div>
        );
      }
    }
  }

}

export default withRouter(Play);
