"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[88],{687:function(e,n,t){t.d(n,{BQ:function(){return h},Hx:function(){return v},Y5:function(){return f},wr:function(){return o},xc:function(){return p},z1:function(){return i}});var r=t(861),c=t(757),a=t.n(c),u="f3915ecc527b8b3874ce087ec4108796",s="https://api.themoviedb.org/3",o=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/trending/movie/day?api_key=").concat(u));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/search/movie?api_key=").concat(u,"&query=").concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(n,"?api_key=").concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.cast);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(u));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r.results);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(a().mark((function e(){var n,t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/genre/movie/list?api_key=").concat(u));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t.genres);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},88:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(861),c=t(439),a=t(757),u=t.n(a),s=t(791),o=t(87),i=t(687),f="Movies_movies__3leEo",p="Movies_searchForm__DAzA7",v="Movies_movieList__JVrzE",h="Movies_movieThumbnail__QBR45",l="Movies_movieTitle__FEK3w",m="Movies_movieGenres__WuXkF",d=t(184),x=function(){var e=(0,s.useState)(""),n=(0,c.Z)(e,2),t=n[0],a=n[1],x=(0,s.useState)([]),_=(0,c.Z)(x,2),w=_[0],k=_[1],y=(0,s.useState)({}),j=(0,c.Z)(y,2),b=j[0],Z=j[1];(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.BQ)();case 2:n=e.sent,t={},n.forEach((function(e){t[e.id]=e.name})),Z(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var g=function(){var e=(0,r.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,(0,i.z1)(t);case 3:r=e.sent,k(r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,d.jsxs)("div",{className:f,children:[(0,d.jsx)("h2",{children:"Search Movies"}),(0,d.jsxs)("form",{onSubmit:g,className:p,children:[(0,d.jsx)("input",{type:"text",value:t,onChange:function(e){return a(e.target.value)},placeholder:"Search for a movie..."}),(0,d.jsx)("button",{type:"submit",children:"Search"})]}),(0,d.jsx)("div",{className:v,children:w.map((function(e){return(0,d.jsxs)("div",{className:h,children:[(0,d.jsx)(o.rU,{to:"/movies/".concat(e.id),children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title})}),(0,d.jsx)("div",{className:l,children:e.title}),(0,d.jsx)("div",{className:m,children:e.genre_ids.map((function(e){return(0,d.jsxs)("span",{children:[b[e]," "]},e)}))})]},e.id)}))})]})}},861:function(e,n,t){function r(e,n,t,r,c,a,u){try{var s=e[a](u),o=s.value}catch(i){return void t(i)}s.done?n(o):Promise.resolve(o).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var u=e.apply(n,t);function s(e){r(u,c,a,s,o,"next",e)}function o(e){r(u,c,a,s,o,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=88.adfd75dd.chunk.js.map