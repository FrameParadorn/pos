(function(t){function e(e){for(var n,s,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/pos/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-toolbar",[r("v-app-bar-nav-icon"),r("v-toolbar-title",[t._v("Discover")]),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("mdi-magnify")])],1)],1),r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{dense:""}},t._l(t.cards,(function(e){return r("v-col",{key:e.title,attrs:{cols:e.flex}},[r("v-card",[r("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,height:"200px"}}),r("v-card-actions",[r("v-row",[r("v-col",[r("span",[t._v("100 บาท ")])]),r("v-col",[r("v-btn",{staticClass:"ml-3",attrs:{color:"orange"},on:{click:t.send}},[t._v(" ซื้อ ")])],1)],1)],1)],1)],1)})),1)],1)],1)},a=[],s={methods:{send:function(){var t=this;this.$liff.sendMessages([{type:"text",text:"สั่ง นมสด 100 บาท"}]).then((function(){t.$liff.closeWindow()})).catch((function(t){console.error(t.code,t.message)}))}},beforeCreate:function(){this.$liff.init({liffId:"1656018498-mlPeZyAE"},(function(){}),(function(t){return console.error(t.code,t.message)}))},data:function(){return{cards:[{title:"Favorite road trips",src:"https://source.unsplash.com/1600x900/?food",flex:6},{title:"Best airlines",src:"https://source.unsplash.com/1600x900/?food2",flex:6},{title:"Best airlines",src:"https://source.unsplash.com/1600x900/?food3",flex:6},{title:"Best airlines",src:"https://source.unsplash.com/1600x900/?food4",flex:6},{title:"Best airlines",src:"https://source.unsplash.com/1600x900/?food5",flex:6},{title:"Best airlines",src:"https://source.unsplash.com/1600x900/?food6",flex:6}]}}},i=s,c=r("2877"),l=r("6544"),f=r.n(l),u=r("5bc1"),p=r("8336"),d=r("b0af"),v=r("99d9"),h=r("62ad"),b=r("a523"),x=r("132d"),m=r("adda"),y=r("0fd9"),g=r("2fa4"),w=r("71d9"),_=r("2a7f"),O=Object(c["a"])(i,o,a,!1,null,null,null),V=O.exports;f()(O,{VAppBarNavIcon:u["a"],VBtn:p["a"],VCard:d["a"],VCardActions:v["a"],VCol:h["a"],VContainer:b["a"],VIcon:x["a"],VImg:m["a"],VRow:y["a"],VSpacer:g["a"],VToolbar:w["a"],VToolbarTitle:_["a"]});var j=r("f309");n["a"].use(j["a"]);var P=new j["a"]({});n["a"].prototype.$liff=window.liff,n["a"].config.productionTip=!1,new n["a"]({vuetify:P,render:function(t){return t(V)}}).$mount("#app")}});
//# sourceMappingURL=app.e0eb7521.js.map