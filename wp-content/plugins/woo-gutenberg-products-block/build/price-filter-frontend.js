!function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=75)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wc.wcSettings}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.React}()},function(e,t,r){var n=r(33),c=r(34),o=r(35);e.exports=function(e,t){return n(e)||c(e,t)||o()}},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=c.apply(null,n);i&&e.push(i)}else if("object"===o)for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},function(e,t,r){e.exports=r(29)()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),c=r(22),o=r.n(c),i=function(e){var t=Object(n.useRef)();return o()(e,t.current)||(t.current=e),t.current}},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(20),c=r(10);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?c(e):t}},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t,r){var n=r(28);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t){!function(){e.exports=this.lodash}()},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),c=Object(n.createContext)("page"),o=function(){return Object(n.useContext)(c)};c.Provider},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.ReactDOM}()},function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},function(e,t,r){"use strict";var n=r(12),c=r.n(n),o=r(5),i=r.n(o),u=r(21),a=r(13),s=r.n(a),l=r(14),f=r.n(l),b=r(15),p=r.n(b),m=r(16),O=r.n(m),d=r(10),g=r.n(d),v=r(17),y=r.n(v),j=r(3),h=(r(8),r(2)),_=r(38),w=function(e){var t=e.imageUrl,r=void 0===t?"".concat(_.e,"img/block-error.svg"):t,n=e.header,c=void 0===n?Object(h.__)("Oops!","woo-gutenberg-products-block"):n,o=e.text,i=void 0===o?Object(h.__)("There was an error with loading this content.","woo-gutenberg-products-block"):o,u=e.errorMessage;return React.createElement("div",{className:"wc-block-error"},r&&React.createElement("img",{className:"wc-block-error__image",src:r,alt:""}),React.createElement("div",{className:"wc-block-error__content"},c&&React.createElement("p",{className:"wc-block-error__header"},c),i&&React.createElement("p",{className:"wc-block-error__text"},i),u&&React.createElement("p",{className:"wc-block-error__message"},u)))},E=(r(31),function(e){function t(){var e,r;s()(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return r=p()(this,(e=O()(t)).call.apply(e,[this].concat(c))),i()(g()(r),"state",{hasError:!1}),r}return y()(t,e),f()(t,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,c=e.text,o=this.state,i=o.errorMessage;return o.hasError?React.createElement(w,{errorMessage:n?i:null,header:t,imageUrl:r,text:c}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{errorMessage:e.message,hasError:!0}}}]),t}(j.Component));E.defaultProps={showErrorMessage:!1};var x=E;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=document.querySelectorAll(e);n.length&&Array.prototype.forEach.call(n,(function(e,n){var o=r(e,n),i=S({},e.dataset,{},o.attributes);e.classList.remove("is-loading"),Object(u.render)(React.createElement(x,null,React.createElement(t,c()({},o,{attributes:i}))),e)}))}},,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(2),c=r(1),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.CURRENCY.priceFormat,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.CURRENCY.symbol,o=parseInt(e,10);if(!isFinite(o))return"";var i=Object(n.sprintf)(t,r,o),u=document.createElement("textarea");return u.innerHTML=i,u.value}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t,r){"use strict";var n=r(30);function c(){}function o(){}o.resetWarningCache=c,e.exports=function(){function e(e,t,r,c,o,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:c};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){},,function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,c=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){c=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(c)throw o}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},,function(e,t,r){var n=r(50),c=r(51),o=r(52);e.exports=function(e){return n(e)||c(e)||o()}},function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return u})),r.d(t,"e",(function(){return a}));var n=r(1),c=Object(n.getSetting)("enableReviewRating",!0),o=Object(n.getSetting)("showAvatars",!0),i=(Object(n.getSetting)("max_columns",6),Object(n.getSetting)("min_columns",1),Object(n.getSetting)("default_columns",3),Object(n.getSetting)("max_rows",6),Object(n.getSetting)("min_rows",1),Object(n.getSetting)("default_rows",2),Object(n.getSetting)("min_height",500),Object(n.getSetting)("default_height",500),Object(n.getSetting)("placeholderImgSrc","")),u=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog"),Object(n.getSetting)("limitTags"),Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0),Object(n.getSetting)("homeUrl",""),Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[])),a=Object(n.getSetting)("wcBlocksAssetUrl","")},,function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(7),c=r(9),o=r(0),i=r(11),u=function(e){var t=e.namespace,r=e.resourceName,u=e.resourceValues,a=void 0===u?[]:u,s=e.query,l=void 0===s?{}:s,f=e.shouldSelect,b=void 0===f||f;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");var p=Object(o.useRef)({results:[],isLoading:!0}),m=Object(i.a)(l),O=Object(i.a)(a),d=Object(c.useSelect)((function(e){if(!b)return null;var c=e(n.COLLECTIONS_STORE_KEY),o=[t,r,m,O];return{results:c.getCollection.apply(c,o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,r,O,m,b]);return null!==d&&(p.current=d),p.current}},,function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(3);function c(e,t,r){void 0===r&&(r={});var c=r.maxWait,o=Object(n.useRef)(null),i=Object(n.useRef)([]),u=r.leading,a=Object(n.useRef)(!1),s=Object(n.useRef)(null),l=Object(n.useRef)(!1),f=Object(n.useRef)(e);f.current=e;var b=Object(n.useCallback)((function(){clearTimeout(s.current),clearTimeout(o.current),o.current=null,i.current=[],s.current=null,a.current=!1}),[]);Object(n.useEffect)((function(){return function(){l.current=!0}}),[]);return[Object(n.useCallback)((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(i.current=e,clearTimeout(s.current),!s.current&&u&&!a.current)return f.current.apply(f,e),void(a.current=!0);s.current=setTimeout((function(){b(),l.current||f.current.apply(f,e)}),t),c&&!o.current&&(o.current=setTimeout((function(){var e=i.current;b(),l.current||f.current.apply(null,e)}),c))}),[c,t,b,u]),b,function(){s.current&&(f.current.apply(null,i.current),b())}]}},,,,,,function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(7),i=r(9);t.a=function(e){return function(t){var r;return r=Object(n.useRef)(Object(c.getSetting)("restApiRoutes")),Object(i.useSelect)((function(e,t){if(r.current){var n=e(o.SCHEMA_STORE_KEY),c=n.isResolving,i=n.hasFinishedResolution,u=t.dispatch(o.SCHEMA_STORE_KEY),a=u.receiveRoutes,s=u.startResolution,l=u.finishResolution;Object.keys(r.current).forEach((function(e){var t=r.current[e];c("getRoutes",[e])||i("getRoutes",[e])||(s("getRoutes",[e]),a(t,[e]),l("getRoutes",[e]))}))}}),[]),React.createElement(e,t)}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return p}));var n=r(4),c=r.n(n),o=r(7),i=r(9),u=r(0),a=r(19),s=r(18),l=r(11),f=function(e){var t=Object(a.a)();e=e||t;var r=Object(i.useSelect)((function(t){return t(o.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),n=Object(i.useDispatch)(o.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[r,Object(u.useCallback)((function(t){n(e,t)}),[e])]},b=function(e,t,r){var n=Object(a.a)();r=r||n;var c=Object(i.useSelect)((function(n){return n(o.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)}),[r,e]),s=Object(i.useDispatch)(o.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(u.useCallback)((function(t){s(r,e,t)}),[r,e])]},p=function(e,t){var r=Object(a.a)(),n=f(t=t||r),o=c()(n,2),i=o[0],b=o[1],p=Object(l.a)(e),m=Object(u.useRef)(!1);return Object(u.useEffect)((function(){b(Object(s.assign)({},i,p)),m.current=!0}),[p]),m.current?[i,b]:[e,b]}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},,,,,,,,,,,,,function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(3),c=function(e,t){var r=Object(n.useRef)();return Object(n.useEffect)((function(){r.current===e||t&&!t(e,r.current)||(r.current=e)}),[e,r.current]),r.current}},,,,function(e,t){},,,,,,function(e,t,r){"use strict";r.r(t);var n=r(48),c=r(23),o=r(4),i=r.n(o),u=r(49),a=r(78),s=r(0),l=r(2),f=(r(8),r(6)),b=r.n(f),p=(r(69),function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=parseInt(e[0],10),i=parseInt(e[1],10);return Number.isFinite(o)||(o=t||0),Number.isFinite(i)||(i=r||n),Number.isFinite(t)&&t>o&&(o=t),Number.isFinite(r)&&r<=o&&(o=r-n),Number.isFinite(t)&&t>=i&&(i=t+n),Number.isFinite(r)&&r<i&&(i=r),!c&&o>=i&&(o=i-n),c&&i<=o&&(i=o+n),[o,i]}),m=r(27),O=function(e){var t=e.disabled,r=e.onClick;return React.createElement("button",{type:"submit",className:"wc-block-price-filter__button wc-block-form-button",disabled:t,onClick:r},Object(l.__)("Go","woo-gutenberg-products-block"))};O.defaultProps={disabled:!1};var d=O,g=function(e){var t=e.minPrice,r=e.maxPrice;return t||r?React.createElement("div",{className:"wc-block-price-filter__range-text"},Object(l.sprintf)(Object(l.__)("Price: %s — %s","woo-gutenberg-products-block"),t,r)):null},v=function(e){var t=e.disabled,r=e.onBlur,n=e.onChange,c=e.minPrice,o=e.maxPrice;return React.createElement(s.Fragment,null,React.createElement("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input","aria-label":Object(l.__)("Filter products by minimum price","woo-gutenberg-products-block"),onChange:n,onBlur:r,disabled:t,value:c}),React.createElement("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input","aria-label":Object(l.__)("Filter products by maximum price","woo-gutenberg-products-block"),onChange:n,onBlur:r,disabled:t,value:o}))};v.defaultProps={disabled:!1,onBlur:function(){},onChange:function(){}};var y=v,j=function(e){var t=e.minPrice,r=e.maxPrice,n=e.minConstraint,c=e.maxConstraint,o=e.onChange,u=void 0===o?function(){}:o,a=e.step,f=void 0===a?10:a,O=e.currencySymbol,v=void 0===O?"$":O,j=e.priceFormat,h=void 0===j?"%1$s%2$s":j,_=e.showInputFields,w=void 0===_||_,E=e.showFilterButton,x=void 0!==E&&E,R=e.isLoading,S=void 0!==R&&R,k=e.onSubmit,P=void 0===k?function(){}:k,C=Object(s.useRef)(),F=Object(s.useRef)(),N=Object(s.useState)(Object(m.a)(t,h,v)),T=i()(N,2),M=T[0],I=T[1],A=Object(s.useState)(Object(m.a)(r,h,v)),D=i()(A,2),U=D[0],B=D[1];Object(s.useEffect)((function(){I(Object(m.a)(t,h,v))}),[t,h,v]),Object(s.useEffect)((function(){B(Object(m.a)(r,h,v))}),[r,h,v]);var L=Object(s.useMemo)((function(){return isFinite(n)&&isFinite(c)}),[n,c]),Y=Object(s.useMemo)((function(){return isFinite(t)&&isFinite(r)&&L?{"--low":Math.round((t-n)/(c-n)*100)-.5+"%","--high":Math.round((r-n)/(c-n)*100)+.5+"%"}:{"--low":"0%","--high":"100%"}}),[t,r,n,c,L,f]),q=Object(s.useCallback)((function(e){if(!S&&L){var t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=C.current.offsetWidth,o=C.current.value,i=F.current.offsetWidth,u=F.current.value,a=n*(o/c),s=i*(u/c);Math.abs(r-a)>Math.abs(r-s)?(C.current.style.zIndex=20,F.current.style.zIndex=21):(C.current.style.zIndex=21,F.current.style.zIndex=20)}}),[S,c,L]),K=Object(s.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=e.target.value,a=o?[Math.round(i/f)*f,r]:[t,Math.round(i/f)*f],s=p(a,n,c,f,o);u([parseInt(s[0],10),parseInt(s[1],10)])}),[t,r,n,c,f]),Q=Object(s.useCallback)((function(e){var n=e.target.classList.contains("wc-block-price-filter__amount--min"),c=e.target.value.replace(/[^0-9.-]+/g,""),o=p(n?[c,r]:[t,c],null,null,f,n);u([parseInt(o[0],10),parseInt(o[1],10)]),I(Object(m.a)(parseInt(o[0],10),h,v)),B(Object(m.a)(parseInt(o[1],10),h,v))}),[t,r,n,c,f]),W=Object(s.useCallback)((function(e){var t=e.target.value.replace(/[^0-9.-]+/g,"");e.target.classList.contains("wc-block-price-filter__amount--min")?I(Object(m.a)(t,h,v)):B(Object(m.a)(t,h,v))}),[h,v]),z=b()("wc-block-price-filter",w&&"wc-block-price-filter--has-input-fields",x&&"wc-block-price-filter--has-filter-button",S&&"is-loading",!L&&"is-disabled"),V=C&&document.activeElement===C.current?f:1,H=F&&document.activeElement===F.current?f:1;return React.createElement("div",{className:z},React.createElement("div",{className:"wc-block-price-filter__range-input-wrapper",onMouseMove:q,onFocus:q},L&&React.createElement(s.Fragment,null,React.createElement("div",{className:"wc-block-price-filter__range-input-progress",style:Y}),React.createElement("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min","aria-label":Object(l.__)("Filter products by minimum price","woo-gutenberg-products-block"),value:Number.isFinite(t)?t:n,onChange:K,step:V,min:n,max:c,ref:C,disabled:S}),React.createElement("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max","aria-label":Object(l.__)("Filter products by maximum price","woo-gutenberg-products-block"),value:Number.isFinite(r)?r:c,onChange:K,step:H,min:n,max:c,ref:F,disabled:S}))),React.createElement("div",{className:"wc-block-price-filter__controls"},w?React.createElement(y,{disabled:S||!L,onChange:W,onBlur:Q,minPrice:M,maxPrice:U}):React.createElement(g,{minPrice:M,maxPrice:U}),x&&React.createElement(d,{disabled:S||!L,onClick:P})))},h=r(1),_=r(42),w=r(65),E=function(e,t){var r;"ROUND_UP"===t?r=isNaN(e)?null:10*Math.ceil(parseFloat(e,10)/10):"ROUND_DOWN"===t&&(r=isNaN(e)?null:10*Math.floor(parseFloat(e,10)/10));var n=Object(w.a)(r,(function(e){return Number.isFinite(e)}));return Number.isFinite(r)?r:n},x=function(e){var t=e.attributes,r=e.isEditor,n=void 0!==r&&r,c=Object(u.b)("min_price"),o=i()(c,2),l=o[0],f=o[1],b=Object(u.b)("max_price"),p=i()(b,2),m=p[0],O=p[1],d=Object(u.a)(),g=i()(d,1)[0],v=Object(a.a)({queryPrices:!0,queryState:g}),y=v.results,w=v.isLoading,x=Object(s.useState)(),R=i()(x,2),S=R[0],k=R[1],P=Object(s.useState)(),C=i()(P,2),F=C[0],N=C[1],T=function(e){var t=e.minPrice,r=e.maxPrice;return{minConstraint:E(t,"ROUND_DOWN"),maxConstraint:E(r,"ROUND_UP")}}({minPrice:y.min_price,maxPrice:y.max_price}),M=T.minConstraint,I=T.maxConstraint,A=Object(_.a)((function(){U()}),500),D=i()(A,1)[0],U=Object(s.useCallback)((function(){f(S===M?void 0:S),O(F===I?void 0:F)}),[S,F,M,I]),B=Object(s.useCallback)((function(e){e[0]!==S&&k(e[0]),e[1]!==F&&N(e[1])}),[M,I,S,F]);if(Object(s.useEffect)((function(){t.showFilterButton||D()}),[S,F,t.showFilterButton]),Object(s.useEffect)((function(){l!==S&&k(Number.isFinite(l)?l:M),m!==F&&N(Number.isFinite(m)?m:I)}),[l,m,M,I]),!w&&(null===M||null===I||M===I))return null;var L="h".concat(t.headingLevel);return React.createElement(s.Fragment,null,!n&&t.heading&&React.createElement(L,null,t.heading),React.createElement("div",{className:"wc-block-price-slider"},React.createElement(j,{minConstraint:M,maxConstraint:I,minPrice:S,maxPrice:F,step:10,currencySymbol:h.CURRENCY.symbol,priceFormat:h.CURRENCY.priceFormat,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:B,onSubmit:U,isLoading:w})))};Object(c.a)(".wp-block-woocommerce-price-filter",Object(n.a)(x),(function(e){return{attributes:{showInputFields:"true"===e.dataset.showinputfields,showFilterButton:"true"===e.dataset.showfilterbutton}}}))},,,function(e,t,r){"use strict";var n=r(5),c=r.n(n),o=r(37),i=r.n(o),u=r(20),a=r.n(u),s=r(4),l=r.n(s),f=r(0),b=r(49),p=r(40),m=r(19),O=r(3),d=r(42);function g(e,t){return e===t}var v=r(18),y=r(11);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return _}));var _=function(e){var t=e.queryAttribute,r=e.queryPrices,n=e.queryState,c=Object(m.a)();c="".concat(c,"-collection-data");var o=Object(b.a)(c),u=l()(o,1)[0],s=Object(b.b)("calculate_attribute_counts",[],c),j=l()(s,2),_=j[0],w=j[1],E=Object(b.b)("calculate_price_range",null,c),x=l()(E,2),R=x[0],S=x[1],k=Object(y.a)(t||{}),P=Object(y.a)(r);Object(f.useEffect)((function(){"object"===a()(k)&&Object.keys(k).length&&(_.find((function(e){return e.taxonomy===k.taxonomy}))||w([].concat(i()(_),[k])))}),[k,_,w]),Object(f.useEffect)((function(){R!==P&&void 0!==P&&S(P)}),[P,S,R]);var C,F,N,T,M,I,A,D,U,B,L,Y=Object(f.useState)(!1),q=l()(Y,2),K=q[0],Q=q[1],W=(C=K,F=200,T=N&&N.equalityFn?N.equalityFn:g,M=Object(O.useState)(C),I=M[0],A=M[1],D=Object(d.a)(Object(O.useCallback)((function(e){return A(e)}),[]),F,N),U=D[0],B=D[1],L=Object(O.useRef)(C),Object(O.useEffect)((function(){T(L.current,C)||(U(C),L.current=C)}),[C,U,T]),[I,B]),z=l()(W,1)[0];K||Q(!0);var V=Object(f.useMemo)((function(){return function(e){var t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(v.sortBy)(e.calculate_attribute_counts.map((function(e){return{taxonomy:e.taxonomy,query_type:e.queryType}})),["taxonomy","query_type"])),t}(u)}),[u]);return Object(p.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:h({},n,{page:void 0,per_page:void 0,orderby:void 0,order:void 0},V),shouldSelect:z})}}]);