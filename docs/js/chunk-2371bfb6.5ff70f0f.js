(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2371bfb6"],{"154c":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Generic",{attrs:{item:t.item},scopedSlots:t._u([{key:"indicator",fn:function(){return[n("div",{staticClass:"notifs"},[t.activity>0?n("strong",{staticClass:"notif activity",attrs:{title:"Activity"}},[t._v(" "+t._s(t.activity)+" ")]):t._e(),t.warnings>0?n("strong",{staticClass:"notif warnings",attrs:{title:"Warning"}},[t._v(" "+t._s(t.warnings)+" ")]):t._e(),t.errors>0?n("strong",{staticClass:"notif errors",attrs:{title:"Error"}},[t._v(" "+t._s(t.errors)+" ")]):t._e(),t.serverError?n("strong",{staticClass:"notif errors",attrs:{title:"Connection error to Sonarr API, check url and apikey in config.yml"}},[t._v(" ? ")]):t._e()])]},proxy:!0}])})},i=[],s=(n("27e5"),n("c55c")),o=n("fd6b"),c="/api/v3",a="/api",u={name:"Sonarr",mixins:[s["a"]],props:{item:Object},components:{Generic:o["default"]},computed:{apiPath:function(){return this.item.legacyApi?a:c}},data:function(){return{activity:null,warnings:null,errors:null,serverError:!1}},created:function(){this.fetchConfig()},methods:{fetchConfig:function(){var t=this;this.fetch("".concat(this.apiPath,"/health?apikey=").concat(this.item.apikey)).then((function(e){t.warnings=0,t.errors=0;for(var n=0;n<e.length;n++)"warning"==e[n].type?t.warnings++:"error"==e[n].type&&t.errors++})).catch((function(e){console.error(e),t.serverError=!0})),this.fetch("".concat(this.apiPath,"/queue?apikey=").concat(this.item.apikey)).then((function(e){if(t.activity=0,t.item.legacyApi)for(var n=0;n<e.length;n++)e[n].series&&t.activity++;else t.activity=e.totalRecords})).catch((function(e){console.error(e),t.serverError=!0}))}}},f=u,h=(n("607c"),n("b709")),l=Object(h["a"])(f,r,i,!1,null,"7f49e0b4",null);e["default"]=l.exports},"607c":function(t,e,n){"use strict";n("b3ff")},6657:function(t,e,n){"use strict";var r=n("d6de"),i=n("e3e8"),s=n("aeda").f,o=n("7714"),c=n("5569"),a=n("28dd"),u=n("d568"),f=n("6b2d"),h=n("c1f8"),l=i("".startsWith),d=i("".slice),p=Math.min,v=f("startsWith"),g=!h&&!v&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!g&&!v},{startsWith:function(t){var e=c(u(this));a(t);var n=o(p(arguments.length>1?arguments[1]:void 0,e.length)),r=c(t);return l?l(e,r,n):d(e,n,n+r.length)===r}})},"8cdd":function(t,e,n){"use strict";var r=n("49bb").PROPER,i=n("0b9c"),s=n("31bb"),o=n("5569"),c=n("8480"),a=n("9354"),u="toString",f=RegExp.prototype,h=f[u],l=c((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),d=r&&h.name!=u;(l||d)&&i(RegExp.prototype,u,(function(){var t=s(this),e=o(t.source),n=o(a(t));return"/"+e+"/"+n}),{unsafe:!0})},9354:function(t,e,n){var r=n("e40b"),i=n("460c"),s=n("6b1e"),o=n("e281"),c=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in c||i(t,"flags")||!s(c,t)?e:r(o,t)}},b3ff:function(t,e,n){},bc26:function(t,e,n){"use strict";var r=n("d6de"),i=n("e3e8"),s=n("aeda").f,o=n("7714"),c=n("5569"),a=n("28dd"),u=n("d568"),f=n("6b2d"),h=n("c1f8"),l=i("".endsWith),d=i("".slice),p=Math.min,v=f("endsWith"),g=!h&&!v&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();r({target:"String",proto:!0,forced:!g&&!v},{endsWith:function(t){var e=c(u(this));a(t);var n=arguments.length>1?arguments[1]:void 0,r=e.length,i=void 0===n?r:p(o(n),r),s=c(t);return l?l(e,s,i):d(e,i-s.length,i)===s}})},c55c:function(t,e,n){"use strict";n("bc26"),n("f6aa"),n("093e"),n("8cdd"),n("6657"),n("27e5"),n("3971");e["a"]={props:{proxy:Object},created:function(){this.endpoint=this.item.endpoint||this.item.url,this.endpoint.endsWith("/")&&(this.endpoint=this.endpoint.slice(0,-1))},methods:{fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i={};null!==(n=this.proxy)&&void 0!==n&&n.useCredentials&&(i.credentials="include"),void 0!==this.item.useCredentials&&(i.credentials=!0===this.item.useCredentials?"include":"omit"),i=Object.assign(i,e),t.startsWith("/")&&(t=t.slice(1));var s=this.endpoint;return t&&(s="".concat(this.endpoint,"/").concat(t)),fetch(s,i).then((function(t){if(!t.ok)throw new Error("Not 2xx response");return r?t.json():t}))}))}}}}]);
//# sourceMappingURL=chunk-2371bfb6.5ff70f0f.js.map