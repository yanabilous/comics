/*! For license information please see 2.bf6d5cf3.chunk.js.LICENSE.txt */
(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[2],{19:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",c=r(0);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},20:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(22);function c(){c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(L){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var c=e&&e.prototype instanceof d?e:d,o=Object.create(c.prototype),a=new N(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(c,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===c)throw o;return E()}for(r.method=c,r.arg=o;;){var a=r.delegate;if(a){var i=x(a,r);if(i){if(i===f)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var f={};function d(){}function b(){}function p(){}var j={};u(j,a,(function(){return this}));var m=Object.getPrototypeOf,v=m&&m(m(k([])));v&&v!==e&&r.call(v,a)&&(j=v);var y=p.prototype=d.prototype=Object.create(j);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function g(t,e){function c(o,a,i,s){var u=h(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==Object(n.a)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){c("next",t,i,s)}),(function(t){c("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return c("throw",t,i,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function n(){return new e((function(e,n){c(t,r,e,n)}))}return o=o?o.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var c=n.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,c=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return c.next=c}}return{next:E}}function E(){return{value:void 0,done:!0}}return b.prototype=p,u(y,"constructor",p),u(p,"constructor",b),b.displayName=u(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},O(g.prototype),u(g.prototype,i,(function(){return this})),t.AsyncIterator=g,t.async=function(e,r,n,c,o){void 0===o&&(o=Promise);var a=new g(l(e,r,n,c),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(y),u(y,s,"Generator"),u(y,a,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var c=this.tryEntries.length-1;c>=0;--c){var o=this.tryEntries[c],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n];if(c.tryLoc<=this.prev&&r.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var o=c;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var c=n.arg;w(r)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}},21:function(t,e,r){"use strict";function n(t,e,r,n,c,o,a){try{var i=t[o](a),s=i.value}catch(u){return void r(u)}i.done?e(s):Promise.resolve(s).then(n,c)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(c,o){var a=t.apply(e,r);function i(t){n(a,c,o,i,s,"next",t)}function s(t){n(a,c,o,i,s,"throw",t)}i(void 0)}))}}r.d(e,"a",(function(){return c}))},22:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}r.d(e,"a",(function(){return n}))},23:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(20),c=r(21),o=r(4),a=r(1),i=function(){var t=Object(a.useState)(!1),e=Object(o.a)(t,2),r=e[0],i=e[1],s=Object(a.useState)(null),u=Object(o.a)(s,2),l=u[0],h=u[1],f=Object(a.useCallback)(function(){var t=Object(c.a)(Object(n.a)().mark((function t(e){var r,c,o,a,s,u=arguments;return Object(n.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",c=u.length>2&&void 0!==u[2]?u[2]:null,o=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"aplication/json"},i(!0),t.prev=4,t.next=7,fetch(e,{method:r,body:c,headers:o});case 7:if((a=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(a.status));case 10:return t.next=12,a.json();case 12:return s=t.sent,i(!1),t.abrupt("return",s);case 17:throw t.prev=17,t.t0=t.catch(4),i(!1),h(t.t0.message),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:r,request:f,error:l,clearError:Object(a.useCallback)((function(){return h(null)}),[])}}},26:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(8);var c=r(6);function o(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},28:function(t,e,r){},29:function(t,e,r){},30:function(t,e,r){"use strict";function n(){console.log("hello world")}function c(){console.log("2022")}r.r(e),r.d(e,"default",(function(){return n})),r.d(e,"secondLog",(function(){return c}))},31:function(t,e,r){},32:function(t,e,r){},37:function(t,e,r){"use strict";r.r(e);var n=r(4),c=r(1),o=r(20),a=r(21),i=r(23),s=function(){var t=Object(i.a)(),e=t.loading,r=t.request,n=t.error,c=t.clearError,s="https://gateway.marvel.com:443/v1/public/",u="apikey=26bf773b3288c2d35df092385ce05b83",l=function(){var t=Object(a.a)(Object(o.a)().mark((function t(){var e,n,c=arguments;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:210,t.next=3,r("".concat(s,"characters?limit=9&offset=").concat(e,"&").concat(u));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(f));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(Object(o.a)().mark((function t(e){var n;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r("".concat(s,"characters/").concat(e,"?").concat(u," "));case 2:return n=t.sent,t.abrupt("return",f(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}};return{loading:e,error:n,getAllCharacters:l,getCharacter:h,clearError:c}},u=(r(28),r.p+"static/media/mjolnir.61f31e18.png"),l=r(9),h=r(19),f=r(0),d=function(t){var e=t.char,r=e.name,n=e.description,c=e.thumbnail,o=e.homepage,a=e.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(i={objectFit:"contain"}),Object(f.jsxs)("div",{className:"randomchar__block",children:[Object(f.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:i}),Object(f.jsxs)("div",{className:"randomchar__info",children:[Object(f.jsx)("p",{className:"randomchar__name",children:r}),Object(f.jsx)("p",{className:"randomchar__descr",children:n}),Object(f.jsxs)("div",{className:"randomchar__btns",children:[Object(f.jsx)("a",{href:o,className:"button button__main",children:Object(f.jsx)("div",{className:"inner",children:"homepage"})}),Object(f.jsx)("a",{href:a,className:"button button__secondary",children:Object(f.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},b=function(t){var e=Object(c.useState)({}),r=Object(n.a)(e,2),o=r[0],a=r[1],i=s(),b=i.loading,p=i.error,j=i.getCharacter,m=i.clearError;Object(c.useEffect)((function(){y();var t=setInterval(y,6e4);return function(){clearInterval(t)}}),[]);var v=function(t){a(t)},y=function(){m();var t=Math.floor(400*Math.random()+1011e3);j(t).then(v)},O=p?Object(f.jsx)(h.a,{}):null,g=b?Object(f.jsx)(l.a,{}):null,x=b||p?null:Object(f.jsx)(d,{char:o});return Object(f.jsxs)("div",{className:"randomchar",children:[O,g,x,Object(f.jsxs)("div",{className:"randomchar__static",children:[Object(f.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(f.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(f.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(f.jsx)("button",{className:"button button__main",onClick:y,children:Object(f.jsx)("div",{className:"inner",children:"try it"})}),Object(f.jsx)("img",{src:u,alt:"mjolnir",className:"randomchar__decoration"})]})]})},p=r(26),j=(r(29),r(30),function(t){console.log("CharList");var e=Object(c.useState)([]),o=Object(n.a)(e,2),a=o[0],i=o[1],u=s(),d=u.loading,b=u.error,j=u.getAllCharacters,m=Object(c.useState)(!1),v=Object(n.a)(m,2),y=v[0],O=v[1],g=Object(c.useState)(210),x=Object(n.a)(g,2),_=x[0],w=x[1],N=Object(c.useState)(!1),k=Object(n.a)(N,2),E=k[0],L=k[1];Object(c.useEffect)((function(){console.log("useEffect"),S(_,!0)}),[]);var S=function(t,e){console.log("onRequest"),O(!e),j(t).then(C)},C=function(t){var e=!1;t.length<9&&(e=!0),i((function(e){return[].concat(Object(p.a)(e),Object(p.a)(t))})),O((function(t){return!1})),w((function(t){return t+9})),L((function(t){return e}))},P=Object(c.useRef)([]),F=function(t){P.current.forEach((function(t){return t.classList.remove("char__item_selected")})),P.current[t].classList.add("char__item_selected"),P.current[t].focus()};var T=function(e){console.log(e.length);var r=e.map((function(e,r){var n={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(n={objectFit:"unset"}),Object(f.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(t){return P.current[r]=t},onClick:function(){t.onCharSelected(e.id),F(r)},onKeyPress:function(n){" "!==n.key&&"Enter"!==n.key||(t.onCharSelected(e.id),F(r))},children:[Object(f.jsx)("img",{src:e.thumbnail,alt:e.name,style:n}),Object(f.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(f.jsx)("ul",{className:"char__grid",children:r})}(a),I=b?Object(f.jsx)(h.a,{}):null,R=d&&!y?Object(f.jsx)(l.a,{}):null;return d&&Promise.resolve().then(r.bind(null,30)).then((function(t){return t.default()})).catch(),Object(f.jsxs)("div",{className:"char__list",children:[I,R,T,Object(f.jsx)("button",{className:"button button__main button__long",disabled:y,style:{display:E?"none":"block"},onClick:function(){return S(_)},children:Object(f.jsx)("div",{className:"inner",children:"load more"})})]})}),m=(r(31),function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(f.jsxs)("div",{className:"skeleton",children:[Object(f.jsxs)("div",{className:"pulse skeleton__header",children:[Object(f.jsx)("div",{className:"pulse skeleton__circle"}),Object(f.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(f.jsx)("div",{className:"pulse skeleton__block"}),Object(f.jsx)("div",{className:"pulse skeleton__block"}),Object(f.jsx)("div",{className:"pulse skeleton__block"})]})]})}),v=(r(32),function(t){var e=t.char,r=e.name,n=e.description,c=e.thumbnail,o=e.homepage,a=e.wiki,i=e.comics,s={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(s={objectFit:"contain"}),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"char__basics",children:[Object(f.jsx)("img",{src:c,alt:r,style:s}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"char__info-name",children:r}),Object(f.jsxs)("div",{className:"char__btns",children:[Object(f.jsx)("a",{href:o,className:"button button__main",children:Object(f.jsx)("div",{className:"inner",children:"homepage"})}),Object(f.jsx)("a",{href:a,className:"button button__secondary",children:Object(f.jsx)("div",{className:"inner",children:"wiki"})})]})]})]}),Object(f.jsx)("div",{className:"char__descr",children:n}),Object(f.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(f.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(t,e){if(!(e>9))return Object(f.jsx)("li",{className:"char__comics-item",children:t.name},e)}))]})]})}),y=function(t){var e=Object(c.useState)(null),r=Object(n.a)(e,2),o=r[0],a=r[1],i=s(),u=i.loading,d=i.error,b=i.getCharacter,p=i.clearError;Object(c.useEffect)((function(){j()}),[t.charId]);var j=function(){var e=t.charId;e&&(p(),b(e).then(y))},y=function(t){a(t)},O=o||u||d?null:Object(f.jsx)(m,{}),g=d?Object(f.jsx)(h.a,{}):null,x=u?Object(f.jsx)(l.a,{}):null,_=u||d||!o?null:Object(f.jsx)(v,{char:o});return Object(f.jsxs)("div",{className:"char__info",children:[O,g,x,_]})};function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var w=r(22);function N(t,e){if(e&&("object"===Object(w.a)(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=_(t);if(e){var c=_(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return N(this,r)}}var E=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(o,t);var e,r,n,c=k(o);function o(){var t;O(this,o);for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return(t=c.call.apply(c,[this].concat(r))).state={error:!1},t}return e=o,(r=[{key:"componentDidCatch",value:function(t,e){console.log(t,e),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(f.jsx)(h.a,{}):this.props.children}}])&&g(e.prototype,r),n&&g(e,n),Object.defineProperty(e,"prototype",{writable:!1}),o}(c.Component),L=E,S=r.p+"static/media/vision.067d4ae1.png";e.default=function(){var t=Object(c.useState)(null),e=Object(n.a)(t,2),r=e[0],o=e[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(L,{children:Object(f.jsx)(b,{})}),Object(f.jsxs)("div",{className:"char__content",children:[Object(f.jsx)(L,{children:Object(f.jsx)(j,{onCharSelected:function(t){o(t)}})}),Object(f.jsx)(L,{children:Object(f.jsx)(y,{charId:r})})]}),Object(f.jsx)("img",{className:"bg-decoration",src:S,alt:"vision"})]})}}}]);
//# sourceMappingURL=2.bf6d5cf3.chunk.js.map