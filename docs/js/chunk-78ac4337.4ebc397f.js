(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78ac4337"],{2109:function(t,e,n){},4988:function(t,e,n){"use strict";n("2109")},6657:function(t,e,n){"use strict";var i=n("d6de"),s=n("e3e8"),r=n("aeda").f,o=n("7714"),c=n("5569"),a=n("28dd"),u=n("d568"),h=n("6b2d"),d=n("c1f8"),f=s("".startsWith),l=s("".slice),p=Math.min,b=h("startsWith"),m=!d&&!b&&!!function(){var t=r(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!m&&!b},{startsWith:function(t){var e=c(u(this));a(t);var n=o(p(arguments.length>1?arguments[1]:void 0,e.length)),i=c(t);return f?f(e,i,n):l(e,n,n+i.length)===i}})},"7c23":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Generic",{attrs:{item:t.item},scopedSlots:t._u([{key:"content",fn:function(){return[n("p",{staticClass:"title is-4"},[t._v(t._s(t.item.name))]),n("p",{staticClass:"subtitle is-6"},[t.item.subtitle?[t._v(" "+t._s(t.item.subtitle)+" ")]:[t._v(" "+t._s(t.embyCount)+" ")]],2)]},proxy:!0},{key:"indicator",fn:function(){return[t.status?n("div",{staticClass:"status",class:t.status},[t._v(" "+t._s(t.status)+" ")]):t._e()]},proxy:!0}])})},s=[],r=n("9da1"),o=n("e3c6"),c=(n("27e5"),n("3971"),n("c55c")),a=n("fd6b"),u={name:"Emby",mixins:[c["a"]],props:{item:Object},components:{Generic:a["default"]},data:function(){return{status:"",albumCount:0,songCount:0,movieCount:0,seriesCount:0,episodeCount:0}},computed:{embyCount:function(){return"music"===this.item.libraryType?"".concat(this.songCount," songs, ").concat(this.albumCount," albums"):"movies"===this.item.libraryType?"".concat(this.movieCount," movies"):"series"===this.item.libraryType?"".concat(this.episodeCount," eps, ").concat(this.seriesCount," series"):"wrong library type 💀"}},created:function(){this.fetchServerStatus(),this.item.subtitle||"dead"===this.status||this.fetchServerMediaStats()},methods:{fetchServerStatus:function(){var t=Object(o["a"])(Object(r["a"])().mark((function t(){var e=this;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.fetch("/System/info/public").then((function(t){if(!t.Id)throw new Error;e.status="running"})).catch((function(t){console.log(t),e.status="dead"}));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchServerMediaStats:function(){var t=Object(o["a"])(Object(r["a"])().mark((function t(){var e,n;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={"X-Emby-Token":this.item.apikey},t.next=3,this.fetch("/items/counts",{headers:e}).catch((function(t){console.log(t)}));case 3:n=t.sent,this.albumCount=n.AlbumCount,this.songCount=n.SongCount,this.movieCount=n.MovieCount,this.seriesCount=n.SeriesCount,this.episodeCount=n.EpisodeCount;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},h=u,d=(n("4988"),n("b709")),f=Object(d["a"])(h,i,s,!1,null,"6a5d3ff0",null);e["default"]=f.exports},"8cdd":function(t,e,n){"use strict";var i=n("49bb").PROPER,s=n("0b9c"),r=n("31bb"),o=n("5569"),c=n("8480"),a=n("9354"),u="toString",h=RegExp.prototype,d=h[u],f=c((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),l=i&&d.name!=u;(f||l)&&s(RegExp.prototype,u,(function(){var t=r(this),e=o(t.source),n=o(a(t));return"/"+e+"/"+n}),{unsafe:!0})},9354:function(t,e,n){var i=n("e40b"),s=n("460c"),r=n("6b1e"),o=n("e281"),c=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in c||s(t,"flags")||!r(c,t)?e:i(o,t)}},bc26:function(t,e,n){"use strict";var i=n("d6de"),s=n("e3e8"),r=n("aeda").f,o=n("7714"),c=n("5569"),a=n("28dd"),u=n("d568"),h=n("6b2d"),d=n("c1f8"),f=s("".endsWith),l=s("".slice),p=Math.min,b=h("endsWith"),m=!d&&!b&&!!function(){var t=r(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!m&&!b},{endsWith:function(t){var e=c(u(this));a(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,s=void 0===n?i:p(o(n),i),r=c(t);return f?f(e,r,s):l(e,s-r.length,s)===r}})},c55c:function(t,e,n){"use strict";n("bc26"),n("f6aa"),n("093e"),n("8cdd"),n("6657"),n("27e5"),n("3971");e["a"]={props:{proxy:Object},created:function(){this.endpoint=this.item.endpoint||this.item.url,this.endpoint.endsWith("/")&&(this.endpoint=this.endpoint.slice(0,-1))},methods:{fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s={};null!==(n=this.proxy)&&void 0!==n&&n.useCredentials&&(s.credentials="include"),void 0!==this.item.useCredentials&&(s.credentials=!0===this.item.useCredentials?"include":"omit"),s=Object.assign(s,e),t.startsWith("/")&&(t=t.slice(1));var r=this.endpoint;return t&&(r="".concat(this.endpoint,"/").concat(t)),fetch(r,s).then((function(t){if(!t.ok)throw new Error("Not 2xx response");return i?t.json():t}))}))}}}}]);
//# sourceMappingURL=chunk-78ac4337.4ebc397f.js.map