webpackJsonp([2],{103:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(4),i=o(a),u=n(7),l=o(u),s=n(108),c=o(s),f=function(e){var t=e.bookShelfTitle,n=e.books,o=e.handleStatusUpdate;return i.default.createElement("div",{className:"bookshelf"},i.default.createElement("h2",{className:"bookshelf-title"},t),i.default.createElement("div",{className:"bookshelf-books"},i.default.createElement("ol",{className:"books-grid"},n.length>0&&n.map(function(e){return i.default.createElement("li",{key:e.id},i.default.createElement(c.default,r({shelf:e.shelf,bookId:e.id,bookCoverImage:e.imageLinks.thumbnail,bookTitle:e.title,bookAuthors:e.authors,handleStatusUpdate:o},e)))}))))};f.propTypes={bookShelfTitle:l.default.string,books:l.default.array,handleStatusUpdate:l.default.func.isRequired},f.defaultProps={bookShelfTitle:"No title set",books:[]},t.default=f},104:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=h[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(c(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(c(o.parts[a],t));h[o.id]={id:o.id,refs:1,parts:i}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],i=t.base?a[0]+t.base:a[0],u=a[1],l=a[2],s=a[3],c={css:u,media:l,sourceMap:s};o[i]?o[i].parts.push(c):n.push(o[i]={id:i,parts:[c]})}return n}function a(e,t){var n=m(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function u(e){var t=document.createElement("style");return e.attrs.type="text/css",s(t,e.attrs),a(e,t),t}function l(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",s(t,e.attrs),a(e,t),t}function s(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,o,r,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var s=v++;n=g||(g=u(t)),o=f.bind(null,n,s,!1),r=f.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=p.bind(null,n,t),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),o=d.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function f(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var o=n.css,r=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(o=k(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(i),u&&URL.revokeObjectURL(u)}var h={},b=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),m=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),g=null,v=0,y=[],k=n(236);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=b()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var u=n[i],l=h[u.id];l.refs--,a.push(l)}if(e){o(r(e,t),t)}for(var i=0;i<a.length;i++){var l=a[i];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete h[l.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},105:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),s=o(l),c=n(16),f=n(203),d=o(f),p=n(128),h=(o(p),n(62)),b=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),m=n(242),g=o(m),v=n(244),y=o(v),k=n(243),x=o(k),w=(0,d.default)({loader:function(){return n.e(0).then(n.bind(null,250))},loading:x.default}),E=function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={bookList:[]},n.loadList=n.loadList.bind(n),n.handleBookStatusUpdate=n.handleBookStatusUpdate.bind(n),n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){this.loadList()}},{key:"loadList",value:function(){var e=this;b.getAll().then(function(t){return e.setState({bookList:t})})}},{key:"handleBookStatusUpdate",value:function(e,t){var n=this;b.update(e,t).then(function(e){return e&&n.loadList()})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"app"},s.default.createElement(c.Route,{path:"/search",render:function(){return s.default.createElement(y.default,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}),s.default.createElement(c.Route,{path:"/details/:bookId",component:w}),s.default.createElement(c.Route,{path:"/",exact:!0,render:function(){return s.default.createElement(g.default,{handleBookStatusUpdate:e.handleBookStatusUpdate,books:e.state.bookList})}}))}}]),t}(s.default.Component);t.default=E},106:function(e,t,n){var o=n(60);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;var a=n(104)(o,r);o.locals&&(e.exports=o.locals),o.locals||e.hot.accept(60,function(){var t=n(60);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},107:function(e,t,n){var o=n(61);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;var a=n(104)(o,r);o.locals&&(e.exports=o.locals),o.locals||e.hot.accept(61,function(){var t=n(61);"string"==typeof t&&(t=[[e.i,t,""]]),a(t)}),e.hot.dispose(function(){a()})},108:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=o(r),i=n(7),u=o(i),l=n(16),s=function(e){var t=e.bookId,n=e.shelf,o=e.bookCoverImage,r=e.bookTitle,i=e.bookAuthors,u=e.handleStatusUpdate;return a.default.createElement("div",{className:"book"},a.default.createElement("div",{className:"book-top"},a.default.createElement("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:'url("'+o+'")'}}),a.default.createElement("div",{className:"book-shelf-changer"},a.default.createElement("select",{defaultValue:n,onChange:function(e){u({id:t},e.target.value)}},a.default.createElement("option",{value:"none",disabled:!0},"Move to..."),a.default.createElement("option",{value:"currentlyReading"},"Currently Reading"),a.default.createElement("option",{value:"wantToRead"},"Want to Read"),a.default.createElement("option",{value:"read"},"Read"),a.default.createElement("option",{value:"none"},"None")))),a.default.createElement("div",{className:"book-title"},r),a.default.createElement("div",{className:"book-authors"},i.map(function(e){return a.default.createElement("span",{key:e},e,a.default.createElement("br",null))})),a.default.createElement("div",{className:"book-authors"},a.default.createElement(l.Link,{className:"more",to:"/details/"+t},"More...")))};s.propTypes={bookId:u.default.string.isRequired,shelf:u.default.string,bookCoverImage:u.default.string,bookTitle:u.default.string,bookAuthors:u.default.array,handleStatusUpdate:u.default.func.isRequired},s.defaultProps={shelf:"none",bookCoverImage:"",bookTitle:"Title",bookAuthors:["No Authors"]},t.default=s},111:function(e,t,n){"use strict";e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},127:function(e,t,n){"use strict";function o(e,t){return a.forEach(function(e){e(t)}),e}function r(e){var t=a.push(e)-1;return function(){a.splice(t,1)}}var a=[];t.report=o,t.inspect=r},128:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0,o=e.length-1;o>=0;o--){var r=e[o];"."===r?e.splice(o,1):".."===r?(e.splice(o,1),n++):n&&(e.splice(o,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function o(e){"string"!=typeof e&&(e+="");var t,n=0,o=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===o&&(r=!1,o=t+1);return-1===o?"":e.slice(n,o)}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],o=0;o<e.length;o++)t(e[o],o,e)&&n.push(e[o]);return n}t.resolve=function(){for(var t="",o=!1,a=arguments.length-1;a>=-1&&!o;a--){var i=a>=0?arguments[a]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,o="/"===i.charAt(0))}return t=n(r(t.split("/"),function(e){return!!e}),!o).join("/"),(o?"/":"")+t||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===a(e,-1);return e=n(r(e.split("/"),function(e){return!!e}),!o).join("/"),e||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function o(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=o(e.split("/")),a=o(n.split("/")),i=Math.min(r.length,a.length),u=i,l=0;l<i;l++)if(r[l]!==a[l]){u=l;break}for(var s=[],l=u;l<r.length;l++)s.push("..");return s=s.concat(a.slice(u)),s.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,o=-1,r=!0,a=e.length-1;a>=1;--a)if(47===(t=e.charCodeAt(a))){if(!r){o=a;break}}else r=!1;return-1===o?n?"/":".":n&&1===o?"/":e.slice(0,o)},t.basename=function(e,t){var n=o(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,o=-1,r=!0,a=0,i=e.length-1;i>=0;--i){var u=e.charCodeAt(i);if(47!==u)-1===o&&(r=!1,o=i+1),46===u?-1===t?t=i:1!==a&&(a=1):-1!==t&&(a=-1);else if(!r){n=i+1;break}}return-1===t||-1===o||0===a||1===a&&t===o-1&&t===n+1?"":e.slice(t,o)};var a="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(t,n(25))},203:function(e,t,n){"use strict";(function(e){function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":p(t))&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":p(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){var t=[],n=v(function(e){return t.push(e)}),o=e();return n(),{promise:o,reported:t}}function i(t){var n=a(function(){return t()}),o=n.promise,r=n.reported;if(r.length>1)throw new Error("react-loadable cannot handle more than one import() in each loader");var i={loading:!0,loaded:null,error:null},u=r[0]||{};try{b?"function"==typeof u.webpackRequireWeakId&&(i.loaded=m(u.webpackRequireWeakId()),i.loaded&&(i.loading=!1)):"string"==typeof u.serverSideRequirePath&&(i.loading=!1,i.loaded=e.require(u.serverSideRequirePath))}catch(e){i.error=e}return i.promise=o.then(function(e){return i.loading=!1,i.loaded=e,e}).catch(function(e){throw i.loading=!1,i.error=e,e}),i}function u(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach(function(o){var r=i(e[o]);r.loading?t.loading=!0:(t.loaded[o]=r.loaded,t.error=r.error),n.push(r.promise),r.promise.then(function(e){t.loaded[o]=e}).catch(function(e){t.error=e})})}catch(e){t.error=e}return t.promise=Promise.all(n).then(function(e){return t.loading=!1,e}).catch(function(e){throw t.loading=!1,e}),t}function l(e){return e&&e.__esModule?e.default:e}function s(e,t){return h.createElement(l(e),t)}function c(e,n){if(!n.loading)throw new Error("react-loadable requires a `loading` component");var a=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:s},n),i=null;return function(n){function u(r){t(this,u);var l=o(this,n.call(this,r));return i||(i=e(a.loader)),l.state={error:i.error,pastDelay:!1,timedOut:!1,loading:i.loading,loaded:i.loaded},l}return r(u,n),u.preload=function(){i||(i=e(a.loader))},u.prototype.componentWillMount=function(){var e=this;if(this._mounted=!0,!i.resolved){"number"==typeof a.delay&&(this._delay=setTimeout(function(){e.setState({pastDelay:!0})},a.delay)),"number"==typeof a.timeout&&(this._timeout=setTimeout(function(){e.setState({timedOut:!0})},a.timeout));var t=function(){e._mounted&&(e.setState({error:i.error,loaded:i.loaded,loading:i.loading}),e._clearTimeouts())};i.promise.then(function(){t()}).catch(function(e){throw t(),e})}},u.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},u.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},u.prototype.render=function(){return this.state.loading||this.state.error?h.createElement(a.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error}):this.state.loaded?a.render(this.state.loaded,this.props):null},u}(h.Component)}function f(e){return c(i,e)}function d(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return c(u,e)}var p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=n(4),b=n(67),m=n(240),g=n(127),v=g.inspect;f.Map=d,e.exports=f}).call(t,n(241)(e))},236:function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var a;return a=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},240:function(e,t,n){"use strict";function o(e){if(n.m[e])return n(e)}var r=n(67);e.exports=r?o:null},241:function(e,t,n){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},242:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),a=o(r),i=n(7),u=o(i),l=n(16),s=n(103),c=o(s),f=function(e){var t=e.books,n=e.handleBookStatusUpdate,o=[{name:"Currently Reading",slug:"currentlyReading"},{name:"Want to Read",slug:"wantToRead"},{name:"Read",slug:"read"}];return a.default.createElement("div",{className:"list-books"},a.default.createElement("div",{className:"list-books-title"},a.default.createElement("h1",null,"My Bookshelves ")),a.default.createElement("div",{className:"list-books-content"},o.map(function(e){return a.default.createElement(c.default,{key:e.slug,bookShelfTitle:e.name,books:t.filter(function(t){return t.shelf===e.slug}),handleStatusUpdate:n})})),a.default.createElement("div",{className:"open-search"},a.default.createElement(l.Link,{to:"/search"},"Add a book")))};f.propTypes={books:u.default.array,handleBookStatusUpdate:u.default.func.isRequired},f.defaultProps={books:[]},t.default=f},243:function(e,t,n){"use strict";function o(e,t,n){return e&&t?a.default.createElement("p",null,"Loading..."):n&&!e?a.default.createElement("p",null,"Error Loading"):null}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(4),a=function(e){return e&&e.__esModule?e:{default:e}}(r)},244:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(4),s=o(l),c=n(7),f=o(c),d=n(16),p=n(62),h=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(p),b=n(103),m=o(b),g=function(e){function t(){var e,n,o,i;r(this,t);for(var u=arguments.length,l=Array(u),s=0;s<u;s++)l[s]=arguments[s];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={searchedList:[],query:""},i=n,a(o,i)}return i(t,e),u(t,[{key:"handleSearchUpdate",value:function(e){var t=this,n=e.target.value;this.setState({query:n}),h.search(n,20).then(function(e){for(var n=e,o=t.props.books,r=0;r<n.length;r++)for(var a=0;a<o.length;a++){if(n[r].id===o[a].id){n[r].shelf=o[a].shelf;break}n[r].shelf="none"}t.setState({searchedList:n})})}},{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:"search-books"},s.default.createElement("div",{className:"search-books-bar"},s.default.createElement(d.Link,{className:"close-search",to:"/"},"Back"),s.default.createElement("div",{className:"search-books-input-wrapper"},s.default.createElement("input",{type:"text",name:"searchTerm",placeholder:"Search by title or author",onChange:function(t){e.handleSearchUpdate(t)},value:this.state.query}))),s.default.createElement("div",{className:"search-books-results"},s.default.createElement(m.default,{bookShelfTitle:"Search Results",books:this.state.searchedList,handleStatusUpdate:this.props.handleBookStatusUpdate}),s.default.createElement("ol",{className:"books-grid"})))}}]),t}(l.Component);g.propTypes={books:f.default.array,handleBookStatusUpdate:f.default.func.isRequired},g.defaultProps={books:[]},t.default=g},245:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(4),a=o(r),i=n(38),u=o(i),l=n(16),s=n(105),c=o(s);n(107),n(106),u.default.render(a.default.createElement(l.BrowserRouter,null,a.default.createElement(c.default,null)),document.getElementById("root"))},246:function(e,t,n){e.exports=n.p+"bb9363b86b02777d23523851826414e0.svg"},247:function(e,t,n){e.exports=n.p+"3687aa988bec28f17ae39153db1646c3.svg"},248:function(e,t,n){e.exports=n.p+"78c6f53b2342643639fe1cbaf171bf47.svg"},60:function(e,t,n){var o=n(111);t=e.exports=n(63)(!1),t.push([e.i,".root,body,html{height:100%}body{line-height:1.5}.app,body{background:#fff}.list-books-title{padding:10px 0;background:#ff1493;text-align:center}.list-books-title h1{font-weight:400;margin:0;color:#fff}.list-books-content{padding:0 0 80px;flex:1}.bookshelf{padding:0 10px 20px}@media (min-width:600px){.bookshelf{padding:0 20px 40px}}.bookshelf-title{border-bottom:1px solid #dedede}.bookshelf-books{text-align:center}.open-search{position:fixed;right:25px;bottom:25px}.open-search a{display:block;width:50px;height:50px;border-radius:50%;background:#2e7d32;background-image:url("+o(n(246))+");background-repeat:no-repeat;background-position:50%;background-size:28px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);font-size:0}.search-books-bar{position:fixed;width:100%;top:0;left:0;z-index:5;display:flex;box-shadow:0 10px 20px rgba(0,0,0,.19),0 0 6px rgba(0,0,0,.23);background-color:#fff}.search-books-input-wrapper{flex:1;background:#e9e}.search-books-bar input{width:100%;padding:15px 10px;font-size:1.25em;border:none;outline:none}.close-search{display:block;top:20px;left:15px;width:50px;height:53px;background:#fff;background-image:url("+o(n(247))+");background-position:50%;background-repeat:no-repeat;background-size:28px;font-size:0}.search-books-results{padding:80px 10px 20px}.books-grid{list-style-type:none;padding:0;margin:0;display:flex;justify-content:center;flex-wrap:wrap}.books-grid li{padding:10px 15px;text-align:left}.book{width:140px}.book-authors,.book-title{font-size:.8em}.book-title{margin-top:10px}.book-authors{color:#999}.book-top{position:relative;height:200px;display:flex;align-items:flex-end}.book-shelf-changer{position:absolute;right:0;bottom:-10px;width:40px;height:40px;border-radius:50%;background:#60ac5d;background-image:url("+o(n(248))+");background-repeat:no-repeat;background-position:50%;background-size:20px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.book-shelf-changer select{width:100%;height:100%;opacity:0;cursor:pointer}.book-cover{box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);background:#eee}.book-cover-title{padding:20px 10px 0;text-align:center;font-size:.8em}",""])},61:function(e,t,n){t=e.exports=n(63)(!1),t.push([e.i,"html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}body{margin:0;padding:0;font-family:Roboto,sans-serif}",""])},62:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r="https://reactnd-books-api.udacity.com",a=localStorage.token;a||(a=localStorage.token=Math.random().toString(36).substr(-8));var i={Accept:"application/json",Authorization:a};t.get=function(e){return fetch(r+"/books/"+e,{headers:i}).then(function(e){return e.json()}).then(function(e){return e.book})},t.getAll=function(){return fetch(r+"/books",{headers:i}).then(function(e){return e.json()}).then(function(e){return e.books})},t.update=function(e,t){return fetch(r+"/books/"+e.id,{method:"PUT",headers:o({},i,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},t.search=function(e,t){return fetch(r+"/search",{method:"POST",headers:o({},i,{"Content-Type":"application/json"}),body:JSON.stringify({query:e,maxResults:t})}).then(function(e){return e.json()}).then(function(e){return e.books})}},63:function(e,t,n){"use strict";function o(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=o(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},67:function(e,t,n){"use strict";e.exports=void 0!==n}},[245]);