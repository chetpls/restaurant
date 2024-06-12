(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>m});var r=t(601),a=t.n(r),o=t(314),i=t.n(o),c=t(417),s=t.n(c),d=new URL(t(501),t.b),l=new URL(t(301),t.b),p=i()(a());p.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]);var u=s()(d),f=s()(l);p.push([e.id,`* {\n    font-family: "Inria Serif", serif;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-image: url(${u});\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* height: 100vh; Ensure body takes full viewport height */\n    overflow:auto; /* Prevent scrolling */\n}\n\n#content {\n    display: flex;    \n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%; /* Ensure content takes full available height */\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    padding: 10px 50px;\n    color: #660000;\n    font-size: 10px;\n    align-items: center;\n    background: #660000;\n    box-shadow: 3px 3px 5px #66000055;\n    box-sizing: border-box; /* Ensure padding is included in header width */\n}\n\nbutton {\n    background-color: #660000;\n    border: none;\n    color: #000;\n    font-size: 32px;\n}\n\nbutton:hover {\n    color: #fff;\n    cursor: pointer;\n}\n\nnav {\n    display: flex;\n    gap: 50px;\n}\n\n.logo {\n    background: url(${f});\n    width: 64px;\n    height: 64px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.title {\n    position: absolute;\n    color: #660000;\n    text-align: left;\n    font-size: 100px;\n    align-items: center;\n    font-weight: bold;\n    top:50%;\n    left:30px;\n}\n\n.sub-info {\n    color: #660000;\n    text-align: left; \n    font-size: 48px;\n    align-items: center;\n    position: absolute;\n    top:65%;\n    left:30px;\n}\n\n.hero {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: center;\n    margin-left: 40px;\n    height: 100%; /* Ensure hero takes full available height */\n}\n\n.blackboard {\n    position: relative;\n    margin-top: 30px;\n    width: 80%;\n    border: #660000 solid 12px;\n    border-top: #800000 solid 12px;  /* A slightly darker shade of red */\n    border-left: #730000 solid 12px; /* Another slightly different shade of red */\n    border-bottom: #520000 solid 12px; /* Even darker shade of red */\n    box-shadow: 0px 0px 6px 5px rgba(58, 18, 13, 0),\n                0px 0px 0px 2px #660000, /* Shadow with the main red color */\n                0px 0px 0px 4px #800000, /* Shadow with the darker red color */\n                3px 4px 8px 5px rgba(0, 0, 0, 0.5);\n    /* background-image: radial-gradient(circle at left 30%, rgba(34, 34, 34, 0.3), rgba(34, 34, 34, 0.3) 80px, rgba(34, 34, 34, 0.5) 100px, rgba(51, 51, 51, 0.5) 160px, rgba(51, 51, 51, 0.5)),\n                      linear-gradient(215deg, transparent, transparent 100px, #222 260px, #222 320px, transparent),\n                      radial-gradient(circle at right, #111, rgba(51, 51, 51, 1)); */\n    background-color: #141414;\n    /* height: 80vh;  */\n}\n\n.container {\n    color:#800000;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding: 50px;\n    gap:50px;\n}\n\n.item-card {\n    display: flex;\n    align-items: center;\n    /* justify-content: center; */\n    flex-direction: column;\n    gap:10px;\n    align-content: start;\n}\n\n\n.item-card img{\n    width:200px;\n    height:200px;\n    border-radius: 100px;\n    border: 5px solid #800000;\n}\n\n.name{\n    font-size:24px;\n    font-weight:900;\n    text-align: center;\n}\n\n.menu-header{\n    color:#800000;\n    text-align: center;\n    font-size: 48px;\n    font-weight: bolder;\n}\n\n\n.contact{\n    display: flex;\n    background-color: #141414;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding:30px;\n    margin-top: 30px;\n    color:#800000;\n    font-size: 48px;\n    border-radius: 30px;\n    width: 30%;\n}\n\nform{\n    display: flex;\n    flex-direction: column;\n    gap:20px;\n    padding:50px;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n}\n\nform input{\n    width: 100%;\n    line-height: 30px;\n    font-size: 16px;\n    border-radius: 10px;\n    border: 3px solid #800000;\n    padding:5px\n\n}\n\nform textarea{\n    width: 100%;\n    height: 250px;\n    font-size: 16px;\n    border-radius: 10px;\n    border: 3px solid #800000;\n    padding:5px\n}\n\n#submit{\n    width:50%;\n    color:#800000;\n    background-color: #141414;\n    font-weight: bold;\n}\n\n#submit:hover{\n    color: #141414;\n    background-color: #800000;\n}\n`,""]);const m=p},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],l=o[d]||0,p="".concat(d," ").concat(l);o[d]=l+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var m=a(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var s=r(e,a),d=0;d<o.length;d++){var l=t(o[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},301:(e,n,t)=>{e.exports=t.p+"bd04c27bb2379678c84c.png"},501:(e,n,t)=>{e.exports=t.p+"98eba7a199f5dcbcb14b.png"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),a=t.n(r),o=t(825),i=t.n(o),c=t(659),s=t.n(c),d=t(56),l=t.n(d),p=t(540),u=t.n(p),f=t(113),m=t.n(f),h=t(208),g={};g.styleTagTransform=m(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u(),a()(h.A,g),h.A&&h.A.locals&&h.A.locals;const b=t.p+"0d94224c81f02dbe7bca.png",x=t.p+"433394c1a55ed78909fd.png",v=t.p+"b99d212596b30a56fcca.png",y=t.p+"446e2f41eaaf17ce73c6.png",w=t.p+"1b9ed041ccd79bafd524.png",E=t.p+"984b3f2133a1692da8f4.png",C=t.p+"ac96bc7a523ff5b4da04.png",A=t.p+"285d8027a9370ac986eb.png",k=t.p+"568b8e462b7993f8d03e.png",L=t.p+"cbfe109abf8a19698547.png",M=document.getElementById("content");function S(){M.innerHTML="",M.appendChild(function(){const e=document.createElement("div");e.classList.add("hero");const n=document.createElement("div");n.classList.add("hero-content");const t=document.createElement("div");t.classList.add("title"),t.textContent=":re coffee";const r=document.createElement("div");return r.classList.add("sub-info"),r.innerHTML="coffee&tea<br>sweets,alcohol",n.appendChild(t),n.appendChild(r),e.appendChild(n),e}())}document.getElementById("home").addEventListener("click",S),document.getElementById("menu").addEventListener("click",(function(){M.innerHTML="",M.appendChild(function(){const e=document.createElement("div");e.classList.add("blackboard");const n=document.createElement("div");n.classList.add("menu-header"),n.textContent="Menu";const t=document.createElement("div");return t.classList.add("container"),[{src:b,alt:"c1",name:"Espresso"},{src:x,alt:"c2",name:"Espresso Cream"},{src:v,alt:"c3",name:"Latte"},{src:y,alt:"c4",name:"Latte Cream"},{src:w,alt:"c5",name:"Caramel Cream"},{src:E,alt:"p1",name:"Chocolate Muffin"},{src:C,alt:"p2",name:"Croissant"},{src:A,alt:"p3",name:"Blueberry Muffin"},{src:k,alt:"p4",name:"Matcha Cake"},{src:L,alt:"p5",name:"Jelly Filled"}].forEach((e=>{const n=document.createElement("div");n.classList.add("item-card");const r=document.createElement("img");r.src=e.src,r.alt=e.alt;const a=document.createElement("div");a.classList.add("name"),a.textContent=e.name,n.appendChild(r),n.appendChild(a),t.appendChild(n)})),e.appendChild(n),e.appendChild(t),e}())})),document.getElementById("contact").addEventListener("click",(function(){M.innerHTML="",M.appendChild(function(){const e=document.createElement("div");e.classList.add("contact");const n=document.createElement("div");n.textContent="Contact Us";const t=document.createElement("form");t.setAttribute("action","");const r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","name"),r.setAttribute("id","name"),r.setAttribute("placeholder","Your Name"),r.setAttribute("required",!0);const a=document.createElement("input");a.setAttribute("type","email"),a.setAttribute("name","email"),a.setAttribute("id","email"),a.setAttribute("placeholder","Your Email");const o=document.createElement("textarea");o.setAttribute("name","message"),o.setAttribute("id","message"),o.setAttribute("placeholder","Your Message");const i=document.createElement("input");return i.setAttribute("type","submit"),i.setAttribute("value","Send Message"),i.setAttribute("id","submit"),t.appendChild(r),t.appendChild(a),t.appendChild(o),t.appendChild(i),e.appendChild(n),e.appendChild(t),e}())})),S()})();