function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=a||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function m(t,e,n){var o,i,r,f,u,a,c=0,l=!1,s=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=o,r=i;return o=i=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,u=setTimeout(w,e),l?y(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||s&&t-c>=r}function w(){var t=p();if(h(t))return O(t);u=setTimeout(w,function(t){var n=e-(t-a);return s?v(n,r-(t-c)):n}(t))}function O(t){return u=void 0,m&&o?y(t):(o=i=void 0,f)}function S(){var t=p(),n=h(t);if(o=arguments,i=this,a=t,n){if(void 0===u)return j(a);if(s)return u=setTimeout(w,e),y(a)}return void 0===u&&(u=setTimeout(w,e)),f}return e=b(e)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,e):r,m="trailing"in n?!!n.trailing:m),S.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=i=u=void 0},S.flush=function(){return void 0===u?f:O(p())},S}function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(g(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=g(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||f.test(t)?u(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o=!0,i=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:o,maxWait:e,trailing:i})};const y=document.querySelector(".feedback-form");y.addEventListener("input",t(e)((function(t){t.preventDefault(),j[t.target.name]=t.target.value,function(){const t=JSON.stringify(j);localStorage.setItem("feedback-form-state",t)}()}),500)),y.addEventListener("submit",(function(t){t.preventDefault(),console.log(j),localStorage.removeItem("feedback-form-state"),y.reset()}));let j={};!function(){const t=localStorage.getItem("feedback-form-state");t&&(j=JSON.parse(t),function(){for(let t in j){const e=y.querySelector(`[name="${t}"]`);e&&(e.value=j[t])}}())}();
//# sourceMappingURL=03-feedback.9b9bd608.js.map