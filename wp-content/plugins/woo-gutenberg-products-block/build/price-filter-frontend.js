!function(e){var t={};function r(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(n,c,function(t){return e[t]}.bind(null,c));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=73)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wc.wcSettings}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.React}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){var n=r(32),c=r(33),o=r(34);e.exports=function(e,t){return n(e)||c(e,t)||o()}},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=c.apply(null,n);i&&e.push(i)}else if("object"===o)for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},function(e,t){!function(){e.exports=this.wc.wcBlocksData}()},function(e,t,r){e.exports=r(28)()},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(0),c=r(22),o=r.n(c),i=function(e){var t=Object(n.useRef)();return o()(e,t.current)||(t.current=e),t.current}},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(20),c=r(10);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?c(e):t}},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},function(e,t,r){var n=r(27);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(0),c=Object(n.createContext)("page"),o=function(){return Object(n.useContext)(c)};c.Provider},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},function(e,t){!function(){e.exports=this.ReactDOM}()},function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},function(e,t,r){"use strict";var n=r(12),c=r.n(n),o=r(4),i=r.n(o),u=r(21),a=r(13),s=r.n(a),l=r(14),f=r.n(l),b=r(15),p=r.n(b),m=r(16),O=r.n(m),g=r(10),d=r.n(g),y=r(17),j=r.n(y),v=r(3),h=(r(8),r(2)),_=r(37),w=function(e){var t=e.imageUrl,r=void 0===t?"".concat(_.e,"img/block-error.svg"):t,n=e.header,c=void 0===n?Object(h.__)("Oops!","woo-gutenberg-products-block"):n,o=e.text,i=void 0===o?Object(h.__)("There was an error with loading this content.","woo-gutenberg-products-block"):o,u=e.errorMessage;return React.createElement("div",{className:"wc-block-error"},r&&React.createElement("img",{className:"wc-block-error__image",src:r,alt:""}),React.createElement("div",{className:"wc-block-error__content"},c&&React.createElement("p",{className:"wc-block-error__header"},c),i&&React.createElement("p",{className:"wc-block-error__text"},i),u&&React.createElement("p",{className:"wc-block-error__message"},u)))},E=(r(30),function(e){function t(){var e,r;s()(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return r=p()(this,(e=O()(t)).call.apply(e,[this].concat(c))),i()(d()(r),"state",{hasError:!1}),r}return j()(t,e),f()(t,[{key:"render",value:function(){var e=this.props,t=e.header,r=e.imageUrl,n=e.showErrorMessage,c=e.text,o=this.state,i=o.errorMessage;return o.hasError?React.createElement(w,{errorMessage:n?i:null,header:t,imageUrl:r,text:c}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{errorMessage:e.message,hasError:!0}}}]),t}(v.Component));E.defaultProps={showErrorMessage:!1};var x=E;function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=document.querySelectorAll(e);n.length&&Array.prototype.forEach.call(n,(function(e,n){var o=r(e,n),i=R({},e.dataset,{},o.attributes);e.classList.remove("is-loading"),Object(u.render)(React.createElement(x,null,React.createElement(t,c()({},o,{attributes:i}))),e)}))}},,,function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(2),c=r(1),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c.CURRENCY.price_format,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.CURRENCY.symbol;if(""===e||void 0===e)return"";var o=parseInt(e,10),i=Object(n.sprintf)(t,r,o),u=document.createElement("textarea");return u.innerHTML=i,u.value}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t,r){"use strict";var n=r(29);function c(){}function o(){}o.resetWarningCache=c,e.exports=function(){function e(e,t,r,c,o,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:c};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){},,function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,c=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){c=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(c)throw o}}return r}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},,function(e,t,r){var n=r(49),c=r(50),o=r(51);e.exports=function(e){return n(e)||c(e)||o()}},function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"a",(function(){return u})),r.d(t,"e",(function(){return a}));var n=r(1),c=Object(n.getSetting)("enableReviewRating",!0),o=Object(n.getSetting)("showAvatars",!0),i=(Object(n.getSetting)("max_columns",6),Object(n.getSetting)("min_columns",1),Object(n.getSetting)("default_columns",3),Object(n.getSetting)("max_rows",6),Object(n.getSetting)("min_rows",1),Object(n.getSetting)("default_rows",2),Object(n.getSetting)("min_height",500),Object(n.getSetting)("default_height",500),Object(n.getSetting)("placeholderImgSrc","")),u=(Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog"),Object(n.getSetting)("limitTags"),Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0),Object(n.getSetting)("homeUrl",""),Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[])),a=Object(n.getSetting)("wcBlocksAssetUrl","")},,function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(7),c=r(9),o=r(0),i=r(11),u=function(e){var t=e.namespace,r=e.resourceName,u=e.resourceValues,a=void 0===u?[]:u,s=e.query,l=void 0===s?{}:s,f=e.shouldSelect,b=void 0===f||f;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");var p=Object(o.useRef)({results:[],isLoading:!0}),m=Object(i.a)(l),O=Object(i.a)(a),g=Object(c.useSelect)((function(e){if(!b)return null;var c=e(n.COLLECTIONS_STORE_KEY),o=[t,r,m,O];return{results:c.getCollection.apply(c,o),isLoading:!c.hasFinishedResolution("getCollection",o)}}),[t,r,O,m,b]);return null!==g&&(p.current=g),p.current}},,function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(3);function c(e,t,r){void 0===r&&(r={});var c=r.maxWait,o=Object(n.useRef)(null),i=Object(n.useRef)([]),u=r.leading,a=Object(n.useRef)(!1),s=Object(n.useRef)(null),l=Object(n.useRef)(!1),f=Object(n.useRef)(e);f.current=e;var b=Object(n.useCallback)((function(){clearTimeout(s.current),clearTimeout(o.current),o.current=null,i.current=[],s.current=null,a.current=!1}),[]);Object(n.useEffect)((function(){return function(){l.current=!0}}),[]);return[Object(n.useCallback)((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(i.current=e,clearTimeout(s.current),!s.current&&u&&!a.current)return f.current.apply(f,e),void(a.current=!0);s.current=setTimeout((function(){b(),l.current||f.current.apply(f,e)}),t),c&&!o.current&&(o.current=setTimeout((function(){var e=i.current;b(),l.current||f.current.apply(null,e)}),c))}),[c,t,b,u]),b,function(){s.current&&(f.current.apply(null,i.current),b())}]}},,,,,,function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(7),i=r(9);t.a=function(e){return function(t){var r;return r=Object(n.useRef)(Object(c.getSetting)("restApiRoutes")),Object(i.useSelect)((function(e,t){if(r.current){var n=e(o.SCHEMA_STORE_KEY),c=n.isResolving,i=n.hasFinishedResolution,u=t.dispatch(o.SCHEMA_STORE_KEY),a=u.receiveRoutes,s=u.startResolution,l=u.finishResolution;Object.keys(r.current).forEach((function(e){var t=r.current[e];c("getRoutes",[e])||i("getRoutes",[e])||(s("getRoutes",[e]),a(t,[e]),l("getRoutes",[e]))}))}}),[]),React.createElement(e,t)}}},function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return O}));var n=r(4),c=r.n(n),o=r(5),i=r.n(o),u=r(7),a=r(9),s=r(0),l=r(18),f=r(11);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=function(e){var t=Object(l.a)();e=e||t;var r=Object(a.useSelect)((function(t){return t(u.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)}),[e]),n=Object(a.useDispatch)(u.QUERY_STATE_STORE_KEY).setValueForQueryContext;return[r,Object(s.useCallback)((function(t){n(e,t)}),[e])]},m=function(e,t,r){var n=Object(l.a)();r=r||n;var c=Object(a.useSelect)((function(n){return n(u.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)}),[r,e]),o=Object(a.useDispatch)(u.QUERY_STATE_STORE_KEY).setQueryValue;return[c,Object(s.useCallback)((function(t){o(r,e,t)}),[r,e])]},O=function(e,t){var r=Object(l.a)(),n=p(t=t||r),o=i()(n,2),u=o[0],a=o[1],m=Object(f.a)(e),O=Object(s.useRef)(!1);return Object(s.useEffect)((function(){a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u,{},m)),O.current=!0}),[m]),O.current?[u,a]:[e,a]}},function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}},function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},,,,,,,,,,,,,,,,function(e,t){},,,,,,function(e,t,r){"use strict";r.r(t);var n=r(47),c=r(23),o=r(5),i=r.n(o),u=r(48),a=r(76),s=r(0),l=r(2),f=(r(8),r(6)),b=r.n(f),p=(r(67),function(e,t,r,n,c){var o=parseInt(e[0],10)||t,i=parseInt(e[1],10)||n;return t>o&&(o=t),r<=o&&(o=r-n),t>=i&&(i=t+n),r<i&&(i=r),!c&&o>=i&&(o=i-n),c&&i<=o&&(i=o+n),[o,i]}),m=r(26),O=function(e){var t=e.disabled,r=e.onClick;return React.createElement("button",{type:"submit",className:"wc-block-price-filter__button wc-block-form-button",disabled:t,onClick:r},Object(l.__)("Go","woo-gutenberg-products-block"))};O.defaultProps={disabled:!1};var g=O,d=function(e){var t=e.minPrice,r=e.maxPrice;return t||r?React.createElement("div",{className:"wc-block-price-filter__range-text"},Object(l.sprintf)(Object(l.__)("Price: %s — %s","woo-gutenberg-products-block"),t,r)):null},y=function(e){var t=e.disabled,r=e.onBlur,n=e.onChange,c=e.minPrice,o=e.maxPrice;return React.createElement(s.Fragment,null,React.createElement("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--min wc-block-form-text-input","aria-label":Object(l.__)("Filter products by minimum price","woo-gutenberg-products-block"),onChange:n,onBlur:r,disabled:t,value:c}),React.createElement("input",{type:"text",size:"5",className:"wc-block-price-filter__amount wc-block-price-filter__amount--max wc-block-form-text-input","aria-label":Object(l.__)("Filter products by maximum price","woo-gutenberg-products-block"),onChange:n,onBlur:r,disabled:t,value:o}))};y.defaultProps={disabled:!1,onBlur:function(){},onChange:function(){}};var j=y,v=function(e){var t=e.minPrice,r=e.maxPrice,n=e.minConstraint,c=e.maxConstraint,o=e.onChange,u=void 0===o?function(){}:o,a=e.step,f=void 0===a?10:a,O=e.currencySymbol,y=void 0===O?"$":O,v=e.priceFormat,h=void 0===v?"%1$s%2$s":v,_=e.showInputFields,w=void 0===_||_,E=e.showFilterButton,x=void 0!==E&&E,S=e.isLoading,R=void 0!==S&&S,k=e.onSubmit,P=void 0===k?function(){}:k,C=Object(s.useRef)(),T=Object(s.useRef)(),F=Object(s.useState)(Object(m.a)(t,h,y)),N=i()(F,2),I=N[0],M=N[1],A=Object(s.useState)(Object(m.a)(r,h,y)),D=i()(A,2),B=D[0],L=D[1];Object(s.useEffect)((function(){M(Object(m.a)(t,h,y))}),[t,h,y]),Object(s.useEffect)((function(){L(Object(m.a)(r,h,y))}),[r,h,y]);var Y=Object(s.useMemo)((function(){return isFinite(n)&&isFinite(c)}),[n,c]),q=Object(s.useMemo)((function(){return isFinite(t)&&isFinite(r)&&Y?{"--low":Math.round((t-n)/(c-n)*100)-.5+"%","--high":Math.round((r-n)/(c-n)*100)+.5+"%"}:{"--low":"0%","--high":"100%"}}),[t,r,n,c,Y]),U=Object(s.useCallback)((function(e){if(!R&&Y){var t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=C.current.offsetWidth,o=C.current.value,i=T.current.offsetWidth,u=T.current.value,a=n*(o/c),s=i*(u/c);Math.abs(r-a)>Math.abs(r-s)?(C.current.style.zIndex=20,T.current.style.zIndex=21):(C.current.style.zIndex=21,T.current.style.zIndex=20)}}),[R,c,Y]),K=Object(s.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__range-input--min"),i=e.target.value,a=p(o?[i,r]:[t,i],n,c,f,o);u([parseInt(a[0],10),parseInt(a[1],10)])}),[t,r,n,c,f]),Q=Object(s.useCallback)((function(e){var o=e.target.classList.contains("wc-block-price-filter__amount--min"),i=e.target.value.replace(/[^0-9.-]+/g,""),a=p(o?[i,r]:[t,i],n,c,f,o);u([parseInt(a[0],10),parseInt(a[1],10)]),M(Object(m.a)(parseInt(a[0],10),h,y)),L(Object(m.a)(parseInt(a[1],10),h,y))}),[t,r,n,c,f]),z=Object(s.useCallback)((function(e){var t=e.target.value.replace(/[^0-9.-]+/g,"");e.target.classList.contains("wc-block-price-filter__amount--min")?M(Object(m.a)(t,h,y)):L(Object(m.a)(t,h,y))}),[h,y]),V=b()("wc-block-price-filter",w&&"wc-block-price-filter--has-input-fields",x&&"wc-block-price-filter--has-filter-button",R&&"is-loading",!Y&&"is-disabled");return React.createElement("div",{className:V},React.createElement("div",{className:"wc-block-price-filter__range-input-wrapper",onMouseMove:U,onFocus:U},!R&&Y&&React.createElement(s.Fragment,null,React.createElement("div",{className:"wc-block-price-filter__range-input-progress",style:q}),React.createElement("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--min","aria-label":Object(l.__)("Filter products by minimum price","woo-gutenberg-products-block"),value:t||0,onChange:K,step:f,min:n,max:c,ref:C}),React.createElement("input",{type:"range",className:"wc-block-price-filter__range-input wc-block-price-filter__range-input--max","aria-label":Object(l.__)("Filter products by maximum price","woo-gutenberg-products-block"),value:r||0,onChange:K,step:f,min:n,max:c,ref:T}))),React.createElement("div",{className:"wc-block-price-filter__controls"},w?React.createElement(j,{disabled:R||!Y,onChange:z,onBlur:Q,minPrice:I,maxPrice:B}):React.createElement(d,{minPrice:I,maxPrice:B}),x&&React.createElement(g,{disabled:R||!Y,onClick:P})))},h=r(1),_=r(41),w=function(e){var t=e.attributes,r=e.isEditor,n=void 0!==r&&r,c=Object(u.b)("min_price"),o=i()(c,2),l=o[0],f=o[1],b=Object(u.b)("max_price"),p=i()(b,2),m=p[0],O=p[1],g=Object(u.a)(),d=i()(g,1)[0],y=Object(a.a)({queryPrices:!0,queryState:d}),j=y.results,w=y.isLoading,E=Object(s.useState)(),x=i()(E,2),S=x[0],R=x[1],k=Object(s.useState)(),P=i()(k,2),C=P[0],T=P[1],F=isNaN(j.min_price)?null:10*Math.floor(parseInt(j.min_price,10)/10),N=isNaN(j.max_price)?null:10*Math.ceil(parseInt(j.max_price,10)/10),I=Object(_.a)((function(){A()}),500),M=i()(I,1)[0],A=Object(s.useCallback)((function(){f(S===F?void 0:S),O(C===N?void 0:C)}),[S,C,F,N]),D=Object(s.useCallback)((function(e){e[0]!==S&&R(e[0]),e[1]!==C&&T(e[1])}),[F,N,S,C]);if(Object(s.useEffect)((function(){t.showFilterButton||M()}),[S,C,t.showFilterButton]),Object(s.useEffect)((function(){l!==S&&R(Number.isFinite(l)?l:F),m!==C&&T(Number.isFinite(m)?m:N)}),[l,m,F,N]),!w&&(null===F||null===N||F===N))return null;var B="h".concat(t.headingLevel),L=Math.max(Number.isFinite(S)?S:-1/0,Number.isFinite(F)?F:-1/0),Y=Math.min(Number.isFinite(C)?C:1/0,Number.isFinite(N)?N:1/0);return React.createElement(s.Fragment,null,!n&&t.heading&&React.createElement(B,null,t.heading),React.createElement("div",{className:"wc-block-price-slider"},React.createElement(v,{minConstraint:F,maxConstraint:N,minPrice:L,maxPrice:Y,step:10,currencySymbol:h.CURRENCY.symbol,priceFormat:h.CURRENCY.price_format,showInputFields:t.showInputFields,showFilterButton:t.showFilterButton,onChange:D,onSubmit:A,isLoading:w})))};Object(c.a)(".wp-block-woocommerce-price-filter",Object(n.a)(w),(function(e){return{attributes:{showInputFields:"true"===e.dataset.showinputfields,showFilterButton:"true"===e.dataset.showfilterbutton}}}))},,,function(e,t,r){"use strict";var n=r(4),c=r.n(n),o=r(36),i=r.n(o),u=r(20),a=r.n(u),s=r(5),l=r.n(s),f=r(0),b=r(48),p=r(39),m=r(18),O=r(3),g=r(41);function d(e,t){return e===t}var y=r(19),j=r(11);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"a",(function(){return _}));var _=function(e){var t=e.queryAttribute,r=e.queryPrices,n=e.queryState,c=Object(m.a)();c="".concat(c,"-collection-data");var o=Object(b.a)(c),u=l()(o,1)[0],s=Object(b.b)("calculate_attribute_counts",[],c),v=l()(s,2),_=v[0],w=v[1],E=Object(b.b)("calculate_price_range",null,c),x=l()(E,2),S=x[0],R=x[1],k=Object(j.a)(t||{}),P=Object(j.a)(r);Object(f.useEffect)((function(){"object"===a()(k)&&Object.keys(k).length&&(_.find((function(e){return e.taxonomy===k.taxonomy}))||w([].concat(i()(_),[k])))}),[k,_,w]),Object(f.useEffect)((function(){S!==P&&void 0!==P&&R(P)}),[P,R,S]);var C,T,F,N,I,M,A,D,B,L,Y,q=Object(f.useState)(!1),U=l()(q,2),K=U[0],Q=U[1],z=(C=K,T=200,N=F&&F.equalityFn?F.equalityFn:d,I=Object(O.useState)(C),M=I[0],A=I[1],D=Object(g.a)(Object(O.useCallback)((function(e){return A(e)}),[]),T,F),B=D[0],L=D[1],Y=Object(O.useRef)(C),Object(O.useEffect)((function(){N(Y.current,C)||(B(C),Y.current=C)}),[C,B,N]),[M,L]),V=l()(z,1)[0];K||Q(!0);var W=Object(f.useMemo)((function(){return function(e){var t=e;return e.calculate_attribute_counts&&(t.calculate_attribute_counts=Object(y.sortBy)(e.calculate_attribute_counts.map((function(e){return{taxonomy:e.taxonomy,query_type:e.queryType}})),["taxonomy","query_type"])),t}(u)}),[u]);return Object(p.a)({namespace:"/wc/store",resourceName:"products/collection-data",query:h({},n,{page:void 0,per_page:void 0,orderby:void 0,order:void 0},W),shouldSelect:V})}}]);