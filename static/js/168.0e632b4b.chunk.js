"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{443:function(e,t,r){r.d(t,{Hg:function(){return i},pm:function(){return o}});var n=r(861),a=r(757),u=r.n(a),c=r(263);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="39ea42ad0e0931902f179ffc59d3f46a",i=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={getTrending:i,getQuery:o,getDetails:p,getCast:f,getReviews:l};t.ZP=v},168:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(439),a=r(791),u=r(689),c=r(443),s={},i=r(184),o=function(){var e=(0,a.useState)(null),t=(0,n.Z)(e,2),r=t[0],o=t[1],p=(0,u.UO)().movieId;if((0,a.useEffect)((function(){(0,c.ZP)(p).then(o)}),[p]),r)return(0,i.jsx)("div",{children:r.length>0?(0,i.jsx)("ul",{className:s.ul,children:r.map((function(e){return(0,i.jsxs)("li",{className:s.li,children:[(0,i.jsxs)("h3",{className:s.h3,children:["Author: ",e.author]}),(0,i.jsx)("p",{className:s.p,children:e.content})]},e.id)}))}):"We don't have any reviews for this movie"})}}}]);
//# sourceMappingURL=168.0e632b4b.chunk.js.map