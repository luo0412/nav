(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-513e4b73"],{"25f0":function(t,e,n){"use strict";var r=n("5e77").PROPER,i=n("cb2d"),s=n("825a"),a=n("577e"),c=n("d039"),o=n("90d8"),u="toString",f=RegExp.prototype,h=f[u],d=c((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),l=r&&h.name!=u;(d||l)&&i(RegExp.prototype,u,(function(){var t=s(this),e=a(t.source),n=a(o(t));return"/"+e+"/"+n}),{unsafe:!0})},"2ca0":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("06cf").f,a=n("50c4"),c=n("577e"),o=n("5a34"),u=n("1d80"),f=n("ab13"),h=n("c430"),d=i("".startsWith),l=i("".slice),p=Math.min,v=f("startsWith"),b=!h&&!v&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!b&&!v},{startsWith:function(t){var e=c(u(this));o(t);var n=a(p(arguments.length>1?arguments[1]:void 0,e.length)),r=c(t);return d?d(e,r,n):l(e,n,n+r.length)===r}})},"8a79":function(t,e,n){"use strict";var r=n("23e7"),i=n("e330"),s=n("06cf").f,a=n("50c4"),c=n("577e"),o=n("5a34"),u=n("1d80"),f=n("ab13"),h=n("c430"),d=i("".endsWith),l=i("".slice),p=Math.min,v=f("endsWith"),b=!h&&!v&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!b&&!v},{endsWith:function(t){var e=c(u(this));o(t);var n=arguments.length>1?arguments[1]:void 0,r=e.length,i=void 0===n?r:p(a(n),r),s=c(t);return d?d(e,s,i):l(e,i-s.length,i)===s}})},"90d8":function(t,e,n){var r=n("c65b"),i=n("1a2d"),s=n("3a9b"),a=n("ad6d"),c=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in c||i(t,"flags")||!s(c,t)?e:r(a,t)}},b284:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Generic",{attrs:{item:t.item},scopedSlots:t._u([{key:"indicator",fn:function(){return[n("div",{staticClass:"notifs"},[t.streams>0?n("strong",{staticClass:"notif playing",attrs:{title:t.streams+" active stream"+(t.streams>1?"s":"")}},[t._v(" "+t._s(t.streams)+" ")]):t._e(),t.error?n("i",{staticClass:"notif error fa-solid fa-triangle-exclamation",attrs:{title:"Unable to fetch current status"}}):t._e()])]},proxy:!0}])})},i=[],s=n("c7eb"),a=n("1da1"),c=n("c55c"),o=n("fd6b"),u={name:"Tautulli",mixins:[c["a"]],props:{item:Object},components:{Generic:o["default"]},data:function(){return{stats:null,error:!1}},computed:{streams:function(){return this.stats?this.stats.stream_count:""}},created:function(){this.fetchStatus()},methods:{fetchStatus:function(){var t=Object(a["a"])(Object(s["a"])().mark((function t(){var e;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.fetch("/api/v2?apikey=".concat(this.item.apikey,"&cmd=get_activity"));case 3:e=t.sent,this.error=!1,this.stats=e.response.data,t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),this.error=!0,console.error(t.t0);case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()}},f=u,h=(n("f29e"),n("2877")),d=Object(h["a"])(f,r,i,!1,null,"58cb1202",null);e["default"]=d.exports},b99b:function(t,e,n){},c55c:function(t,e,n){"use strict";n("8a79"),n("fb6a"),n("d3b7"),n("25f0"),n("2ca0"),n("99af"),n("d9e2");e["a"]={props:{proxy:Object},created:function(){this.endpoint=this.item.endpoint||this.item.url,this.endpoint.endsWith("/")&&(this.endpoint=this.endpoint.slice(0,-1))},methods:{fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i={};null!==(n=this.proxy)&&void 0!==n&&n.useCredentials&&(i.credentials="include"),void 0!==this.item.useCredentials&&(i.credentials=!0===this.item.useCredentials?"include":"omit"),i=Object.assign(i,e),t.startsWith("/")&&(t=t.slice(1));var s=this.endpoint;return t&&(s="".concat(this.endpoint,"/").concat(t)),fetch(s,i).then((function(t){if(!t.ok)throw new Error("Not 2xx response");return r?t.json():t}))}))}}},f29e:function(t,e,n){"use strict";n("b99b")}}]);
//# sourceMappingURL=chunk-513e4b73.411d2d7f.js.map