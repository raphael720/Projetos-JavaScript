(()=>{"use strict";var r,n,e,o,t,a,i,c,s,u,l,A,d,f={122:(r,n,e)=>{e.d(n,{Z:()=>c});var o=e(15),t=e.n(o),a=e(645),i=e.n(a)()(t());i.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]),i.push([r.id,":root {\r\n    --primary-color: rgb(13, 106, 134);\r\n    --primary-color-dark: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    max-width: 40rem;\r\n    margin: 3.125rem auto;\r\n    background: #FFF;\r\n    padding: 1.25rem;\r\n    border-radius: 8px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0.625rem;\r\n}\r\n\r\nform input {\r\n    font-size: 1.5rem;\r\n    height: 3.125rem;\r\n    padding: 0 1.25rem;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 1.125rem;\r\n    font-weight: 700;\r\n    height: 3.125rem;\r\n    cursor: pointer;\r\n    margin-top: 1.875rem;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-dark);\r\n}\r\n\r\n.resultado h1 {\r\n    margin-top: 0;\r\n    color: var(--primary-color);\r\n}\r\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,kCAAkC;IAClC,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,gBAAgB;IAChB,qBAAqB;IACrB,gBAAgB;IAChB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,2BAA2B;AAC/B",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\r\n\r\n:root {\r\n    --primary-color: rgb(13, 106, 134);\r\n    --primary-color-dark: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    max-width: 40rem;\r\n    margin: 3.125rem auto;\r\n    background: #FFF;\r\n    padding: 1.25rem;\r\n    border-radius: 8px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0.625rem;\r\n}\r\n\r\nform input {\r\n    font-size: 1.5rem;\r\n    height: 3.125rem;\r\n    padding: 0 1.25rem;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 1.125rem;\r\n    font-weight: 700;\r\n    height: 3.125rem;\r\n    cursor: pointer;\r\n    margin-top: 1.875rem;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-dark);\r\n}\r\n\r\n.resultado h1 {\r\n    margin-top: 0;\r\n    color: var(--primary-color);\r\n}\r\n"],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e=r(n);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(r,e,o){"string"==typeof r&&(r=[[null,r,""]]);var t={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(t[i]=!0)}for(var c=0;c<r.length;c++){var s=[].concat(r[c]);o&&t[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),n.push(s))}},n}},15:r=>{function n(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=r[e];return o}r.exports=function(r){var e,o,t=(o=4,function(r){if(Array.isArray(r))return r}(e=r)||function(r,n){var e=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=e){var o,t,a=[],i=!0,c=!1;try{for(e=e.call(r);!(i=(o=e.next()).done)&&(a.push(o.value),!n||a.length!==n);i=!0);}catch(r){c=!0,t=r}finally{try{i||null==e.return||e.return()}finally{if(c)throw t}}return a}}(e,o)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var o=Object.prototype.toString.call(r).slice(8,-1);return"Object"===o&&r.constructor&&(o=r.constructor.name),"Map"===o||"Set"===o?Array.from(r):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(r,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=t[1],i=t[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),u="/*# ".concat(s," */"),l=i.sources.map((function(r){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(r," */")}));return[a].concat(l).concat([u]).join("\n")}return[a].join("\n")}},379:(r,n,e)=>{var o,t=function(){var r={};return function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}r[n]=e}return r[n]}}(),a=[];function i(r){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===r){n=e;break}return n}function c(r,n){for(var e={},o=[],t=0;t<r.length;t++){var c=r[t],s=n.base?c[0]+n.base:c[0],u=e[s]||0,l="".concat(s," ").concat(u);e[s]=u+1;var A=i(l),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==A?(a[A].references++,a[A].updater(d)):a.push({identifier:l,updater:p(d,n),references:1}),o.push(l)}return o}function s(r){var n=document.createElement("style"),o=r.attributes||{};if(void 0===o.nonce){var a=e.nc;a&&(o.nonce=a)}if(Object.keys(o).forEach((function(r){n.setAttribute(r,o[r])})),"function"==typeof r.insert)r.insert(n);else{var i=t(r.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var u,l=(u=[],function(r,n){return u[r]=n,u.filter(Boolean).join("\n")});function A(r,n,e,o){var t=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(r.styleSheet)r.styleSheet.cssText=l(n,t);else{var a=document.createTextNode(t),i=r.childNodes;i[n]&&r.removeChild(i[n]),i.length?r.insertBefore(a,i[n]):r.appendChild(a)}}function d(r,n,e){var o=e.css,t=e.media,a=e.sourceMap;if(t?r.setAttribute("media",t):r.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleSheet)r.styleSheet.cssText=o;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(o))}}var f=null,m=0;function p(r,n){var e,o,t;if(n.singleton){var a=m++;e=f||(f=s(n)),o=A.bind(null,e,a,!1),t=A.bind(null,e,a,!0)}else e=s(n),o=d.bind(null,e,n),t=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)};return o(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;o(r=n)}else t()}}r.exports=function(r,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=c(r=r||[],n);return function(r){if(r=r||[],"[object Array]"===Object.prototype.toString.call(r)){for(var o=0;o<e.length;o++){var t=i(e[o]);a[t].references--}for(var s=c(r,n),u=0;u<e.length;u++){var l=i(e[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=s}}}}},m={};function p(r){var n=m[r];if(void 0!==n)return n.exports;var e=m[r]={id:r,exports:{}};return f[r](e,e.exports,p),e.exports}p.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return p.d(n,{a:n}),n},p.d=(r,n)=>{for(var e in n)p.o(n,e)&&!p.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},p.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=function(r,n){return Math.floor(Math.random()*(n-r)+r)},n=",.;~[]^{}!@#$%*()+=-",e=function(){return n[r(0,n.length)]},o=document.querySelector(".resultado h1"),t=document.querySelector("#caracteres"),a=document.getElementById("maiusculas"),i=document.querySelector("#minusculas"),c=document.querySelector("#numeros"),s=document.querySelector("#simbolos"),u=document.querySelector(".button"),l=p(379),A=p.n(l),d=p(122),A()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,u.addEventListener("click",(function(){o.innerHTML=function(n,o,t,a,i){for(var c=[],s=Number(n),u=0;u<s;u++)o&&c.push(String.fromCharCode(r(65,91))),t&&c.push(String.fromCharCode(r(97,123))),a&&c.push(String.fromCharCode(r(48,58))),i&&c.push(e());return c.join("").slice(0,s)}(t.value,a.checked,i.checked,c.checked,s.checked)||"Nada selecionado"}))})();
//# sourceMappingURL=bundle.js.map