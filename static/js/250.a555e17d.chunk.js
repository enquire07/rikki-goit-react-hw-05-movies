"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[250],{687:function(n,t,e){e.d(t,{BQ:function(){return h},Hx:function(){return v},Y5:function(){return f},wr:function(){return o},xc:function(){return p},z1:function(){return i}});var r=e(861),c=e(757),u=e.n(c),a="f3915ecc527b8b3874ce087ec4108796",s="https://api.themoviedb.org/3",o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/trending/movie/day?api_key=").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(a,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(t,"?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(a));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/genre/movie/list?api_key=").concat(a));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e.genres);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},673:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(861),c=e(439),u=e(757),a=e.n(u),s=e(791),o=e(689),i=e(687),f="Cast_cast__Yd9MD",p=e(184),v=function(){var n=(0,o.UO)().movieId,t=(0,s.useState)([]),e=(0,c.Z)(t,2),u=e[0],v=e[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.xc)(n);case 2:e=t.sent,v(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[n]),(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("h3",{children:"Cast"}),(0,p.jsx)("ul",{children:u.map((function(n){return(0,p.jsxs)("li",{children:[n.name," as ",n.character]},n.cast_id)}))})]})}},861:function(n,t,e){function r(n,t,e,r,c,u,a){try{var s=n[u](a),o=s.value}catch(i){return void e(i)}s.done?t(o):Promise.resolve(o).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,u){var a=n.apply(t,e);function s(n){r(a,c,u,s,o,"next",n)}function o(n){r(a,c,u,s,o,"throw",n)}s(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=250.a555e17d.chunk.js.map