(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a962378"],{"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,r){var n=r("c6b6"),s=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var a=r.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},"1bc4":function(t,e,r){"use strict";r("4de4"),r("c975"),r("b0c0"),r("a9e3"),r("b64b"),r("498a");e["a"]=function(t,e){for(var r=function(){var r=s[n];"assignee"===r?t=t.filter((function(t){return t[r].id===Number(e[r])})):"search"===r?e[r].length?t=t.filter((function(t){return t.name.toLowerCase().indexOf(e[r].toLowerCase().trim())+1})):delete e[r]:t=t.filter((function(t){return t[r]===Number(e[r])}))},n=0,s=Object.keys(e);n<s.length;n++)r();return t}},"1f26":function(t,e,r){t.exports=r.p+"img/cat.8d73a896.jpg"},"498a":function(t,e,r){"use strict";var n=r("23e7"),s=r("58a8").trim,a=r("c8d2");n({target:"String",proto:!0,forced:a("trim")},{trim:function(){return s(this)}})},"4de4":function(t,e,r){"use strict";var n=r("23e7"),s=r("b727").filter,a=r("1dde"),i=r("ae40"),o=a("filter"),c=i("filter");n({target:"Array",proto:!0,forced:!o||!c},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),s=r("5899"),a="["+s+"]",i=RegExp("^"+a+a+"*"),o=RegExp(a+a+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,r){var n=r("861d"),s=r("d2bb");t.exports=function(t,e,r){var a,i;return s&&"function"==typeof(a=e.constructor)&&a!==r&&n(i=a.prototype)&&i!==r.prototype&&s(t,i),t}},7277:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dashboard"},[t._m(0),n("div",{staticClass:"dashboard__content tasks"},[n("Search",{on:{filter:t.filter,reset:t.reset}}),t.Tasks.length?n("Tasks",{attrs:{tasks:t.Tasks}}):t.flag?n("div",{staticClass:"tasks__not-found"},[n("p",[t._v("Sorry, no matches were found for your query.")]),n("div",{staticClass:"tasks__cat"},[n("img",{attrs:{src:r("1f26"),alt:"sad cat"}})])]):n("div",[t._v("Loading...")])],1)])},s=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"header"},[r("h1",{staticClass:"header__title"},[t._v("Dashboard")])])}],a=(r("b0c0"),r("b64b"),r("2909")),i=(r("96cf"),r("1da1")),o=r("c106"),c=r("8d91"),u=r("d8e7"),l=r("1bc4"),f={data:function(){return{tasks:[],flag:!1,foundTasks:[],filterOptions:{}}},components:{Search:o["a"],Tasks:c["a"]},methods:{getTasks:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getByAuthUser().then((function(t){return t})).catch((function(t){return console.log(t.response)}));case 2:r=e.sent,t.tasks=r.data;case 4:case"end":return e.stop()}}),e)})))()},filter:function(t){this.foundTasks=Object(a["a"])(this.tasks),this.filterOptions[t.name]=t.valueAttr,this.foundTasks=Object(l["a"])(this.foundTasks,this.filterOptions),this.flag=!!Object.keys(this.filterOptions).length},reset:function(){this.filterOptions={},this.foundTasks=[],this.flag=!1}},mounted:function(){this.getTasks()},computed:{Tasks:function(){return this.foundTasks.length||this.flag?this.foundTasks:this.tasks}}},d=f,p=r("2877"),h=Object(p["a"])(d,n,s,!1,null,null,null);e["default"]=h.exports},"841c":function(t,e,r){"use strict";var n=r("d784"),s=r("825a"),a=r("1d80"),i=r("129f"),o=r("14c3");n("search",1,(function(t,e,r){return[function(e){var r=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var a=s(t),c=String(this),u=a.lastIndex;i(u,0)||(a.lastIndex=0);var l=o(a,c);return i(a.lastIndex,u)||(a.lastIndex=u),null===l?-1:l.index}]}))},"8d91":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"tasks__list"},t._l(t.tasks,(function(e){return r("li",{key:e.id,staticClass:"tasks__list-item"},[r("div",{staticClass:"tasks__list-title"},[r("router-link",{staticClass:"tasks__list-title-id",attrs:{tag:"a",to:"/project/"+e.projectId+"/task-"+e.id}},[t._v("task-"+t._s(e.id))]),r("router-link",{staticClass:"tasks__list-title-name",attrs:{tag:"a",to:"/project/"+e.projectId+"/task-"+e.id}},[t._v(t._s(e.name))])],1),r("div",{staticClass:"tasks__list-state"},[void 0!==t.$root.attributes.priority[e.priority]?r("div",[r("span",{style:{backgroundColor:t.$root.attributes.priority[e.priority].style}},[t._v(t._s(t.$root.attributes.priority[e.priority].name))])]):t._e(),void 0!==t.$root.attributes.priority[e.type]?r("div",[r("span",{style:{backgroundColor:t.$root.attributes.type[e.type].style}},[t._v(t._s(t.$root.attributes.type[e.type].name))])]):t._e(),void 0!==t.$root.attributes.priority[e.status]?r("div",[r("span",{style:{backgroundColor:t.$root.attributes.status[e.status].style}},[t._v(t._s(t.$root.attributes.status[e.status].name))])]):t._e(),r("div",[r("span",[t._v(t._s(e.assignee.name)+" "+t._s(e.assignee.surname))])])])])})),0)},s=[],a=(r("ba59"),{name:"Tasks",props:{tasks:{type:Array,default:function(){return[]}}}}),i=a,o=r("2877"),c=Object(o["a"])(i,n,s,!1,null,null,null);e["a"]=c.exports},9263:function(t,e,r){"use strict";var n=r("ad6d"),s=r("9f7f"),a=RegExp.prototype.exec,i=String.prototype.replace,o=a,c=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=s.UNSUPPORTED_Y||s.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=c||l||u;f&&(o=function(t){var e,r,s,o,f=this,d=u&&f.sticky,p=n.call(f),h=f.source,v=0,_=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),_=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(h="(?: "+h+")",_=" "+_,v++),r=new RegExp("^(?:"+h+")",p)),l&&(r=new RegExp("^"+h+"$(?!\\s)",p)),c&&(e=f.lastIndex),s=a.call(d?r:f,_),d?s?(s.input=s.input.slice(v),s[0]=s[0].slice(v),s.index=f.lastIndex,f.lastIndex+=s[0].length):f.lastIndex=0:c&&s&&(f.lastIndex=f.global?s.index+s[0].length:e),l&&s&&s.length>1&&i.call(s[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(s[o]=void 0)})),s}),t.exports=o},"9f7f":function(t,e,r){"use strict";var n=r("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a9e3:function(t,e,r){"use strict";var n=r("83ab"),s=r("da84"),a=r("94ca"),i=r("6eeb"),o=r("5135"),c=r("c6b6"),u=r("7156"),l=r("c04e"),f=r("d039"),d=r("7c73"),p=r("241c").f,h=r("06cf").f,v=r("9bf2").f,_=r("58a8").trim,g="Number",b=s[g],x=b.prototype,k=c(d(x))==g,y=function(t){var e,r,n,s,a,i,o,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=_(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+u}for(a=u.slice(2),i=a.length,o=0;o<i;o++)if(c=a.charCodeAt(o),c<48||c>s)return NaN;return parseInt(a,n)}return+u};if(a(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var m,C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(k?f((function(){x.valueOf.call(r)})):c(r)!=g)?u(new b(y(e)),r,C):y(e)},E=n?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;E.length>I;I++)o(b,m=E[I])&&!o(C,m)&&v(C,m,h(b,m));C.prototype=x,x.constructor=C,i(s,g,C)}},ac1f:function(t,e,r){"use strict";var n=r("23e7"),s=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},b64b:function(t,e,r){var n=r("23e7"),s=r("7b0b"),a=r("df75"),i=r("d039"),o=i((function(){a(1)}));n({target:"Object",stat:!0,forced:o},{keys:function(t){return a(s(t))}})},c106:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"search",attrs:{tabindex:"0"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search__input",class:{"search__input--fix":""===t.search},attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.findTasks]}}),r("div",{staticClass:"search__options",class:{"search__options--fix":""===t.search}},[r("button",{staticClass:"search__options-btn search__options-btn--filter",on:{click:function(e){t.filterShow=!t.filterShow}}},[r("svg",{attrs:{width:"23",height:"19",viewBox:"0 0 23 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"filter",attrs:{d:"M0.5625 5.90625H17.75V3.71875H0.5625V5.90625ZM20.875 0.125C20.0121 0.125 19.3125 0.824555 19.3125 1.6875V7.9375C19.3125 8.80044 20.0121 9.5 20.875 9.5C21.7379 9.5 22.4375 8.80044 22.4375 7.9375V1.6875C22.4375 0.824555 21.7379 0.125 20.875 0.125ZM11.5 13.0938V11.0625C11.5 10.1996 10.8004 9.5 9.9375 9.5C9.07456 9.5 8.375 10.1996 8.375 11.0625V17.3125C8.375 18.1754 9.07456 18.875 9.9375 18.875C10.8004 18.875 11.5 18.1754 11.5 17.3125V15.2812H22.4375V13.0938H11.5ZM0.5625 15.2812H6.8125V13.0938H0.5625V15.2812Z"}})])]),""!==t.search?r("button",{staticClass:"search__options-btn search__options-btn--clear",on:{click:t.clearSearch}},[r("svg",{attrs:{width:"19",height:"19",viewBox:"0 0 19 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"clear",attrs:{d:"M18.2969 2.70313L16.2969 0.71875L9.5 7.51563L2.6875 0.71875L0.703125 2.70313L7.5 9.51563L0.71875 16.2969L2.70313 18.2969L9.5 11.5L16.2969 18.3125L18.2969 16.3125L11.4844 9.51563L18.2969 2.70313Z"}})])]):t._e(),r("button",{staticClass:"search__options-btn search__options-btn--search"})]),t.filterShow?r("div",{staticClass:"attributes"},[t._l(this.$root.attributes,(function(e,n,s){return r("div",{key:s,staticClass:"attributes__item"},[r("label",{staticClass:"attributes__label",attrs:{for:n}},[t._v(t._s(n)+":")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.keys[n],expression:"keys[name]"}],ref:"select",refInFor:!0,staticClass:"select",attrs:{id:n},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.keys,n,e.target.multiple?r:r[0])},function(e){return t.filter(n,t.keys[n])}]}},[r("option",{attrs:{value:"default",selected:"",disabled:""}},[t._v("Any")]),t._l(e,(function(e,n){return r("option",{key:n,staticClass:"select__option",domProps:{value:n}},[t._v(t._s(e.name))])}))],2)])})),r("div",{staticClass:"attributes__item"}),r("button",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.reset(e)}}},[t._v("Reset")])],2):t._e()])},s=[],a=(r("d3b7"),r("ac1f"),r("841c"),r("ddb0"),{name:"Search",data:function(){return{search:"",assignee:{id:"default"},keys:{type:"default",priority:"default",status:"default"},filterShow:!1}},methods:{clearSearch:function(){this.search="",this.$emit("filter",{name:"search",valueAttr:this.search})},findTasks:function(){this.$emit("filter",{name:"search",valueAttr:this.search})},filter:function(t,e){this.$emit("filter",{name:t,valueAttr:e})},reset:function(){for(var t in this.search="",this.keys)this.keys[t]=this.assignee.id="default";this.$emit("reset")}}}),i=a,o=r("2877"),c=Object(o["a"])(i,n,s,!1,null,null,null);e["a"]=c.exports},c8d2:function(t,e,r){var n=r("d039"),s=r("5899"),a="​᠎";t.exports=function(t){return n((function(){return!!s[t]()||a[t]()!=a||s[t].name!==t}))}},c975:function(t,e,r){"use strict";var n=r("23e7"),s=r("4d64").indexOf,a=r("a640"),i=r("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,u=a("indexOf"),l=i("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?o.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),s=r("d039"),a=r("b622"),i=r("9263"),o=r("9112"),c=a("species"),u=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var h=a(t),v=!s((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),_=v&&!s((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return e=!0,null},r[h](""),!e}));if(!v||!_||"replace"===t&&(!u||!l||d)||"split"===t&&!p){var g=/./[h],b=r(h,""[t],(function(t,e,r,n,s){return e.exec===i?v&&!s?{done:!0,value:g.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=b[0],k=b[1];n(String.prototype,t,x),n(RegExp.prototype,h,2==e?function(t,e){return k.call(t,this,e)}:function(t){return k.call(t,this)})}f&&o(RegExp.prototype[h],"sham",!0)}},d8e7:function(t,e,r){"use strict";var n=r("d4ec"),s=r("bee2"),a=r("c427"),i=function(){function t(){Object(n["a"])(this,t)}return Object(s["a"])(t,[{key:"getById",value:function(t){return Object(a["a"])().get("/task/".concat(t))}},{key:"getByAuthUser",value:function(){return Object(a["a"])().get("/task/user")}},{key:"addTask",value:function(t){return Object(a["a"])().post("/task",t)}},{key:"updateTask",value:function(t){return Object(a["a"])().put("/task",t)}},{key:"deleteTask",value:function(t){return Object(a["a"])().delete("/task/".concat(t))}}]),t}();e["a"]=new i}}]);
//# sourceMappingURL=chunk-3a962378.b0a0e82c.js.map