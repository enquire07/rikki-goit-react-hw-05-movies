"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[230],{687:function(n,e,t){t.d(e,{BQ:function(){return h},Hx:function(){return v},Y5:function(){return f},wr:function(){return o},xc:function(){return p},z1:function(){return i}});var r=t(861),c=t(757),a=t.n(c),u="f3915ecc527b8b3874ce087ec4108796",s="https://api.themoviedb.org/3",o=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/trending/movie/day?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.results);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(e));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(e,"?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(a().mark((function n(e){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(u));case 2:return t=n.sent,n.next=5,t.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(){var e,t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/genre/movie/list?api_key=").concat(u));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t.genres);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},230:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var r=t(861),c=t(439),a=t(757),u=t.n(a),s=t(791),o=t(87),i=t(687),f="Home_home__VceHV",p="Home_movieList__y3dW+",v="Home_movieThumbnail__AX9IW",h="Home_movieTitle__Z1dgw",m="Home_movieGenres__UqZoQ",d=t(184),l=function(){var n=(0,s.useState)([]),e=(0,c.Z)(n,2),t=e[0],a=e[1],l=(0,s.useState)({}),x=(0,c.Z)(l,2),w=x[0],_=x[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.wr)();case 2:e=n.sent,a(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e=function(){var n=(0,r.Z)(u().mark((function n(){var e,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.BQ)();case 2:e=n.sent,t={},e.forEach((function(n){t[n.id]=n.name})),_(t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n(),e()}),[]),(0,d.jsxs)("div",{className:f,children:[(0,d.jsx)("nav",{children:(0,d.jsx)(o.rU,{to:"/movies",children:"MOVIES"})}),(0,d.jsx)("h2",{children:"Trending Movies"}),(0,d.jsx)("div",{className:p,children:t.map((function(n){return(0,d.jsxs)("div",{className:v,children:[(0,d.jsx)(o.rU,{to:"/movies/".concat(n.id),children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(n.poster_path),alt:n.title})}),(0,d.jsx)("div",{className:h,children:n.title}),(0,d.jsx)("div",{className:m,children:n.genre_ids.map((function(n){return(0,d.jsxs)("span",{children:[w[n]," "]},n)}))})]},n.id)}))})]})}},861:function(n,e,t){function r(n,e,t,r,c,a,u){try{var s=n[a](u),o=s.value}catch(i){return void t(i)}s.done?e(o):Promise.resolve(o).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var u=n.apply(e,t);function s(n){r(u,c,a,s,o,"next",n)}function o(n){r(u,c,a,s,o,"throw",n)}s(void 0)}))}}t.d(e,{Z:function(){return c}})}}]);
//# sourceMappingURL=230.260d3fa3.chunk.js.map