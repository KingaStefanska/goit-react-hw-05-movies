"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{443:function(e,t,r){r.d(t,{Hg:function(){return i},pm:function(){return o}});var n=r(861),a=r(757),c=r.n(a),u=r(263);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="39ea42ad0e0931902f179ffc59d3f46a",i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={getTrending:i,getQuery:o,getDetails:p,getCast:f,getReviews:l};t.ZP=d},76:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(439),a=r(791),c=r(689),u=r(443),s={},i=r(184),o=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],o=t[1],p=(0,c.UO)().movieId;if((0,a.useEffect)((function(){(0,u.ZP)(p).then(o)}),[p]),r)return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:s.ul,children:r.map((function(e){return(0,i.jsxs)("li",{className:s.li,children:[(0,i.jsx)("img",{className:s.img,src:e.profile_path?"https://www.themoviedb.org/t/p/w500/".concat(e.profile_path):"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:e.original_name}),(0,i.jsx)("h3",{className:s.h3,children:e.name}),(0,i.jsxs)("p",{className:s.p,children:["As: ",e.character]})]},e.id)}))})})}}}]);
//# sourceMappingURL=76.6f83833c.chunk.js.map