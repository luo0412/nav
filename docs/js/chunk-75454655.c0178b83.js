(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75454655"],{"3e2c":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Generic",{attrs:{item:t.item},scopedSlots:t._u([{key:"content",fn:function(){return[n("p",{staticClass:"title is-4"},[t._v(t._s(t.item.name))]),n("p",{staticClass:"subtitle is-6"},[t.item.subtitle?[t._v(" "+t._s(t.item.subtitle)+" ")]:t.api?[t._v(" happily storing "+t._s(t.api.count)+" documents ")]:t._e()],2)]},proxy:!0}])})},r=[],s=n("9da1"),o=n("e3c6"),a=n("c55c"),c=n("fd6b"),u={name:"Paperless",mixins:[a["a"]],props:{item:Object},components:{Generic:c["default"]},data:function(){return{api:null}},created:function(){this.fetchStatus()},methods:{fetchStatus:function(){var t=Object(o["a"])(Object(s["a"])().mark((function t(){var e;return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null==this.item.subtitle){t.next=2;break}return t.abrupt("return");case 2:if(e=this.item.apikey,e){t.next=6;break}return console.error("apikey is not present in config.yml for the paperless entry!"),t.abrupt("return");case 6:return t.next=8,this.fetch("/api/documents/",{headers:{Authorization:"Token "+this.item.apikey}}).catch((function(t){return console.log(t)}));case 8:this.api=t.sent;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},p=u,d=n("b709"),h=Object(d["a"])(p,i,r,!1,null,null,null);e["default"]=h.exports},6657:function(t,e,n){"use strict";var i=n("d6de"),r=n("e3e8"),s=n("aeda").f,o=n("7714"),a=n("5569"),c=n("28dd"),u=n("d568"),p=n("6b2d"),d=n("c1f8"),h=r("".startsWith),l=r("".slice),f=Math.min,b=p("startsWith"),v=!d&&!b&&!!function(){var t=s(String.prototype,"startsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!v&&!b},{startsWith:function(t){var e=a(u(this));c(t);var n=o(f(arguments.length>1?arguments[1]:void 0,e.length)),i=a(t);return h?h(e,i,n):l(e,n,n+i.length)===i}})},"8cdd":function(t,e,n){"use strict";var i=n("49bb").PROPER,r=n("0b9c"),s=n("31bb"),o=n("5569"),a=n("8480"),c=n("9354"),u="toString",p=RegExp.prototype,d=p[u],h=a((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),l=i&&d.name!=u;(h||l)&&r(RegExp.prototype,u,(function(){var t=s(this),e=o(t.source),n=o(c(t));return"/"+e+"/"+n}),{unsafe:!0})},9354:function(t,e,n){var i=n("e40b"),r=n("460c"),s=n("6b1e"),o=n("e281"),a=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in a||r(t,"flags")||!s(a,t)?e:i(o,t)}},bc26:function(t,e,n){"use strict";var i=n("d6de"),r=n("e3e8"),s=n("aeda").f,o=n("7714"),a=n("5569"),c=n("28dd"),u=n("d568"),p=n("6b2d"),d=n("c1f8"),h=r("".endsWith),l=r("".slice),f=Math.min,b=p("endsWith"),v=!d&&!b&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}();i({target:"String",proto:!0,forced:!v&&!b},{endsWith:function(t){var e=a(u(this));c(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:f(o(n),i),s=a(t);return h?h(e,s,r):l(e,r-s.length,r)===s}})},c55c:function(t,e,n){"use strict";n("bc26"),n("f6aa"),n("093e"),n("8cdd"),n("6657"),n("27e5"),n("3971");e["a"]={props:{proxy:Object},created:function(){this.endpoint=this.item.endpoint||this.item.url,this.endpoint.endsWith("/")&&(this.endpoint=this.endpoint.slice(0,-1))},methods:{fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){var n,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r={};null!==(n=this.proxy)&&void 0!==n&&n.useCredentials&&(r.credentials="include"),void 0!==this.item.useCredentials&&(r.credentials=!0===this.item.useCredentials?"include":"omit"),r=Object.assign(r,e),t.startsWith("/")&&(t=t.slice(1));var s=this.endpoint;return t&&(s="".concat(this.endpoint,"/").concat(t)),fetch(s,r).then((function(t){if(!t.ok)throw new Error("Not 2xx response");return i?t.json():t}))}))}}}}]);
//# sourceMappingURL=chunk-75454655.c0178b83.js.map