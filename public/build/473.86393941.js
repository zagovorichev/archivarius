(self.webpackChunk=self.webpackChunk||[]).push([[473],{3784:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(4537);var a=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));if(e.name="DebugPlugin",e.triggerEvent=function(t,n){n?(console.groupCollapsed("%cswup:%c"+t,"color: #343434","color: #009ACD"),console.log(n),console.groupEnd()):console.log("%cswup:%c"+t,"color: #343434","color: #009ACD"),e.swup._triggerEvent(t,n)},e.log=function(e,t){if(t){for(var n in console.groupCollapsed(e),t)console.log(t[n]);console.groupEnd()}else console.log(e+"%c","color: #009ACD")},e.debugLog=function(e,t){"error"===t?console.error("DEBUG PLUGIN: "+e):console.warn("DEBUG PLUGIN: "+e)},!document.getElementsByTagName("title").length){console.warn("DEBUG PLUGIN: This page doesn't have title tag. Title tag is required in every page.")}return e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"mount",value:function(){var e=this.swup;e.log=this.log,window.swup=e,e._triggerEvent=e.triggerEvent,e.triggerEvent=this.triggerEvent;var t='a[href]:not([href^="'+window.location.origin+'"]):not([href^="/"]):not([href^="http"]):not([href^="/"]):not([href^="?"]):not([href^="#"])';e.on("pageView",(function(){if(document.querySelectorAll(t).length){console.warn('DEBUG PLUGIN: It seems there are some links with a href attribute not starting with "#", "/" or current domain, which is potentially a problem.',document.querySelectorAll(t))}if(document.querySelectorAll(t).length){console.warn('DEBUG PLUGIN: It seems there are some links with a href attribute not starting with "#", "/" or current domain, which is potentially a problem.',document.querySelectorAll(t))}}))}},{key:"unmount",value:function(){this.swup.log=function(){},this.swup.triggerEvent=this.swup._triggerEvent}}]),t}(((o=i)&&o.__esModule?o:{default:o}).default);t.default=a},2460:e=>{var t;window,t=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o};e.exports=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=s(n(2)),a=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name="FadeTheme",n.options=o({},{mainElement:"#swup"},e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"mount",value:function(){this.applyStyles(a.default),this.addClassName(this.options.mainElement,"main")}}]),t}(i.default);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._addedStyleElements=[],this._addedHTMLContent=[],this._classNameAddedToElements=[],this._addClassNameToElement=function(){t._classNameAddedToElements.forEach((function(e){Array.prototype.slice.call(document.querySelectorAll(e.selector)).forEach((function(t){t.classList.add("swup-transition-"+e.name)}))}))},this.isSwupPlugin=!0}return o(e,[{key:"_beforeMount",value:function(){this._originalAnimationSelectorOption=String(this.swup.options.animationSelector),this.swup.options.animationSelector='[class*="swup-transition-"]',this.swup.on("contentReplaced",this._addClassNameToElement)}},{key:"_afterUnmount",value:function(){this.swup.options.animationSelector=this._originalAnimationSelectorOption,this._addedStyleElements.forEach((function(e){e.outerHTML="",e=null})),this._addedHTMLContent.forEach((function(e){e.outerHTML="",e=null})),this._classNameAddedToElements.forEach((function(e){Array.prototype.slice.call(document.querySelectorAll(e.selector)).forEach((function(e){e.className.split(" ").forEach((function(t){new RegExp("^swup-transition-").test(t)&&e.classList.remove(t)}))}))})),this.swup.off("contentReplaced",this._addClassNameToElement)}},{key:"mount",value:function(){}},{key:"unmount",value:function(){}},{key:"applyStyles",value:function(e){var t=document.head,n=document.createElement("style");n.setAttribute("data-swup-theme",""),n.appendChild(document.createTextNode(e)),this._addedStyleElements.push(n),t.prepend(n)}},{key:"applyHTML",value:function(e){var t=document.createElement("div");t.innerHTML=e,this._addedHTMLContent.push(t),document.body.appendChild(t)}},{key:"addClassName",value:function(e,t){this._classNameAddedToElements.push({selector:e,name:t}),this._addClassNameToElement()}}]),e}();t.default=r},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".swup-transition-main {\n    opacity: 1;\n    transition: opacity .4s;\n}\n\nhtml.is-animating .swup-transition-main {\n    opacity: 0;\n}",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var i=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[o].concat(a).concat([i]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}}])},e.exports=t()},3766:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=l(n(4537)),a=l(n(8919)),s=n(474),u=n(7004);function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.name="FormsPlugin";return n.options=o({},{formSelector:"form[data-swup-form]"},e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"mount",value:function(){var e=this.swup;e._handlers.submitForm=[],e._handlers.openFormSubmitInNewTab=[],e.delegatedListeners.formSubmit=(0,a.default)(document,this.options.formSelector,"submit",this.onFormSubmit.bind(this))}},{key:"unmount",value:function(){swup.delegatedListeners.formSubmit.destroy()}},{key:"onFormSubmit",value:function(e){var t=this.swup;if(e.metaKey)t.triggerEvent("openFormSubmitInNewTab",e);else{var n=e.target,o=new FormData(n),r=n.getAttribute("action")||window.location.href,i=n.getAttribute("method")||"GET",a=new u.Link(r);if(t.triggerEvent("submitForm",e),e.preventDefault(),""!=a.getHash()&&(t.scrollToElement=a.getHash()),"get"!=i.toLowerCase())t.cache.remove(a.getAddress()),t.loadPage({url:a.getAddress(),method:i,data:o});else{var l=a.getAddress()||window.location.href,c=(0,s.queryAll)("input, select",n);-1==l.indexOf("?")?l+="?":l+="&",c.forEach((function(e){"checkbox"==e.type||"radio"==e.type?e.checked&&(l+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"):l+=encodeURIComponent(e.name)+"="+encodeURIComponent(e.value)+"&"})),l=l.slice(0,-1),t.cache.remove(l),t.loadPage({url:l})}}}}]),t}(i.default);t.default=c},708:e=>{if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},8919:(e,t,n)=>{var o=n(708);function r(e,t,n,o,r){var a=i.apply(this,arguments);return e.addEventListener(n,a,r),{destroy:function(){e.removeEventListener(n,a,r)}}}function i(e,t,n,r){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,o,i){return"function"==typeof e.addEventListener?r.apply(null,arguments):"function"==typeof n?r.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return r(e,t,n,o,i)})))}},4537:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isSwupPlugin=!0}return n(e,[{key:"mount",value:function(){}},{key:"unmount",value:function(){}},{key:"_beforeMount",value:function(){}},{key:"_afterUnmount",value:function(){}}]),e}();t.default=o},9717:e=>{var t;window,t=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o};e.exports=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=s(n(2)),a=s(n(3));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name="SlideTheme",n.options=o({},{mainElement:"#swup",reversed:!1},e),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"mount",value:function(){this.applyStyles(a.default),this.addClassName(this.options.mainElement,"main"),this.options.reversed&&document.documentElement.classList.add("swup-theme-reverse")}},{key:"unmount",value:function(){document.documentElement.classList.remove("swup-theme-reverse")}}]),t}(i.default);t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._addedStyleElements=[],this._addedHTMLContent=[],this._classNameAddedToElements=[],this._addClassNameToElement=function(){t._classNameAddedToElements.forEach((function(e){Array.prototype.slice.call(document.querySelectorAll(e.selector)).forEach((function(t){t.classList.add("swup-transition-"+e.name)}))}))},this.isSwupPlugin=!0}return o(e,[{key:"_beforeMount",value:function(){this._originalAnimationSelectorOption=String(this.swup.options.animationSelector),this.swup.options.animationSelector='[class*="swup-transition-"]'}},{key:"_afterUnmount",value:function(){this.swup.options.animationSelector=this._originalAnimationSelectorOption,this._addedStyleElements.forEach((function(e){e.outerHTML="",e=null})),this._addedHTMLContent.forEach((function(e){e.outerHTML="",e=null})),this._classNameAddedToElements.forEach((function(e){Array.prototype.slice.call(document.querySelectorAll(e.selector)).forEach((function(e){e.className.split(" ").forEach((function(t){new RegExp("^swup-transition-").test(t)&&e.classList.remove(t)}))}))})),this.swup.off("contentReplaced",this._addClassNameToElement)}},{key:"mount",value:function(){}},{key:"unmount",value:function(){}},{key:"applyStyles",value:function(e){var t=document.head,n=document.createElement("style");n.setAttribute("data-swup-theme",""),n.appendChild(document.createTextNode(e)),this._addedStyleElements.push(n),t.prepend(n)}},{key:"applyHTML",value:function(e){var t=document.createElement("div");t.innerHTML=e,this._addedHTMLContent.push(t),document.body.appendChild(t)}},{key:"addClassName",value:function(e,t){this._classNameAddedToElements.push({selector:e,name:t}),this._addClassNameToElement(),this.swup.on("contentReplaced",this._addClassNameToElement)}}]),e}();t.default=r},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,".swup-transition-main {\n  opacity: 1;\n  transition: opacity 0.3s, transform 0.4s;\n  transform: translate3d(0, 0, 0);\n}\nhtml.is-animating .swup-transition-main {\n  opacity: 0;\n  transform: translate3d(0, -60px, 0);\n}\nhtml.is-animating.is-leaving .swup-transition-main {\n  opacity: 0;\n  transform: translate3d(0, 60px, 0);\n}\nhtml.is-animating.swup-theme-reverse .swup-transition-main {\n  opacity: 0;\n  transform: translate3d(0, 60px, 0);\n}\nhtml.is-animating.swup-theme-reverse.is-leaving .swup-transition-main {\n  opacity: 0;\n  transform: translate3d(0, -60px, 0);\n}\n",""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,o=e[1]||"",r=e[3];if(!r)return o;if(t&&"function"==typeof btoa){var i=(n=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=r.sources.map((function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"}));return[o].concat(a).concat([i]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}}])},e.exports=t()},8473:(e,t,n)=>{"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(7931),i=c(n(2593)),a=c(n(3784)),s=c(n(3766)),u=c(n(2460)),l=c(n(9717));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(c,e);var t,n,o,r=h(c);function c(){return f(this,c),r.apply(this,arguments)}return t=c,(n=[{key:"connect",value:function(){var e={containers:["#swup"],cache:this.element.hasAttribute("data-cache"),animateHistoryBrowsing:this.element.hasAttribute("data-animate-history-browsing"),plugins:["slide"===this.element.getAttribute("data-theme")?new l.default:new u.default,new s.default]};this.element.getAttribute("data-containers")&&(e.containers=this.element.getAttribute("data-containers").split(" ")),this.element.getAttribute("data-link-selector")&&(e.linkSelector=this.element.getAttribute("data-link-selector")),this.element.getAttribute("data-animation-selector")&&(e.animationSelector=this.element.getAttribute("data-animation-selector")),this.element.hasAttribute("data-debug")&&e.plugins.push(new a.default);var t=new i.default(e);this._dispatchEvent("swup:connect",{swup:t,options:e})}},{key:"_dispatchEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r=document.createEvent("CustomEvent");r.initCustomEvent(e,n,o,t),this.element.dispatchEvent(r)}}])&&d(t.prototype,n),o&&d(t,o),c}(r.Controller);t.default=g},2828:e=>{if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},9438:(e,t,n)=>{var o=n(2828);function r(e,t,n,r){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&r.call(e,n)}}e.exports=function(e,t,n,o,i){var a=r.apply(this,arguments);return e.addEventListener(n,a,i),{destroy:function(){e.removeEventListener(n,a,i)}}}},3341:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t instanceof Element||t instanceof SVGElement?this.link=t:(this.link=document.createElement("a"),this.link.href=t)}return n(e,[{key:"getPath",value:function(){var e=this.link.pathname;return"/"!==e[0]&&(e="/"+e),e}},{key:"getAddress",value:function(){var e=this.link.pathname+this.link.search;return this.link.getAttribute("xlink:href")&&(e=this.link.getAttribute("xlink:href")),"/"!==e[0]&&(e="/"+e),e}},{key:"getHash",value:function(){return this.link.hash}}]),e}();t.default=o},9628:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");return"/"===t[0]&&(t=t.splice(1)),""===t&&(t="homepage"),t}},7477:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){window.history.pushState({url:e||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,e||window.location.href.split(window.location.hostname)[1])}},47:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}},r=n({},o,e),i=new XMLHttpRequest;return i.onreadystatechange=function(){4===i.readyState&&(i.status,t(i))},i.open(r.method,r.url,!0),Object.keys(r.headers).forEach((function(e){i.setRequestHeader(e,r.headers[e])})),i.send(r.data),i}},6213:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){return window.location.pathname+window.location.search}},2502:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(474);t.default=function(e,t){var n=document.createElement("html");n.innerHTML=e;for(var i=[],a=function(e){if(null==n.querySelector(t[e]))return{v:null};(0,r.queryAll)(t[e]).forEach((function(o,a){(0,r.queryAll)(t[e],n)[a].setAttribute("data-swup",i.length),i.push((0,r.queryAll)(t[e],n)[a].outerHTML)}))},s=0;s<t.length;s++){var u=a(s);if("object"===(void 0===u?"undefined":o(u)))return u.v}var l={title:n.querySelector("title").innerText,pageClass:n.querySelector("body").className,originalContent:e,blocks:i};return n.innerHTML="",n=null,l}},7004:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.markSwupElements=t.getCurrentUrl=t.transitionEnd=t.fetch=t.getDataFromHtml=t.createHistoryRecord=t.classify=void 0;var o=f(n(9628)),r=f(n(7477)),i=f(n(2502)),a=f(n(47)),s=f(n(4880)),u=f(n(6213)),l=f(n(2587)),c=f(n(3341));function f(e){return e&&e.__esModule?e:{default:e}}t.classify=o.default,t.createHistoryRecord=r.default,t.getDataFromHtml=i.default,t.fetch=a.default,t.transitionEnd=s.default,t.getCurrentUrl=u.default,t.markSwupElements=l.default,t.Link=c.default},2587:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(474);t.default=function(e,t){for(var n=0,r=function(r){null==e.querySelector(t[r])?console.warn("Element "+t[r]+" is not in current page."):(0,o.queryAll)(t[r]).forEach((function(i,a){(0,o.queryAll)(t[r],e)[a].setAttribute("data-swup",n),n++}))},i=0;i<t.length;i++)r(i)}},4880:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(){var e=document.createElement("div"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in t)if(void 0!==e.style[n])return t[n];return!1}},2593:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=v(n(9438)),a=v(n(331)),s=v(n(2275)),u=v(n(4666)),l=v(n(6198)),c=v(n(587)),f=v(n(6889)),d=v(n(1728)),p=v(n(578)),h=v(n(7315)),m=n(1582),y=n(474),g=n(7004);function v(e){return e&&e.__esModule?e:{default:e}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var n={animateHistoryBrowsing:!1,animationSelector:'[class*="transition-"]',linkSelector:'a[href^="'+window.location.origin+'"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',cache:!0,containers:["#swup"],requestHeaders:{"X-Requested-With":"swup",Accept:"text/html, application/xhtml+xml"},plugins:[],skipPopStateHandling:function(e){return!(e.state&&"swup"===e.state.source)}},r=o({},n,t);this._handlers={animationInDone:[],animationInStart:[],animationOutDone:[],animationOutStart:[],animationSkipped:[],clickLink:[],contentReplaced:[],disabled:[],enabled:[],openPageInNewTab:[],pageLoaded:[],pageRetrievedFromCache:[],pageView:[],popState:[],samePage:[],samePageWithHash:[],serverError:[],transitionStart:[],transitionEnd:[],willReplaceContent:[]},this.scrollToElement=null,this.preloadPromise=null,this.options=r,this.plugins=[],this.transition={},this.delegatedListeners={},this.boundPopStateHandler=this.popStateHandler.bind(this),this.cache=new a.default,this.cache.swup=this,this.loadPage=s.default,this.renderPage=u.default,this.triggerEvent=l.default,this.on=c.default,this.off=f.default,this.updateTransition=d.default,this.getAnimationPromises=p.default,this.getPageData=h.default,this.log=function(){},this.use=m.use,this.unuse=m.unuse,this.findPlugin=m.findPlugin,this.enable()}return r(e,[{key:"enable",value:function(){var e=this;if("undefined"!=typeof Promise){this.delegatedListeners.click=(0,i.default)(document,this.options.linkSelector,"click",this.linkClickHandler.bind(this)),window.addEventListener("popstate",this.boundPopStateHandler);var t=(0,g.getDataFromHtml)(document.documentElement.outerHTML,this.options.containers);t.url=t.responseURL=(0,g.getCurrentUrl)(),this.options.cache&&this.cache.cacheUrl(t),(0,g.markSwupElements)(document.documentElement,this.options.containers),this.options.plugins.forEach((function(t){e.use(t)})),window.history.replaceState(Object.assign({},window.history.state,{url:window.location.href,random:Math.random(),source:"swup"}),document.title,window.location.href),this.triggerEvent("enabled"),document.documentElement.classList.add("swup-enabled"),this.triggerEvent("pageView")}else console.warn("Promise is not supported")}},{key:"destroy",value:function(){var e=this;this.delegatedListeners.click.destroy(),window.removeEventListener("popstate",this.boundPopStateHandler),this.cache.empty(),this.options.plugins.forEach((function(t){e.unuse(t)})),(0,y.queryAll)("[data-swup]").forEach((function(e){e.removeAttribute("data-swup")})),this.off(),this.triggerEvent("disabled"),document.documentElement.classList.remove("swup-enabled")}},{key:"linkClickHandler",value:function(e){if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)this.triggerEvent("openPageInNewTab",e);else if(0===e.button){this.triggerEvent("clickLink",e),e.preventDefault();var t=new g.Link(e.delegateTarget);if(t.getAddress()==(0,g.getCurrentUrl)()||""==t.getAddress()){if(""!=t.getHash())this.triggerEvent("samePageWithHash",e),null!=document.querySelector(t.getHash())?history.replaceState({url:t.getAddress()+t.getHash(),random:Math.random(),source:"swup"},document.title,t.getAddress()+t.getHash()):console.warn("Element for offset not found ("+t.getHash()+")");else this.triggerEvent("samePage",e)}else{""!=t.getHash()&&(this.scrollToElement=t.getHash());var n=e.delegateTarget.getAttribute("data-swup-transition");this.loadPage({url:t.getAddress(),customTransition:n},!1)}}}},{key:"popStateHandler",value:function(e){if(!this.options.skipPopStateHandling(e)){var t=new g.Link(e.state?e.state.url:window.location.pathname);""!==t.getHash()?this.scrollToElement=t.getHash():e.preventDefault(),this.triggerEvent("popState",e),this.loadPage({url:t.getAddress()},e)}}}]),e}();t.default=b},331:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();var o=t.Cache=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pages={},this.last=null}return n(e,[{key:"cacheUrl",value:function(e){e.url in this.pages==!1&&(this.pages[e.url]=e),this.last=this.pages[e.url],this.swup.log("Cache ("+Object.keys(this.pages).length+")",this.pages)}},{key:"getPage",value:function(e){return this.pages[e]}},{key:"getCurrentPage",value:function(){return this.getPage(window.location.pathname+window.location.search)}},{key:"exists",value:function(e){return e in this.pages}},{key:"empty",value:function(){this.pages={},this.last=null,this.swup.log("Cache cleared")}},{key:"remove",value:function(e){delete this.pages[e]}}]),e}();t.default=o},578:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(474),r=n(7004);t.default=function(){var e=[];return(0,o.queryAll)(this.options.animationSelector).forEach((function(t){var n=new Promise((function(e){t.addEventListener((0,r.transitionEnd)(),(function(n){t==n.target&&e()}))}));e.push(n)})),e}},7315:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7004);t.default=function(e){var t=e.responseText,n=(0,o.getDataFromHtml)(t,this.options.containers);return n?(n.responseURL=e.responseURL?e.responseURL:window.location.href,n):(console.warn("Received page is invalid."),null)}},2275:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(7004);t.default=function(e,t){var n=this,i=[],a=void 0;this.triggerEvent("transitionStart",t),null!=e.customTransition?(this.updateTransition(window.location.pathname,e.url,e.customTransition),document.documentElement.classList.add("to-"+(0,r.classify)(e.customTransition))):this.updateTransition(window.location.pathname,e.url),!t||this.options.animateHistoryBrowsing?function(){if(n.triggerEvent("animationOutStart"),document.documentElement.classList.add("is-changing"),document.documentElement.classList.add("is-leaving"),document.documentElement.classList.add("is-animating"),t&&document.documentElement.classList.add("is-popstate"),document.documentElement.classList.add("to-"+(0,r.classify)(e.url)),i=n.getAnimationPromises("out"),Promise.all(i).then((function(){n.triggerEvent("animationOutDone")})),!t){var o=void 0;o=null!=n.scrollToElement?e.url+n.scrollToElement:e.url,(0,r.createHistoryRecord)(o)}}():this.triggerEvent("animationSkipped"),this.cache.exists(e.url)?(a=new Promise((function(e){e()})),this.triggerEvent("pageRetrievedFromCache")):a=this.preloadPromise&&this.preloadPromise.route==e.url?this.preloadPromise:new Promise((function(t,i){(0,r.fetch)(o({},e,{headers:n.options.requestHeaders}),(function(o){if(500===o.status)return n.triggerEvent("serverError"),void i(e.url);var r=n.getPageData(o);null!=r?(r.url=e.url,n.cache.cacheUrl(r),n.triggerEvent("pageLoaded"),t()):i(e.url)}))})),Promise.all(i.concat([a])).then((function(){n.renderPage(n.cache.getPage(e.url),t),n.preloadPromise=null})).catch((function(e){n.options.skipPopStateHandling=function(){return window.location=e,!0},window.history.go(-1)}))}},6889:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){var n=this;if(null!=e)if(null!=t)if(this._handlers[e]&&this._handlers[e].filter((function(e){return e===t})).length){var o=this._handlers[e].filter((function(e){return e===t}))[0],r=this._handlers[e].indexOf(o);r>-1&&this._handlers[e].splice(r,1)}else console.warn("Handler for event '"+e+"' no found.");else this._handlers[e]=[];else Object.keys(this._handlers).forEach((function(e){n._handlers[e]=[]}))}},587:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){this._handlers[e]?this._handlers[e].push(t):console.warn("Unsupported event "+e+".")}},1582:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.use=function(e){if(e.isSwupPlugin)return this.plugins.push(e),e.swup=this,"function"==typeof e._beforeMount&&e._beforeMount(),e.mount(),this.plugins;console.warn("Not swup plugin instance "+e+".")},t.unuse=function(e){var t=void 0;if(t="string"==typeof e?this.plugins.find((function(t){return e===t.name})):e){t.unmount(),"function"==typeof t._afterUnmount&&t._afterUnmount();var n=this.plugins.indexOf(t);return this.plugins.splice(n,1),this.plugins}console.warn("No such plugin.")},t.findPlugin=function(e){return this.plugins.find((function(t){return e===t.name}))}},4666:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(n(474),n(7004));t.default=function(e,t){var n=this;document.documentElement.classList.remove("is-leaving");var i=new r.Link(e.responseURL);window.location.pathname!==i.getPath()&&(window.history.replaceState({url:i.getPath(),random:Math.random(),source:"swup"},document.title,i.getPath()),this.cache.cacheUrl(o({},e,{url:i.getPath()}))),t&&!this.options.animateHistoryBrowsing||document.documentElement.classList.add("is-rendering"),this.triggerEvent("willReplaceContent",t);for(var a=0;a<e.blocks.length;a++)document.body.querySelector('[data-swup="'+a+'"]').outerHTML=e.blocks[a];if(document.title=e.title,this.triggerEvent("contentReplaced",t),this.triggerEvent("pageView",t),this.options.cache||this.cache.empty(),setTimeout((function(){t&&!n.options.animateHistoryBrowsing||(n.triggerEvent("animationInStart"),document.documentElement.classList.remove("is-animating"))}),10),!t||this.options.animateHistoryBrowsing){var s=this.getAnimationPromises("in");Promise.all(s).then((function(){n.triggerEvent("animationInDone"),n.triggerEvent("transitionEnd",t),document.documentElement.className.split(" ").forEach((function(e){(new RegExp("^to-").test(e)||"is-changing"===e||"is-rendering"===e||"is-popstate"===e)&&document.documentElement.classList.remove(e)}))}))}else this.triggerEvent("transitionEnd",t);this.scrollToElement=null}},6198:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){this._handlers[e].forEach((function(e){try{e(t)}catch(e){console.error(e)}}));var n=new CustomEvent("swup:"+e,{detail:e});document.dispatchEvent(n)}},1728:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t,n){this.transition={from:e,to:t,custom:n}}},474:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.query=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:t.querySelector(e)},t.queryAll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"!=typeof e?e:Array.prototype.slice.call(t.querySelectorAll(e))}}}]);