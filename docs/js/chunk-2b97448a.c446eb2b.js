(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b97448a"],{"21d5":function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("Generic",{attrs:{item:t.item},scopedSlots:t._u([{key:"indicator",fn:function(){return[r("div",{staticClass:"notifs"},[t.warnings>0?r("strong",{staticClass:"notif warnings",attrs:{title:"Warning"}},[t._v(" "+t._s(t.warnings)+" ")]):t._e(),t.errors>0?r("strong",{staticClass:"notif errors",attrs:{title:"Error"}},[t._v(" "+t._s(t.errors)+" ")]):t._e(),t.serverError?r("strong",{staticClass:"notif errors",attrs:{title:"Connection error to Prowlarr API, check url and apikey in config.yml"}},[t._v(" ? ")]):t._e()])]},proxy:!0}])})},i=[],s=r("c55c"),o=r("fd6b"),c={name:"Prowlarr",mixins:[s["a"]],props:{item:Object},components:{Generic:o["default"]},data:function(){return{warnings:null,errors:null,serverError:!1}},created:function(){this.fetchConfig()},methods:{fetchConfig:function(){var t=this;this.fetch("/api/v1/health?apikey=".concat(this.item.apikey)).then((function(n){t.warnings=0,t.errors=0;for(var r=0;r<n.length;r++)"warning"==n[r].type?t.warnings++:"error"==n[r].type&&t.errors++})).catch((function(n){console.error(n),t.serverError=!0}))}}},a=c,u=(r("c855"),r("b709")),d=Object(u["a"])(a,e,i,!1,null,"99e776a2",null);n["default"]=d.exports},6657:function(t,n,r){"use strict";var e=r("d6de"),i=r("e3e8"),s=r("aeda").f,o=r("7714"),c=r("5569"),a=r("28dd"),u=r("d568"),d=r("6b2d"),f=r("c1f8"),l=i("".startsWith),h=i("".slice),p=Math.min,g=d("startsWith"),v=!f&&!g&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();e({target:"String",proto:!0,forced:!v&&!g},{startsWith:function(t){var n=c(u(this));a(t);var r=o(p(arguments.length>1?arguments[1]:void 0,n.length)),e=c(t);return l?l(n,e,r):h(n,r,r+e.length)===e}})},"8cdd":function(t,n,r){"use strict";var e=r("49bb").PROPER,i=r("0b9c"),s=r("31bb"),o=r("5569"),c=r("8480"),a=r("9354"),u="toString",d=RegExp.prototype,f=d[u],l=c((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),h=e&&f.name!=u;(l||h)&&i(RegExp.prototype,u,(function(){var t=s(this),n=o(t.source),r=o(a(t));return"/"+n+"/"+r}),{unsafe:!0})},9354:function(t,n,r){var e=r("e40b"),i=r("460c"),s=r("6b1e"),o=r("e281"),c=RegExp.prototype;t.exports=function(t){var n=t.flags;return void 0!==n||"flags"in c||i(t,"flags")||!s(c,t)?n:e(o,t)}},bc26:function(t,n,r){"use strict";var e=r("d6de"),i=r("e3e8"),s=r("aeda").f,o=r("7714"),c=r("5569"),a=r("28dd"),u=r("d568"),d=r("6b2d"),f=r("c1f8"),l=i("".endsWith),h=i("".slice),p=Math.min,g=d("endsWith"),v=!f&&!g&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();e({target:"String",proto:!0,forced:!v&&!g},{endsWith:function(t){var n=c(u(this));a(t);var r=arguments.length>1?arguments[1]:void 0,e=n.length,i=void 0===r?e:p(o(r),e),s=c(t);return l?l(n,s,i):h(n,i-s.length,i)===s}})},c55c:function(t,n,r){"use strict";r("bc26"),r("f6aa"),r("093e"),r("8cdd"),r("6657"),r("27e5"),r("3971");n["a"]={props:{proxy:Object},created:function(){this.endpoint=this.item.endpoint||this.item.url,this.endpoint.endsWith("/")&&(this.endpoint=this.endpoint.slice(0,-1))},methods:{fetch:function(t){function n(n,r){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}((function(t,n){var r,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i={};null!==(r=this.proxy)&&void 0!==r&&r.useCredentials&&(i.credentials="include"),void 0!==this.item.useCredentials&&(i.credentials=!0===this.item.useCredentials?"include":"omit"),i=Object.assign(i,n),t.startsWith("/")&&(t=t.slice(1));var s=this.endpoint;return t&&(s="".concat(this.endpoint,"/").concat(t)),fetch(s,i).then((function(t){if(!t.ok)throw new Error("Not 2xx response");return e?t.json():t}))}))}}},c855:function(t,n,r){"use strict";r("d17c")},d17c:function(t,n,r){}}]);
//# sourceMappingURL=chunk-2b97448a.c446eb2b.js.map