"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{443:function(e,t,n){n.d(t,{Hg:function(){return u},IQ:function(){return d},Jh:function(){return p},pm:function(){return o},s_:function(){return l}});var r=n(861),a=n(757),s=n.n(a),c=n(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="39ea42ad0e0931902f179ffc59d3f46a",u=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),a=n(791),s=n(87),c=n(689),i=n(443),u={backLink:"MovieDetails_backLink__haiys",div:"MovieDetails_div__40K5M",link:"MovieDetails_link__wf74g",ul:"MovieDetails_ul__LdwzG"},o=n(184),l=function(){var e,t,n=(0,a.useState)(null),l=(0,r.Z)(n,2),d=l[0],p=l[1],h=(0,c.UO)().movieId,f=(0,c.TH)(),v=(0,a.useRef)(null!==(e=null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");if((0,a.useEffect)((function(){(0,i.s_)(h).then(p)}),[h]),d)return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.rU,{className:u.backLink,to:v.current,children:"Go back"}),(0,o.jsxs)("div",{className:u.div,children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{className:u.img,src:d.poster_path?"https://www.themoviedb.org/t/p/w500/".concat(d.poster_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:"".concat(d.title)})}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("h2",{className:u.h2,children:[d.title," (",d.release_date.slice(0,5),")"]}),(0,o.jsxs)("p",{className:u.p,children:["Rating: ",d.vote_average.toFixed(2)]}),(0,o.jsx)("h3",{className:u.h3,children:"Overview"}),(0,o.jsx)("p",{className:u.p,children:d.overview}),(0,o.jsx)("h3",{className:u.h3,children:"Genres"}),(0,o.jsx)("p",{className:u.p,children:d.genres.map((function(e){return e.name})).join(" / ")})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:u.h2,children:"Additional information"}),(0,o.jsxs)("ul",{className:u.ul,children:[(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{className:u.link,to:"cast",children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{className:u.link,to:"reviews",children:"Reviews"})})]})]}),(0,o.jsx)(a.Suspense,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:(0,o.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=888.292abfa4.chunk.js.map