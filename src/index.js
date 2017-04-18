console.log("I loaded!");
import '../scss/styles.scss';
import aboutImg from '../images/archerandme.jpg';
import gitIcon from '../images/github-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import codepenIcon from '../images/codepen-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import clockImg from '../images/large-portfolio-imgs/pomodoro-clock.jpg';
import wikipediaImg from '../images/large-portfolio-imgs/wikipedia-viewer.jpg';
import calcImg from '../images/large-portfolio-imgs/calculator.jpg';
import weatherImg from '../images/large-portfolio-imgs/weather-app.jpg';
import paypalImg from '../images/large-portfolio-imgs/paypal.jpg';
import starsImg from '../images/milkyway.jpg';
import $ from 'jquery';
import toggleNav from './nav.js';


//header background img 
$('#content-title').css('background', 'url(' + starsImg + ') no-repeat fixed center');

//about section image
const img = $('.about-img');
img.attr('src', aboutImg);

//project images

//pomodoro clock img
$('.small-img-clock').attr('src', clockImg);
$('.large-img-clock').attr('src', clockImg);
$('.pomodoro-clock').attr('src', clockImg);

//wikipedia viewer img
$('.small-img-wikipedia').attr('src', wikipediaImg);
$('.large-img-wikipedia').attr('src', wikipediaImg);
$('.wikipedia-viewer').attr('src', wikipediaImg);

//calculator img
$('.small-img-calculator').attr('src', calcImg);
$('.large-img-calculator').attr('src', calcImg);
$('.calculator').attr('src', calcImg);

//weather app img
$('.small-img-weather').attr('src', weatherImg);
$('.large-img-weather').attr('src', weatherImg);
$('.weather-app').attr('src', weatherImg);

//paypal navigation img
$('.small-img-paypal').attr('src', paypalImg);
$('.large-img-paypal').attr('src', paypalImg);
$('.paypal').attr('src', paypalImg);

//social media icons
const githubIcon = $('#contact-icon-github img');
githubIcon.attr('src', gitIcon);

const linkedIcon = $('#contact-icon-linkedin img');
linkedIcon.attr('src', linkedinIcon);

const codeIcon = $('#contact-icon-codepen img');
codeIcon.attr('src', codepenIcon);

const twitIcon = $('#contact-icon-twitter img');
twitIcon.attr('src', twitterIcon);

toggleNav();