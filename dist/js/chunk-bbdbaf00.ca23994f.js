(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bbdbaf00"],{"0cb2":function(t,e,a){var n=a("7b0b"),r=Math.floor,s="".replace,i=/\$([$&'`]|\d\d?|<[^>]*>)/g,c=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,a,o,u,l){var f=a+t.length,d=o.length,p=c;return void 0!==u&&(u=n(u),p=i),s.call(l,p,(function(n,s){var i;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(f);case"<":i=u[s.slice(1,-1)];break;default:var c=+s;if(0===c)return n;if(c>d){var l=r(c/10);return 0===l?n:l<=d?void 0===o[l-1]?s.charAt(1):o[l-1]+s.charAt(1):n}i=o[c-1]}return void 0===i?"":i}))}},"14c3":function(t,e,a){var n=a("c6b6"),r=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var s=a.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"159b":function(t,e,a){var n=a("da84"),r=a("fdbc"),s=a("17c2"),i=a("9112");for(var c in r){var o=n[c],u=o&&o.prototype;if(u&&u.forEach!==s)try{i(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(t,e,a){"use strict";var n=a("b727").forEach,r=a("a640"),s=a("ae40"),i=r("forEach"),c=s("forEach");t.exports=i&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1d21":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("header",{staticClass:"header"},[a("h1",{staticClass:"header__title"},[t._v(t._s(t.projectName))])]),a("div",{staticClass:"task"},[a("div",{staticClass:"task__left"},[a("div",{staticClass:"task__header"},[a("div",{staticClass:"task__header-item"},[a("button",{staticClass:"task__header-btn task__header-btn--back",on:{click:function(e){return e.preventDefault(),t.action(e)}}},[a("small"),a("span",[t._v("back")])]),a("span",{staticClass:"task__header-subtitle"},[t._v("task-"+t._s(t.task.id))])]),a("div",{staticClass:"task__header-item task__header-item--buttons"},[a("button",{staticClass:"task__header-btn task__header-btn--edit",on:{click:function(e){return e.preventDefault(),t.editTask(e)}}}),a("b-button",{staticClass:"task__header-btn task__header-btn--delete",on:{click:function(e){return e.preventDefault(),t.deleteTask(e)}}})],1)]),a("div",{staticClass:"task__content"},[a("div",{staticClass:"task__content-title"},[t.isEdit?a("b-form-input",{staticClass:"form__input-field",attrs:{type:"text",required:""},model:{value:t.taskName,callback:function(e){t.taskName=e},expression:"taskName"}}):a("span",{staticClass:"task__header-title"},[t._v(t._s(t.taskName))])],1),a("div",{staticClass:"task__text"},[t.isEdit?a("div",[a("b-form-textarea",{staticClass:"form__textarea-field",attrs:{required:""},model:{value:t.taskContent,callback:function(e){t.taskContent=e},expression:"taskContent"}}),a("button",{staticClass:"task__btn button",on:{click:function(e){return e.preventDefault(),t.updateTask(e)}}},[t._v("Save ")])],1):a("p",{domProps:{innerHTML:t._s(t.urlify(t.taskContent))}})]),t._m(0)]),a("b-form",{staticClass:"form"},[a("div",{staticClass:"form__item"},[a("b-form-textarea",{staticClass:"form__textarea-field",attrs:{type:"text",placeholder:"Write your comment"}})],1),a("div",{staticClass:"comments__footer"},[a("button",{staticClass:"button comments__btn",attrs:{type:"submit"}},[t._v("Add comment ")])])])],1),a("div",{staticClass:"task__right"},[a("h2",{staticClass:"state"},[t._v("State:")]),a("div",{staticClass:"attributes attributes--task"},[a("div",{staticClass:"attributes__item"},[a("label",{staticClass:"attributes__label"},[t._v("Created by:")]),a("span",{staticClass:"select select--disabled"},[t._v(t._s(t.task.author.name)+" "+t._s(t.task.author.surname))])]),t._l(t.attributes,(function(e,n,r){return a("form",{key:r,staticClass:"attributes__item",on:{change:function(e){return t.updateTask(n)}}},[a("label",{staticClass:"attributes__label"},[t._v(t._s(n)+":")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.keys[n],expression:"keys[name]"}],staticClass:"select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.keys,n,e.target.multiple?a:a[0])}}},t._l(e,(function(e,n){return a("option",{key:n,staticClass:"select__option",domProps:{value:n}},[t._v(t._s(e.name)+" ")])})),0)])})),a("form",{staticClass:"attributes__item",on:{change:t.updateTask}},[a("label",{staticClass:"attributes__label",attrs:{for:"assignee"}},[t._v("Assignee:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.assigneeId,expression:"assigneeId"}],staticClass:"select",attrs:{id:"assignee"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.assigneeId=e.target.multiple?a:a[0]}}},t._l(t.users,(function(e){return a("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name)+" "+t._s(e.surname)+" ")])})),0)])],2)])])])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comments"},[a("div",{staticClass:"comments__item"},[a("div",{staticClass:"comments__left"},[a("div",{staticClass:"comments__avatar avatar-wrapper"},[a("span",{staticClass:"avatar"},[a("small",[t._v("М")]),a("small",[t._v("Б")])])])]),a("div",{staticClass:"comments__right"},[a("div",{staticClass:"comments__title"},[a("p",[t._v("Марсель Белялов")]),a("span",[t._v("1 марта")])]),a("div",{staticClass:"comments__action"},[a("p",{staticClass:"comments__text"},[t._v('Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.')])])])]),a("div",{staticClass:"comments__item"},[a("div",{staticClass:"comments__left"},[a("div",{staticClass:"comments__avatar avatar-wrapper"},[a("span",{staticClass:"avatar"},[a("small",[t._v("М")]),a("small",[t._v("Б")])])])]),a("div",{staticClass:"comments__right"},[a("div",{staticClass:"comments__title"},[a("p",[t._v("Марсель Белялов")]),a("span",[t._v("1 марта")])]),a("div",{staticClass:"comments__action"},[a("small",[a("span",[t._v("Assignee")]),a("span",[a("span",{staticClass:"comments__action-item comments__action-item--arrow"},[t._v("Айнур")]),a("span",{staticClass:"comments__action-item"},[t._v("Марсель")])])])])])])])}],s=(a("b0c0"),a("a9e3"),a("d3b7"),a("ac1f"),a("5319"),a("ddb0"),a("5530")),i=(a("96cf"),a("1da1")),c=a("35ca"),o=a("d8e7"),u=a("e71c"),l={priority:{0:{name:"Minor",style:"#ACCCF1"},1:{name:"Normal",style:"#ACF1AF"},2:{name:"Major",style:"#F0ACF1"},3:{name:"Critical",style:"#F1ACAC"}},type:{0:{name:"Bug",style:"#F1ACAC"},1:{name:"Feature",style:"#F0ACF1"},2:{name:"Question",style:"#CFF1AC"}},status:{0:{name:"Open",style:"#ACCCF1"},1:{name:"In progress",style:"#F1E2AC"},2:{name:"Fixed",style:"#ACF1AF"},3:{name:"Won't fix",style:"#CFF1AC"}}},f={name:"Task",data:function(){return{users:[],task:{id:null,projectId:null,priority:0,status:0,type:0,author:{},assignee:{},name:"",content:""},name:"",projectName:"",content:"",assigneeId:0,attributes:{},keys:{type:0,priority:0,status:0},taskName:"",taskContent:"",isEdit:!1}},methods:{fetchUsers:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].getAll().then((function(t){return t})).catch((function(t){return console.log(t)}));case 2:a=e.sent,t.users=a.data;case 4:case"end":return e.stop()}}),e)})))()},fetchTask:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].getById(t.$route.params.id).then((function(e){t.task=Object(s["a"])({},e.data),console.log(e)})).catch((function(t){return console.log(t.response)}));case 2:case"end":return e.stop()}}),e)})))()},fetchProject:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u["a"].getById(t.$route.params.projectId).then((function(e){return t.projectName=e.data.name})).catch((function(t){return console.log(t.response)}));case 2:case"end":return e.stop()}}),e)})))()},updateTask:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].updateTask({id:t.task.id,name:t.taskName,content:t.taskContent,assigneeId:Number(t.assigneeId),priority:Number(t.keys.priority),status:Number(t.keys.status),type:Number(t.keys.type)}).then((function(t){return console.log(t)})).catch((function(t){return console.log(t)}));case 2:t.isEdit=!1;case 3:case"end":return e.stop()}}),e)})))()},action:function(){this.$router.push("/project/".concat(this.$route.params.projectId))},editTask:function(){this.isEdit=!this.isEdit},deleteTask:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["a"].deleteTask(t.$route.params.id).then((function(e){200===e.status?t.$router.push("/project/".concat(t.$route.params.projectId)):console.log("Что-то пошло не так!")}));case 2:case"end":return e.stop()}}),e)})))()},urlify:function(t){var e=/(https?:\/\/[^\s]+)/g;return t.replace(e,(function(t){return'<a target="blank" href="'+t+'">'+t+"</a>"}))}},mounted:function(){var t=this;this.attributes=l,this.fetchTask().then((function(){t.keys.priority=t.task.priority,t.keys.type=t.task.type,t.keys.status=t.task.status,t.assigneeId=t.task.assignee.id,t.taskName=t.task.name,t.taskContent=t.task.content})),this.fetchUsers(),this.fetchProject()}},d=f,p=a("2877"),v=Object(p["a"])(d,n,r,!1,null,null,null);e["default"]=v.exports},4160:function(t,e,a){"use strict";var n=a("23e7"),r=a("17c2");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"4de4":function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").filter,s=a("1dde"),i=a("ae40"),c=s("filter"),o=i("filter");n({target:"Array",proto:!0,forced:!c||!o},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},5319:function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),s=a("50c4"),i=a("a691"),c=a("1d80"),o=a("8aa5"),u=a("0cb2"),l=a("14c3"),f=Math.max,d=Math.min,p=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,_=v?"$":"$0";return[function(a,n){var r=c(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,r,n):e.call(String(r),a,n)},function(t,n){if(!v&&m||"string"===typeof n&&-1===n.indexOf(_)){var c=a(e,t,this,n);if(c.done)return c.value}var h=r(t),b=String(this),g="function"===typeof n;g||(n=String(n));var k=h.global;if(k){var y=h.unicode;h.lastIndex=0}var C=[];while(1){var x=l(h,b);if(null===x)break;if(C.push(x),!k)break;var E=String(x[0]);""===E&&(h.lastIndex=o(b,s(h.lastIndex),y))}for(var I="",A=0,O=0;O<C.length;O++){x=C[O];for(var w=String(x[0]),N=f(d(i(x.index),b.length),0),j=[],R=1;R<x.length;R++)j.push(p(x[R]));var T=x.groups;if(g){var P=[w].concat(j,N,b);void 0!==T&&P.push(T);var S=String(n.apply(void 0,P))}else S=u(w,b,N,j,T,n);N>=A&&(I+=b.slice(A,N)+S,A=N+w.length)}return I+b.slice(A)}]}))},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),s="["+r+"]",i=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),o=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,a){var n=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var s,i;return r&&"function"==typeof(s=e.constructor)&&s!==a&&n(i=s.prototype)&&i!==a.prototype&&r(t,i),t}},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9263:function(t,e,a){"use strict";var n=a("ad6d"),r=a("9f7f"),s=RegExp.prototype.exec,i=String.prototype.replace,c=s,o=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=r.UNSUPPORTED_Y||r.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=o||l||u;f&&(c=function(t){var e,a,r,c,f=this,d=u&&f.sticky,p=n.call(f),v=f.source,m=0,_=t;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),_=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",_=" "+_,m++),a=new RegExp("^(?:"+v+")",p)),l&&(a=new RegExp("^"+v+"$(?!\\s)",p)),o&&(e=f.lastIndex),r=s.call(d?a:f,_),d?r?(r.input=r.input.slice(m),r[0]=r[0].slice(m),r.index=f.lastIndex,f.lastIndex+=r[0].length):f.lastIndex=0:o&&r&&(f.lastIndex=f.global?r.index+r[0].length:e),l&&r&&r.length>1&&i.call(r[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(r[c]=void 0)})),r}),t.exports=c},"9f7f":function(t,e,a){"use strict";var n=a("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a9e3:function(t,e,a){"use strict";var n=a("83ab"),r=a("da84"),s=a("94ca"),i=a("6eeb"),c=a("5135"),o=a("c6b6"),u=a("7156"),l=a("c04e"),f=a("d039"),d=a("7c73"),p=a("241c").f,v=a("06cf").f,m=a("9bf2").f,_=a("58a8").trim,h="Number",b=r[h],g=b.prototype,k=o(d(g))==h,y=function(t){var e,a,n,r,s,i,c,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=_(u),e=u.charCodeAt(0),43===e||45===e){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(s=u.slice(2),i=s.length,c=0;c<i;c++)if(o=s.charCodeAt(c),o<48||o>r)return NaN;return parseInt(s,n)}return+u};if(s(h,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var C,x=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof x&&(k?f((function(){g.valueOf.call(a)})):o(a)!=h)?u(new b(y(e)),a,x):y(e)},E=n?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),I=0;E.length>I;I++)c(b,C=E[I])&&!c(x,C)&&m(x,C,v(b,C));x.prototype=g,g.constructor=x,i(r,h,x)}},ac1f:function(t,e,a){"use strict";var n=a("23e7"),r=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},b64b:function(t,e,a){var n=a("23e7"),r=a("7b0b"),s=a("df75"),i=a("d039"),c=i((function(){s(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return s(r(t))}})},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),r=a("d039"),s=a("b622"),i=a("9263"),c=a("9112"),o=s("species"),u=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=s("replace"),d=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,f){var v=s(t),m=!r((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),_=m&&!r((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[o]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return e=!0,null},a[v](""),!e}));if(!m||!_||"replace"===t&&(!u||!l||d)||"split"===t&&!p){var h=/./[v],b=a(v,""[t],(function(t,e,a,n,r){return e.exec===i?m&&!r?{done:!0,value:h.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),g=b[0],k=b[1];n(String.prototype,t,g),n(RegExp.prototype,v,2==e?function(t,e){return k.call(t,this,e)}:function(t){return k.call(t,this)})}f&&c(RegExp.prototype[v],"sham",!0)}},d8e7:function(t,e,a){"use strict";var n=a("d4ec"),r=a("bee2"),s=a("c427"),i=function(){function t(){Object(n["a"])(this,t)}return Object(r["a"])(t,[{key:"getById",value:function(t){return Object(s["a"])().get("/task/".concat(t))}},{key:"getByAuthUser",value:function(){return Object(s["a"])().get("/task/user")}},{key:"addTask",value:function(t){return Object(s["a"])().post("/task",t)}},{key:"updateTask",value:function(t){return Object(s["a"])().put("/task",t)}},{key:"deleteTask",value:function(t){return Object(s["a"])().delete("/task/".concat(t))}}]),t}();e["a"]=new i},dbb4:function(t,e,a){var n=a("23e7"),r=a("83ab"),s=a("56ef"),i=a("fc6a"),c=a("06cf"),o=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=i(t),r=c.f,u=s(n),l={},f=0;while(u.length>f)a=r(n,e=u[f++]),void 0!==a&&o(l,e,a);return l}})},e439:function(t,e,a){var n=a("23e7"),r=a("d039"),s=a("fc6a"),i=a("06cf").f,c=a("83ab"),o=r((function(){i(1)})),u=!c||o;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})}}]);
//# sourceMappingURL=chunk-bbdbaf00.ca23994f.js.map