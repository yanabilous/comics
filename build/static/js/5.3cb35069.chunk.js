/*! For license information please see 5.3cb35069.chunk.js.LICENSE.txt */
(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{19:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",o=r(0);e.a=function(){return Object(o.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},20:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(22);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=x(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var m={};s(m,c,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==e&&r.call(y,c)&&(m=y);var b=v.prototype=p.prototype=Object.create(m);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(i,c,a,u){var s=f(t[i],t,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==Object(n.a)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,u)}))}u(s.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=v,s(b,"constructor",v),s(v,"constructor",d),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},j(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},j(b),s(b,u,"Generator"),s(b,c,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}},21:function(t,e,r){"use strict";function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(s){return void r(s)}a.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))}}r.d(e,"a",(function(){return o}))},22:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,"a",(function(){return n}))},23:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(20),o=r(21),i=r(4),c=r(1),a=function(){var t=Object(c.useState)(!1),e=Object(i.a)(t,2),r=e[0],a=e[1],u=Object(c.useState)(null),s=Object(i.a)(u,2),l=s[0],f=s[1],h=Object(c.useCallback)(function(){var t=Object(o.a)(Object(n.a)().mark((function t(e){var r,o,i,c,u,s=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:"GET",o=s.length>2&&void 0!==s[2]?s[2]:null,i=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"aplication/json"},a(!0),t.prev=4,t.next=7,fetch(e,{method:r,body:o,headers:i});case 7:if((c=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(c.status));case 10:return t.next=12,c.json();case 12:return u=t.sent,a(!1),t.abrupt("return",u);case 17:throw t.prev=17,t.t0=t.catch(4),a(!1),f(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:r,request:h,error:l,clearError:Object(c.useCallback)((function(){return f(null)}),[])}}},24:function(t,e,r){"use strict";var n=r(20),o=r(21),i=r(23);e.a=function(){var t=Object(i.a)(),e=t.loading,r=t.request,c=t.error,a=t.clearError,u="https://gateway.marvel.com:443/v1/public/",s="apikey=26bf773b3288c2d35df092385ce05b83",l=function(){var t=Object(o.a)(Object(n.a)().mark((function t(){var e,o,i=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:522,t.next=3,r("".concat(u,"comics?limit=9&offset=").concat(e,"&").concat(s));case 3:return o=t.sent,t.abrupt("return",o.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(o.a)(Object(n.a)().mark((function t(e){var o;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(u,"comics/").concat(e,"?").concat(s," "));case 2:return o=t.sent,t.abrupt("return",h(o.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:t.textObjects.language||"en-us",price:t.prices.price?"".concat(t.prices.price,"$"):"not available"}};return{loading:e,error:c,getAllComics:l,getComic:f,clearError:a}}},25:function(t,e,r){},27:function(t,e,r){"use strict";r(25);var n=r.p+"static/media/Avengers.4065c8f9.png",o=r.p+"static/media/Avengers_logo.9eaf2193.png",i=r(0);e.a=function(){return Object(i.jsxs)("div",{className:"app__banner",children:[Object(i.jsx)("img",{src:n,alt:"Avengers"}),Object(i.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(i.jsx)("br",{}),"Stay tuned!"]}),Object(i.jsx)("img",{src:o,alt:"Avengers logo"})]})}},34:function(t,e,r){},36:function(t,e,r){"use strict";r.r(e);var n=r(4),o=r(2),i=r(5),c=r(1),a=r(19),u=r(9),s=r(24),l=(r(34),r(27)),f=r(0),h=function(t){var e=t.comic,r=e.title,n=e.description,o=e.pageCount,c=e.thumbnail,a=e.language,u=e.price;return Object(f.jsxs)("div",{className:"single-comic",children:[Object(f.jsx)("img",{src:c,alt:r,className:"single-comic__img"}),Object(f.jsxs)("div",{className:"single-comic__info",children:[Object(f.jsxs)("h2",{className:"single-comic__name",children:[r," "]}),Object(f.jsx)("p",{className:"single-comic__descr",children:n}),Object(f.jsx)("p",{className:"single-comic__descr",children:o}),Object(f.jsxs)("p",{className:"single-comic__descr",children:["Language: ",a]}),Object(f.jsx)("div",{className:"single-comic__price",children:u})]}),Object(f.jsx)(i.b,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})};e.default=function(){var t=Object(o.g)().comicId,e=Object(s.a)(),r=e.loading,i=e.error,p=e.getComic,d=e.clearError,v=Object(c.useState)(null),m=Object(n.a)(v,2),g=m[0],y=m[1];Object(c.useEffect)((function(){b()}),[t]);var b=function(){d(),p(t).then(j)},j=function(t){y(t)},w=i?Object(f.jsx)(a.a,{}):null,x=r?Object(f.jsx)(u.a,{}):null,O=r||i||!g?null:Object(f.jsx)(h,{comic:g});return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(l.a,{}),w,x,O]})}}}]);
//# sourceMappingURL=5.3cb35069.chunk.js.map