(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["193c4d8e"],{"3b2b":function(t,e,a){var i=a("7726"),s=a("5dbc"),n=a("86cc").f,r=a("9093").f,l=a("aae3"),o=a("0bfb"),c=i.RegExp,p=c,u=c.prototype,d=/a/g,f=/a/g,h=new c(d)!==d;if(a("9e1e")&&(!h||a("79e5")(function(){return f[a("2b4c")("match")]=!1,c(d)!=d||c(f)==f||"/a/i"!=c(d,"i")}))){c=function(t,e){var a=this instanceof c,i=l(t),n=void 0===e;return!a&&i&&t.constructor===c&&n?t:s(h?new p(i&&!n?t.source:t,e):p((i=t instanceof c)?t.source:t,i&&n?o.call(t):e),a?this:u,c)};for(var b=function(t){t in c||n(c,t,{configurable:!0,get:function(){return p[t]},set:function(e){p[t]=e}})},m=r(p),y=0;m.length>y;)b(m[y++]);u.constructor=c,c.prototype=u,a("2aba")(i,"RegExp",c)}a("7a56")("RegExp")},4917:function(t,e,a){"use strict";var i=a("cb7c"),s=a("9def"),n=a("0390"),r=a("5f1b");a("214f")("match",1,function(t,e,a,l){return[function(a){var i=t(this),s=void 0==a?void 0:a[e];return void 0!==s?s.call(a,i):new RegExp(a)[e](String(i))},function(t){var e=l(a,t,this);if(e.done)return e.value;var o=i(t),c=String(this);if(!o.global)return r(o,c);var p=o.unicode;o.lastIndex=0;var u,d=[],f=0;while(null!==(u=r(o,c))){var h=String(u[0]);d[f]=h,""===h&&(o.lastIndex=n(c,s(o.lastIndex),p)),f++}return 0===f?null:d}]})},4938:function(t,e,a){},ac99:function(t,e,a){"use strict";var i=a("4938"),s=a.n(i);s.a},f241:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:"",reveal:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[a("q-icon",{attrs:{name:"menu"}})],1),a("q-toolbar-title",[t._v(t._s(t.typeListObj[t.$route.query.id]))]),a("q-btn-dropdown",{attrs:{flat:"",label:"更多"}},[a("q-list",t._l(t.rightTopMenuList,function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.index,attrs:{clickable:"",tag:"a",target:"_blank",href:e.href}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1),a("q-item-section",[t._v(t._s(e.title))])],1)}),1)],1)],1)],1),a("q-drawer",{attrs:{bordered:"","content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("div",{staticClass:"left-top flex justify-between absolute-top",attrs:{id:"left-top"}},[a("q-select",{attrs:{outlined:"",filled:"",options:t.typeClassOptions},model:{value:t.typeClass,callback:function(e){t.typeClass=e},expression:"typeClass"}}),a("q-btn-dropdown",{staticStyle:{height:"56px"},attrs:{flat:"",label:"设置"}},[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-toggle",{attrs:{dense:""},model:{value:t.showEdit,callback:function(e){t.showEdit=e},expression:"showEdit"}},[t._v("菜单编辑")])],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.showAllType}},[a("q-item-section",{staticStyle:{"padding-left":"18px"},attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fas fa-list",size:"22px"}})],1),a("q-item-section",[t._v("恢复默认")])],1)],1)],1)],1),a("q-list",{staticClass:"rounded-borders text-primary q-pa-md q-mt-xl",attrs:{separator:"",id:"left-list"}},t._l(t.typeList,function(e){return a("q-item",{directives:[{name:"show",rawName:"v-show",value:!t.hideTypeList.includes(e.id),expression:"!hideTypeList.includes(item.id)"},{name:"ripple",rawName:"v-ripple"}],key:e.id,attrs:{clickable:"","exact-active-class":"menu-link",to:"/?id="+e.id,active:t.$route.query.id===e.id},on:{click:function(a){return t.clickHandler(e.id)}}},[a("q-item-section",[t._v(t._s(e.name))]),a("q-item-section",{attrs:{side:"",top:""}},[t.showEdit?a("q-btn",{attrs:{flat:"",icon:"delete"},on:{click:function(a){return t.hideType(e.id)}}}):t._e()],1)],1)}),1)],1),a("q-page-container",[a("router-view"),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}})],1)],1)],1)},s=[],n=(a("4917"),a("6762"),a("2fdb"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("3b2b"),a("a481"),a("758b")),r={name:"MyLayout",data:function(){return{leftDrawerOpen:this.$q.platform.is.desktop,showEdit:!1,allTypeListData:{},typeList:[],typeListObj:{},typeClass:localStorage.getItem("slackTypeClass")&&localStorage.getItem("slackTypeClass").replace(new RegExp('"',"g"),"")||"全部",typeClassOptions:[],hideTypeList:JSON.parse(localStorage.getItem("slackHideTabs"))||["101"],rightTopMenuList:[{href:"https://github.com/tophubs/to-be-slack",icon:"fab fa-github",title:"GitHub 仓库"},{href:"https://github.com/tophubs/to-be-slack/wiki/%E6%9C%8D%E5%8A%A1%E5%85%AC%E5%91%8A",icon:"fas fa-bullhorn",title:"服务公告"},{href:"https://github.com/tophubs/to-be-slack/wiki/%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E#chrome-%E6%8F%92%E4%BB%B6",icon:"fab fa-chrome",title:"Chrome 插件"},{href:"https://github.com/tophubs/to-be-slack/wiki/%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E#pwa-%E7%A8%8B%E5%BA%8F",icon:"fas fa-mobile-alt",title:"PWA 程序"},{href:"https://github.com/tophubs/to-be-slack/wiki/%E4%BD%BF%E7%94%A8%E8%AF%B4%E6%98%8E#%E6%A1%8C%E9%9D%A2%E7%AB%AF%E7%A8%8B%E5%BA%8F",icon:"fas fa-laptop",title:"桌面端程序"}]}},watch:{typeClass:{handler:function(t){localStorage.setItem("slackTypeClass",JSON.stringify(t)),this.typeList=this.allTypeListData[t]}},hideTypeList:{handler:function(t){localStorage.setItem("slackHideTabs",JSON.stringify(t))}}},methods:{compare:function(t){return function(e,a){var i=e[t],s=a[t];return s-i}},getAllType:function(){var t=this;n["a"].get("/GetAllType").then(function(e){t.$set(t,"allTypeListData",e.data.Data);var a=Object.keys(e.data.Data);t.$set(t,"typeClassOptions",a),t.$set(t,"typeList",e.data.Data[t.typeClass])})},hideType:function(t){this.hideTypeList.includes(t)||this.hideTypeList.push(t)},showAllType:function(){this.$set(this,"hideTypeList",["101"])},clickHandler:function(t){localStorage.setItem("slackActiveTab",t)}},created:function(){this.getAllType()},mounted:function(){var t=!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);t&&(document.getElementById("left-top").classList.remove("absolute-top"),document.getElementById("left-list").classList.remove("q-mt-xl")),this.hideType("101")}},l=r,o=(a("ac99"),a("2877")),c=Object(o["a"])(l,i,s,!1,null,"3b2580a7",null);e["default"]=c.exports}}]);