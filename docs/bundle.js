!function(t){var n={};function e(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)e.d(o,a,function(n){return t[n]}.bind(null,a));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=10)}([function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var a=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[e].concat(i).concat([a]).join("\n")}var r,c,u;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,o){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(o)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);o&&a[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),n.push(u))}},n}},function(t,n,e){"use strict";var o,a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),r=[];function c(t){for(var n=-1,e=0;e<r.length;e++)if(r[e].identifier===t){n=e;break}return n}function u(t,n){for(var e={},o=[],a=0;a<t.length;a++){var i=t[a],u=n.base?i[0]+n.base:i[0],s=e[u]||0,p="".concat(u," ").concat(s);e[u]=s+1;var d=c(p),l={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(r[d].references++,r[d].updater(l)):r.push({identifier:p,updater:m(l,n),references:1}),o.push(p)}return o}function s(t){var n=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var a=e.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(t){n.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(n);else{var r=i(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var p,d=(p=[],function(t,n){return p[t]=n,p.filter(Boolean).join("\n")});function l(t,n,e,o){var a=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=d(n,a);else{var i=document.createTextNode(a),r=t.childNodes;r[n]&&t.removeChild(r[n]),r.length?t.insertBefore(i,r[n]):t.appendChild(i)}}function f(t,n,e){var o=e.css,a=e.media,i=e.sourceMap;if(a?t.setAttribute("media",a):t.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var v=null,h=0;function m(t,n){var e,o,a;if(n.singleton){var i=h++;e=v||(v=s(n)),o=l.bind(null,e,i,!1),a=l.bind(null,e,i,!0)}else e=s(n),o=f.bind(null,e,n),a=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else a()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=a());var e=u(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<e.length;o++){var a=c(e[o]);r[a].references--}for(var i=u(t,n),s=0;s<e.length;s++){var p=c(e[s]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}e=i}}}},function(t,n){t.exports='<div class="bg-modal"> <div class="content-modal"> <div class="close-modal">+</div> <div class="main-modal"></div> </div> </div> '},function(t,n,e){var o='<div class="account-popup relative" data-account-state=""> <div class="cart__loader-container" data-account-loader=""> <div class="lds-dual-ring"></div> </div> <div class="account-popup__container" data-account-container=""> <div class="account-popup__container"> <img class="account-popup__image" src="'+e(8)(e(9))+'"> <div class="account-popup__title z-h4 heading"> Connexion / Inscription. </div> <div class="account-popup__subtitle text t-4"> <p>Renseignez&nbsp;votre adresse email&nbsp;pour&nbsp;continuer.</p> </div> <div class="account-popup__error" data-account-error=""></div> <div class="account-popup__inputs-container"> <input class="input-text" data-email-input="" placeholder="Votre email" type="email"> </div> <div class="account-popup__button"> <button class="button button--full button--secondary button--disabled" data-email-button="" disabled="">Valider</button> </div> </div> </div> </div> ';t.exports=o},function(t,n,e){var o=e(1),a=e(5);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);t.exports=a.locals||{}},function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o)()(!1);a.push([t.i,".bg-modal {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    position: absolute;\n    top: 0;\n    display: none;\n    justify-content: center;\n    align-items: center;\n    z-index: 100;\n}\n\n.content-modal {\n    width: 500px;\n    height: 300px;\n    background-color: white;\n    border-radius: 4px;\n    position: relative;\n}\n\n.close-modal {\n    position: absolute;\n    top: 0;\n    right: 14px;\n    font-size: 40px;\n    transform: rotate(45deg);\n    cursor: pointer;\n}\n",""]),n.default=a},function(t,n,e){var o=e(1),a=e(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var i={insert:"head",singleton:!1};o(a,i);t.exports=a.locals||{}},function(t,n,e){"use strict";e.r(n);var o=e(0),a=e.n(o)()(!1);a.push([t.i,".quickview{position:fixed;padding:10px;height:100vh;height:calc(var(--vh, 1vh) * 100);width:100vw;left:0;top:0;background:rgba(0,0,0,.5);z-index:20;z-index:100;-webkit-box-shadow:0px 0px 0px 9999px rgba(0,0,0,.5);box-shadow:0px 0px 0px 9999px rgba(0,0,0,.5);overflow:auto;display:flex;align-items:center;justify-content:center}.account-popup{background-color:#fff;text-align:center;padding:22px;padding-bottom:32px;max-width:530px}.account-popup__error{display:none;margin:auto;width:100%;line-height:22px;padding:7px 0;border-radius:3px;margin-bottom:5px}.account-popup__final-message{display:none}.account-popup--final-state .account-popup__initial-message{display:none}.account-popup--final-state .account-popup__final-message{display:block}.account-popup__close{float:right}.account-popup__close svg{width:15px;height:15px}.account-popup__image{width:180px}.account-popup__checkbox{margin-right:10px}.account-popup__mandatory-container{margin-top:10px}.account-popup__checkbox-container{display:flex;align-items:center;margin-top:14px}.account-popup__subtitle{margin:18px 0}.account-popup__inputs-container{margin-bottom:10px}.account-popup__inputs-container .input-text{border-bottom:1px solid;padding-left:2px;font-size:16px;margin-bottom:13px}.account-popup__inputs-container .input-text::placeholder{text-transform:uppercase}",""]),n.default=a},function(t,n,e){"use strict";t.exports=function(t,n){return n||(n={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(n.hash&&(t+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},function(t,n){t.exports="https://devw.github.io/script-tag/331390584cb4fcf53d8ee930e76aaf05.png"},function(t,n,e){"use strict";e.r(n);e(4);var o=e(2),a=e.n(o);e(6);var i=e(3),r=e.n(i);const c=t=>{t.preventDefault(),document.querySelector(".bg-modal").style.display="flex"};var u;globalThis.MyScript={graphql:(u="{\n    shop {\n      products(first: 5) {\n        edges {\n          node {\n            id\n            handle\n          }\n        }\n        pageInfo {\n          hasNextPage\n        }\n      }\n    }\n}",t=>{fetch("/admin/api/2020-07/graphql.json",{method:"POST",headers:{"Content-Type":"application/json","X-Shopify-Access-Token":t},body:JSON.stringify({query:u})}).then(t=>t.json()).then(t=>console.log(t.data)).catch(t=>console.error(JSON.stringify(t)))})},document.body.appendChild((()=>{const t=document.createElement("div");return t.innerHTML=a.a,t})()),document.querySelector(".main-modal").appendChild((()=>{const t=document.createElement("div");return t.innerHTML=r.a,t})()),document.querySelector(".site-header__account").addEventListener("click",c),document.querySelector(".close-modal").addEventListener("click",()=>{document.querySelector(".bg-modal").style.display="none"})}]);