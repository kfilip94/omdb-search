(this["webpackJsonpomdb-search"]=this["webpackJsonpomdb-search"]||[]).push([[0],{24:function(n,t,e){"use strict";e.r(t);var r=e(1),a=e(0),c=e.n(a),i=e(11),u=e.n(i),o=e(2),s=e(5),d=e(3);function l(){var n=Object(o.a)(["\n  font-size: 24px;\n  padding: 8px 0;\n  border-bottom: 1px solid lightgray;\n"]);return l=function(){return n},n}function b(){var n=Object(o.a)(["\n  display: flex;\n  margin: 32px 0;\n"]);return b=function(){return n},n}var j=d.b.div(b()),f=d.b.input(l()),p=function(n){var t=n.onValueChange,e=n.placeholder,a=null;return Object(r.jsx)(j,{children:Object(r.jsx)(f,{onKeyUp:function(n){var e=n.target.value;clearTimeout(a),a=setTimeout((function(){t(e)}),500)},placeholder:e})})},h=e(9),x=e.n(h),O=e(15),v=e(6),g="idle",m="pending",y="resolved",w="rejected",k=g,C=m,T=w,E=y,S=function(n,t){switch(t.type){case C:return{status:C,data:null,error:null};case E:return{status:E,data:t.data,error:null};case T:return{status:T,data:null,error:t.error};default:throw new Error("Unhandled action type: ".concat(t.type))}},F=function(n){var t=Object(a.useReducer)(S,Object(v.a)({status:k,data:null,error:null},n)),e=Object(s.a)(t,2),r=e[0],c=e[1],i=Object(a.useCallback)((function(n){c({type:C}),n.then((function(n){c({type:E,data:n})}),(function(n){c({type:T,error:n})}))}),[]);return Object(v.a)(Object(v.a)({},r),{},{run:i})};function P(){var n=Object(o.a)(["\n  width: 100%;\n"]);return P=function(){return n},n}var I=d.b.div(P());function L(){var n=Object(o.a)(["\n  color: gray;\n"]);return L=function(){return n},n}function z(){var n=Object(o.a)(["\n  margin-right: 16px;\n"]);return z=function(){return n},n}function B(){var n=Object(o.a)(["\n  border: 2px solid lightgray;\n  border-radius: 4px;\n  box-sizing: border-box;\n  display: flex;\n  padding: 16px;\n  margin: 4px 0;\n  width: 100%;\n"]);return B=function(){return n},n}var D=d.b.li(B()),J=d.b.div(z()),R=d.b.div(L()),U=function(n){var t=n.data,e=t.Title,a=t.Year;return Object(r.jsxs)(D,{children:[Object(r.jsx)(J,{children:e}),Object(r.jsx)(R,{children:a})]})},V=function(n){var t=n.data;return Object(r.jsx)("ul",{children:t&&t.map((function(n,t){return Object(r.jsx)(U,{data:n},n.imdbID)}))})};function K(){var n=Object(o.a)(["\n  font-style: italic;\n  text-align: left;\n"]);return K=function(){return n},n}var M=d.b.div(K()),Y=function(n){var t=n.status,e=n.search,a=n.data,c=n.error,i=w,u=y;return t!==g&&e?t===m?Object(r.jsx)(M,{children:"Loading..."}):t===i?Object(r.jsx)(M,{children:c.message}):t===u?Object(r.jsxs)("div",{children:[Object(r.jsx)(M,{children:'Results for "'.concat(e,'":')}),Object(r.jsx)(V,{data:a})]}):Object(r.jsx)(M,{children:"Oops, something went wrong..."}):Object(r.jsx)(M,{children:"Type a movie title to search"})},q=m,A=g,G=function(){var n=Object(a.useState)(""),t=Object(s.a)(n,2),e=t[0],c=t[1],i=F({status:e?q:A}),u=i.data,o=i.status,d=i.error,l=i.run;return Object(a.useEffect)((function(){e&&l(function(n){var t="".concat("https://www.omdbapi.com/","?apikey=").concat("4ce5d9af","&s=").concat(n,"&page=1");return fetch(t).then(function(){var n=Object(O.a)(x.a.mark((function n(t){var e,r,a,c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.json();case 2:if(e=n.sent,r=e.Search,a=e.Error,!t.ok){n.next=12;break}if(!r){n.next=9;break}return n.abrupt("return",r);case 9:return n.abrupt("return",Promise.reject(new Error(a)));case 10:n.next=14;break;case 12:return c={message:"Something went wrong with the response, try again later"},n.abrupt("return",Promise.reject(c));case 14:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}(e))}),[e,l]),Object(r.jsxs)(I,{children:[Object(r.jsx)(p,{onValueChange:function(n){return c(n)},placeholder:"type movie title..."}),Object(r.jsx)(Y,{search:e,data:u,status:o,error:d})]})};function H(){var n=Object(o.a)(["\n  button, input {\n    border: none;\n    user-select: none;\n    outline: none;\n    cursor: pointer;\n  }\n\n  ul {\n    list-style-type: none;\n    padding: 0;\n  }\n\n  * {\n    font-family: sans-serif;\n  }\n"]);return H=function(){return n},n}function N(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  text-align: center;\n  margin: auto;\n  border-radius: 8px;\n  overflow: hidden;\n  margin: auto;\n  max-width: 600px;\n"]);return N=function(){return n},n}var Q=d.b.div(N()),W=Object(d.a)(H()),X=function(){return Object(r.jsxs)(Q,{children:[Object(r.jsx)(W,{}),Object(r.jsx)(G,{})]})},Z=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),r(n),a(n),c(n),i(n)}))};u.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(X,{})}),document.getElementById("root")),Z()}},[[24,1,2]]]);
//# sourceMappingURL=main.8b785999.chunk.js.map