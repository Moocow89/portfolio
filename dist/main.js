webpackJsonp([0],[,function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function l(){function t(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.contains("is-active")===!0?(this.classList.remove("is-active"),e.slideUp(300)):(this.classList.add("is-active"),e.slideDown(300))})}var a=(0,r.default)(".nav-menu-button");console.log(a);for(var e=(0,r.default)(".nav-list"),i=(0,r.default)(".nav-link-phone"),l=(0,r.default)(".navigation-phone"),c=a.length-1;c>=0;c--){var n=a[c];t(n)}i.click(function(){e.slideUp(0),a[0].classList.remove("is-active")}),(0,r.default)(window).on("wheel",function(t){var a=t.originalEvent.deltaY;a>0?l.css("position","absolute"):l.css("position","fixed")})}Object.defineProperty(a,"__esModule",{value:!0}),a.default=l;var c=e(0),r=i(c)},function(t,a){},function(t,a,e){t.exports=e.p+"images/archerandme.jpg"},function(t,a,e){t.exports=e.p+"images/codepen-icon.png"},function(t,a,e){t.exports=e.p+"images/github-icon.png"},function(t,a,e){t.exports=e.p+"images/calculator.jpg"},function(t,a,e){t.exports=e.p+"images/paypal.jpg"},function(t,a,e){t.exports=e.p+"images/pomodoro-clock.jpg"},function(t,a,e){t.exports=e.p+"images/weather-app.jpg"},function(t,a,e){t.exports=e.p+"images/wikipedia-viewer.jpg"},function(t,a,e){t.exports=e.p+"images/linkedin-icon.png"},function(t,a,e){t.exports=e.p+"images/milkyway.jpg"},function(t,a,e){t.exports=e.p+"images/twitter-icon.png"},function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e(2);var l=e(3),c=i(l),r=e(5),n=i(r),o=e(11),u=i(o),s=e(4),d=i(s),f=e(13),p=i(f),g=e(8),m=i(g),v=e(10),w=i(v),k=e(6),h=i(k),x=e(9),b=i(x),j=e(7),y=i(j),_=e(12),L=i(_),M=e(0),D=i(M),E=e(1),U=i(E);console.log("I loaded!"),(0,D.default)("#content-title").css("background","url("+L.default+") no-repeat fixed center");var I=(0,D.default)(".about-img");I.attr("src",c.default),(0,D.default)(".small-img-clock").attr("src",m.default),(0,D.default)(".large-img-clock").attr("src",m.default),(0,D.default)(".pomodoro-clock").attr("src",m.default),(0,D.default)(".small-img-wikipedia").attr("src",w.default),(0,D.default)(".large-img-wikipedia").attr("src",w.default),(0,D.default)(".wikipedia-viewer").attr("src",w.default),(0,D.default)(".small-img-calculator").attr("src",h.default),(0,D.default)(".large-img-calculator").attr("src",h.default),(0,D.default)(".calculator").attr("src",h.default),(0,D.default)(".small-img-weather").attr("src",b.default),(0,D.default)(".large-img-weather").attr("src",b.default),(0,D.default)(".weather-app").attr("src",b.default),(0,D.default)(".small-img-paypal").attr("src",y.default),(0,D.default)(".large-img-paypal").attr("src",y.default),(0,D.default)(".paypal").attr("src",y.default);var J=(0,D.default)("#contact-icon-github img");J.attr("src",n.default);var O=(0,D.default)("#contact-icon-linkedin img");O.attr("src",u.default);var P=(0,D.default)("#contact-icon-codepen img");P.attr("src",d.default);var Y=(0,D.default)("#contact-icon-twitter img");Y.attr("src",p.default),(0,U.default)()}],[14]);